# Arquitectura del Sistema — Deltoro Hermanos

## 1. Stack Tecnológico Recomendado
* **Framework Web:** Next.js (App Router) o React + Vite (según preferencia en OpenCode).
* **Estilos:** Tailwind CSS (con paleta de colores industrial configurada).
* **Componentes UI / Íconos:** Lucide-react (íconos de grúa, camión, mapa, teléfono, WhatsApp).
* **Despliegue:** Vercel / GitHub Pages.

---

## 2. Estructura de Carpetas del Proyecto (Árbol)

```text
deltoro-hermanos/
├── public/
│   ├── images/              # Fotos de grúas, mudanzas y logo
│   └── favicon.ico
├── src/
│   ├── app/                 # O src/components si es React puro
│   │   ├── layout.js
│   │   └── page.js          # Landing Page principal (MVP)
│   ├── components/
│   │   ├── Navbar.jsx       # Navegación con logo
│   │   ├── Hero.jsx         # Portada de impacto con CTA
│   │   ├── Services.jsx     # Secciones de Izajes y Mudanzas
│   │   ├── About.jsx        # Quiénes somos y trayectoria
│   │   ├── Social.jsx       # Links a redes (Facebook, LinkedIn)
│   │   ├── Footer.jsx       # Datos institucionales
│   │   └── WhatsappBtn.jsx  # Botón flotante permanente
│   └── data/
│       └── services.json    # Listado de servicios y especificaciones
├── MVP.md
├── CARPETA_VISUAL.md
└── ARQUITECTURA.md