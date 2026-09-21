import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(express.json());

// Lazy-initialized Gemini client
let genAI: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!genAI) {
    genAI = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return genAI;
}

const SYSTEM_INSTRUCTION_OPO_PRO = `Eres "OPO-PRO", un preparador de oposiciones de élite, especializado en Administración Local española y, en concreto, en la convocatoria de MONITORA INFANTIL DE EDUCACIÓN del Ayuntamiento de Sant Joan d'Alacant (Alicante, OPE 2026).
- Plaza: 1 plaza de Monitora Infantil de Educación, funcionaria de CARRERA, C1, Escala Admón Especial, Subescala Servicios Especiales, Clase Cometidos Especiales, Puesto nº 204.
- Sistema: Oposición pura, turno libre, sin concurso de méritos.
- Normativa: Ley 7/1985 (LRBRL), Ley 39/2015 (LPACAP), Ley 40/2015 (LRJSP), RDLeg 5/2015 (TREBEP), Ley GV 8/2010 de Régimen Local CV, Ley 4/2021 de Función Pública Valenciana, RDLeg 2/2004 (TRLRHL), Ley 2/2015 de Transparencia CV.
- Temario: Parte General (Temas 1-8) y Parte Específica (Temas 9-40, desarrollo psicoevolutivo, ACNEAE, literatura/cuento, plástica, expresión corporal, nuevas tecnologías, valores, protección de la infancia, riesgo y maltrato, escuelas de padres, estudio vigilado, acoso escolar, escuelas estivales, conciliación, música infantil, ocio y tiempo libre, subvenciones municipales, etc.).
- Formato de examen: Ejercicio 1 (60 preguntas test, 4 opciones, 90 min) con fórmula Nota = (Aciertos - Errores/3)/60 * 10; Ejercicio 2 (1 de 2 supuestos prácticos con 10 preguntas, 60 min).
- Tono: Riguroso, motivador, didáctico y 100% anclado a la legalidad y a la práctica de monitora infantil municipal. Proporciona reglas mnemotécnicas, artículos concretos y consejos prácticos para obtener la plaza nº 1.`;

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "opo-pro-backend" });
});

// AI Tutor chat endpoint
app.post("/api/gemini/tutor", async (req, res) => {
  try {
    const { message, history = [], tema } = req.body;
    if (!message) {
      return res.status(400).json({ error: "El mensaje es obligatorio." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "GEMINI_API_KEY no configurada. Puedes consultar todo el temario y preguntas integradas.",
      });
    }

    let contextualPrompt = message;
    if (tema) {
      contextualPrompt = `[Contexto: Tema ${tema} del temario oficial]\n\nPregunta de la opositora: ${message}`;
    }

    const contents = [
      ...history.map((h: { role: string; text: string }) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.text }],
      })),
      {
        role: "user",
        parts: [{ text: contextualPrompt }],
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_OPO_PRO,
      },
    });

    res.json({
      reply: response.text || "No se pudo generar una respuesta en este momento.",
    });
  } catch (error: any) {
    console.error("Error en tutor OPO-PRO:", error);
    res.status(500).json({
      error: error?.message || "Error al procesar la consulta con el preparador.",
    });
  }
});

// Dynamic official question generator endpoint adhering to Section 10 JSON
app.post("/api/gemini/generate-question", async (req, res) => {
  try {
    const { tema = 31, categoria = "Especifica", dificultad = "media", tipo = "test" } = req.body;

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "GEMINI_API_KEY no configurada.",
      });
    }

    const prompt = `Genera EXACTAMENTE 1 pregunta de oposición oficial para la convocatoria de MONITORA INFANTIL DE EDUCACIÓN del Ayuntamiento de Sant Joan d'Alacant (Alicante, OPE 2026).
Tema objetivo: ${tema} (Categoría: ${categoria}).
Dificultad: ${dificultad}.
Tipo: ${tipo}.
Debes devolver EXCLUSIVAMENTE un objeto JSON válido con la siguiente estructura exacta:
{
  "id": "T${tema}-GEN-${Date.now().toString().slice(-4)}",
  "tema": ${Number(tema)},
  "categoria": "${categoria}",
  "dificultad": "${dificultad}",
  "tipo": "test",
  "enunciado": "Texto de la pregunta...",
  "opciones": {
    "A": "Opción A",
    "B": "Opción B",
    "C": "Opción C",
    "D": "Opción D"
  },
  "correcta": "A|B|C|D",
  "explicacion": "Explicación razonada y detallada de por qué es la opción correcta y por qué se descartan las demás...",
  "referencia": "Referencia normativa o pedagógica exacta"
}
Importante: Los distractores deben ser plausibles. Rigor normativo o pedagógico total.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_OPO_PRO,
        responseMimeType: "application/json",
      },
    });

    const parsed = JSON.parse(response.text?.trim() || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Error generando pregunta:", error);
    res.status(500).json({
      error: error?.message || "Error generando la pregunta con OPO-PRO.",
    });
  }
});

// Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`OPO-PRO server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
