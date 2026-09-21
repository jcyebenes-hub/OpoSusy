# OPO-PRO · OpoSusy 🦊

Plataforma de preparación de oposiciones de élite para **Monitora Infantil de Educación (C1, funcionaria de carrera)** del Ayuntamiento de **Sant Joan d'Alacant** (Alicante, OPE 2026).

Simulacros oficiales, test por temas, supuestos prácticos, gamificación, plan de estudio, seguimiento de fallos y tutor de IA (Gemini).

## Requisitos

- **Node.js ≥ 20.19** (recomendado 22)

## Correr en local

```bash
npm install
npm run dev        # servidor en http://localhost:3000
```

Opcional (tutor IA + preguntas dinámicas):

```bash
cp .env.example .env   # y pega tu GEMINI_API_KEY
```

Sin `GEMINI_API_KEY` la app funciona completa con el temario y bancos de preguntas integrados.

## Producción (build)

```bash
npm run build && npm start
```

## Despliegue en Render (un clic)

El repo incluye `render.yaml` (Blueprint) con dos servicios:

1. **`oposusy-opo-pro`** — la app web (Express + build de Vite).
2. **`oposusy-keepalive`** — un cron que hace ping a la app cada 10 minutos.
   Así, en el **plan gratuito** de Render, el servicio no pasa a "sleep" y
   **la página carga al momento** aunque lleves rato sin usarla (solo el
   primer arranque tras un reinicio/implantación cuesta unos segundos).

Pasos:

1. Entra en [dashboard.render.com](https://dashboard.render.com) → **New → Blueprint**.
2. Selecciona el repo `jcyebenes-hub/OpoSusy`.
3. **Importante:** elige la rama **`arena/01a0c488-oposusy`** (ahí se hace el trabajo diario; cada push se despliega solo, ~1-2 min).
4. En la variable `GEMINI_API_KEY` pega tu clave (o déjala vacía si no la usas).
5. **Apply Changes** → espera a que los dos servicios queden *Live*.
6. Si cambias el nombre del servicio web, actualiza `KEEPALIVE_URL` en el cron
   (tiene que apuntar a `https://TU-SERVICIO.onrender.com/api/health`).

> Nota: Render **Free** duerme el servicio tras 15 min de inactividad y el
> pinger lo despierta cada 10 min antes de que duerma. Si algún día quieres
> arranques 100 % instantáneos garantizados, el plan *Starter* (~$7/mes)
> elimina el sleep por completo; el keep-alive se puede eliminar.

## Estructura

```
server.ts                  # Backend Express: estáticos + endpoints Gemini
render.yaml                # Blueprint de despliegue (web + keep-alive)
src/
  App.tsx                  # Enrutado por pestañas y estado global
  components/              # Vistas: temario, test, simulacro, supuestos, juegos, plan, fallos, tutor IA
  data/                    # Temario (40 temas) y bancos de preguntas
  utils/                   # storage (localStorage), PDF export, shuffle
  types.ts                 # Tipos compartidos
```

## Endpoints de la API

| Método | Ruta                          | Descripción                                    |
| ------ | ----------------------------- | ---------------------------------------------- |
| GET    | `/api/health`                 | Health check (usado por Render y keep-alive)   |
| POST   | `/api/gemini/tutor`           | Chat con el tutor OPO-PRO (requiere API key)   |
| POST   | `/api/gemini/generate-question` | Genera preguntas de oposición dinámicas      |
