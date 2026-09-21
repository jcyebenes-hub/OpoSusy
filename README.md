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

El repo incluye `render.yaml` (Blueprint) con el servicio web **`oposusy-opo-pro`**.

Pasos:

1. Entra en [dashboard.render.com](https://dashboard.render.com) → **New → Blueprint**.
2. Selecciona el repo `jcyebenes-hub/OpoSusy`.
3. **Importante:** elige la rama **`arena/01a0c488-oposusy`** (ahí se hace el trabajo diario; cada push se despliega solo, ~1-2 min).
4. **Apply** → espera a que el servicio quede *Live*.
5. Opcional (tutor IA): servicio → **Environment** → *Add Environment Variable* → `GEMINI_API_KEY` con tu clave.

## Keep-alive (que la página cargue al momento)

En el **plan gratuito** de Render el servicio duerme tras 15 min de inactividad.
Para evitarlo, el repo incluye un workflow de **GitHub Actions**
(`.github/workflows/keepalive.yml`) que pinga `/api/health` **cada 10 minutos**
(completamente gratis en repos públicos).

Para activarlo:

1. **Mergear** la rama `arena/01a0c488-oposusy` a `main` (los cron de Actions solo corren en la rama por defecto).
2. En GitHub: repo → **Settings → Variables and secrets → Actions → New repository variable**:
   - Nombre: `RENDER_APP_URL`
   - Valor: `https://oposusy-opo-pro.onrender.com` (tu URL real si el nombre cambió)

Alternativa sin GitHub Actions: cualquier pinger gratuito (p. ej. **UptimeRobot**
en modo HTTP, intervalo 5 min) apuntando a `https://TU-SERVICIO.onrender.com/api/health`.

> Nota: Render Free duerme el servicio tras 15 min de inactividad y el pinger
> lo mantiene despierto. Los **cron jobs de Render no tienen plan gratuito**
> (por eso el keep-alive va por fuera). Si algún día quieres arranques 100 %
> instantáneos garantizados, el plan *Starter* (~$7/mes) elimina el sleep
> por completo y el pinger se puede eliminar.

## Estructura

```
server.ts                  # Backend Express: estáticos + endpoints Gemini
render.yaml                # Blueprint de despliegue (servicio web)
.github/workflows/keepalive.yml  # Ping cada 10 min (anti-sleep)
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
| GET    | `/api/health`                 | Health check (usado por el keep-alive)         |
| POST   | `/api/gemini/tutor`           | Chat con el tutor OPO-PRO (requiere API key)   |
| POST   | `/api/gemini/generate-question` | Genera preguntas de oposición dinámicas      |
