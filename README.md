# Romana Club — Landing Page

Landing page premium para club de pilates. Next.js 14 App Router + Tailwind CSS + GSAP.

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **GSAP + ScrollTrigger** — animaciones y reveals
- **next/font** — Playfair Display, Libre Baskerville, Jost
- **next/image** — imágenes optimizadas

---

## Instalación

```bash
# 1. Clonar / copiar la carpeta del proyecto
cd romana-club

# 2. Instalar dependencias
npm install

# 3. Dev server
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Estructura

```
src/
├── app/
│   ├── globals.css        # Tokens, grain, scrollbar, helpers
│   ├── layout.tsx         # Fonts + metadata
│   └── page.tsx           # Ensambla secciones
└── components/
    ├── Cursor.tsx          # Cursor animado (dot + ring)
    ├── Nav.tsx             # Nav fija con mobile drawer
    ├── Hero.tsx            # Video full-bleed + GSAP timeline
    ├── HeroCanvas.tsx      # Canvas partículas animadas
    ├── Marquee.tsx         # Banda de texto infinita
    ├── Sobre.tsx           # Editorial "Sobre mí"
    ├── Gallery.tsx         # Galería draggable horizontal + videos
    ├── Clases.tsx          # Layout de clases tipo revista
    ├── Horarios.tsx        # Tabla de horarios animada
    ├── Cta.tsx             # CTA full-screen con video bg
    └── Footer.tsx
```

---

## Personalización

### Reemplazar WhatsApp
En `Cta.tsx`, línea con `wa.me/549XXXXXXXXX`, reemplazá con el número real.

### Reemplazar email
En `Cta.tsx`, reemplazá `hola@romanaclub.com`.

### Reemplazar horarios
En `Horarios.tsx`, editá el array `schedule`.

### Reemplazar fotos/videos
Cuando tengas fotos reales de la profesora/estudio, reemplazá las URLs de Unsplash.
Para los videos, reemplazá las URLs de Pexels con los tuyos o usá Cloudinary/Bunny.

### Futura integración de Reactbits / 21st.dev
Para agregar `BlurText` de Reactbits al hero:
```bash
npm install @reactbits/components
```
Luego importar en cualquier componente Client.

---

## Producción

```bash
npm run build
npm run start
```
