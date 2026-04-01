# human-starter
 
Boilerplate interno para proyectos web de Human. Clona, configura las variables del proyecto y empieza a construir. Sin setup desde cero.
 
Construido con **Next.js 15**, **React 19** y **Tailwind CSS v3**.
 
---
 
## Inicio rápido
 
```bash
git clone https://github.com/MiguelDeLaMora/human-starter.git nombre-del-proyecto
cd nombre-del-proyecto
npm install
npm run dev
```
 
Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.
 
---
 
## Qué viene configurado
 
### Font Scale
 
Sistema tipográfico predefinido en `tailwind.config.js`. Úsalo con `text-{token}`.
 
| Token | Tamaño | Uso sugerido |
|---|---|---|
| `h1` | 64px | Título de 404 |
| `h2` | 48px | Hero headline |
| `h3` | 36px | Heading primario |
| `h4` | 28px | Heading secundario |
| `h5` | 22px | Subtítulo |
| `h6` | 18px | Título de card/box |
| `body` | 16px | Texto general |
| `button` | 14px | Labels de botones |
| `overline` | 12px | Etiquetas superiores |
 
```tsx
<h1 className="text-h2 font-bold">Hero headline</h1>
<p className="text-body">Texto de cuerpo</p>
```
 
### Breakpoints
 
```js
sm: 640px  |  md: 768px  |  lg: 1024px  |  xl: 1280px
```
 
### Design Tokens (colores)
 
```js
// Primarios
primary.DEFAULT  →  #0A0A0A
primary.light    →  #333333
primary.dark     →  #000000
 
// Secundarios
secondary.DEFAULT  →  #6B7280
secondary.light    →  #9CA3AF
secondary.dark     →  #4B5563
 
// Neutros
neutral.50 → neutral.900  (escala completa de grises)
```
 
### Componentes base
 
```
components/
├── ui/
│   ├── Button.tsx
│   └── Container.tsx
├── Footer.tsx
└── Navbar.tsx
```
 
---
 
## Personalización por proyecto
 
### 1. Fuente
 
Cambia la font en `tailwind.config.js`:
 
```js
fontFamily: {
  sans: ["TuFont", "sans-serif"], // reemplaza Inter
},
```
 
Y cárgala en `app/layout.tsx` via `next/font`.
 
### 2. Colores
 
Edita el bloque `colors` en `tailwind.config.js`. Los tokens `primary` y `secondary` son los que más vas a tocar.
 
### 3. Metadata / SEO
 
En `app/layout.tsx`, actualiza el objeto `metadata`:
 
```ts
export const metadata: Metadata = {
  title: {
    default: "Nombre del Proyecto",
    template: "%s | Nombre del Proyecto",
  },
  description: "Descripción del proyecto",
  openGraph: {
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto",
    url: "https://tudominio.com",
    siteName: "Nombre del Proyecto",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};
```
 
### 4. Variables de entorno
 
Copia `.env.example` y llena los valores:
 
```bash
cp .env.example .env.local
```
 
---
 
## Lo que NO viene incluido
 
Estas integraciones se agregan por proyecto según lo que necesite:
 
- **Analytics** — Google Analytics, Plausible
- **Auth** — NextAuth.js, Clerk
- **CMS** — Sanity, Contentful
- **Animaciones** — Framer Motion, GSAP
 
---
 
## Stack
 
| | |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Estilos | [Tailwind CSS v3](https://tailwindcss.com) |
| Lenguaje | TypeScript |
| Linting | ESLint |
 
---
 
## Estructura del proyecto
 
```
├── app/
│   ├── layout.tsx       # Layout raíz + metadata global
│   ├── page.tsx         # Página de inicio
│   └── globals.css      # Estilos globales
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Container.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── public/              # Assets estáticos
├── tailwind.config.js   # Tokens de diseño (fuentes, colores, breakpoints)
└── .env.example         # Variables de entorno requeridas
```
 
