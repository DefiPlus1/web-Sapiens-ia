# Sapiens-ia SmartWeb

**Tech-premium AI agency website** — Next.js 14, Tailwind CSS, Framer Motion.

---

## 🚀 Desarrollo Local

### Requisitos
- Node.js 18 o superior
- npm 9+

### Levantar en modo desarrollo

```bash
cd "d:/AGENCIA SAPIENS-IA/Sapiens-ia SmartWeb/Sapiens-ia_FinishedWeb/sapiens-web"
npm install
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Páginas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Home — video hero, ecosistema interactivo |
| `/soluciones` | Las 3 soluciones principales |
| `/casos-de-exito` | Clientes, testimonios, casos de estudio |
| `/agencia` | Visión, dashboard mockup, tech stack |
| `/insights` | Blog de contenido educativo sobre IA |

---

## 🏗️ Build de Producción

```bash
npm run build
npm start
```

---

## ☁️ Despliegue en Dokploy (Paso a paso)

### 1. Crear nueva aplicación

En tu panel de Dokploy, haz clic en **"New Application"** y selecciona **"Application"**.

### 2. Conectar repositorio Git

- Vincula tu repositorio GitHub/GitLab donde hayas subido este proyecto.
- Branch: `main` (o el que uses).

### 3. Configurar variables de entorno

En la sección **"Environment Variables"** de Dokploy, agrega si es necesario:

```
NODE_ENV=production
```

### 4. Configurar el Build

En la sección **"Build"** de Dokploy:

| Campo | Valor |
|-------|-------|
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Port** | `3000` |
| **Root Directory** | `Sapiens-ia_FinishedWeb/sapiens-web` (si el repo es la carpeta raíz del espacio de trabajo) |
| **Node Version** | `18` |

### 5. Configurar el dominio

En la sección **"Domains"**:
- Agrega tu dominio: `sapiens-ia.tech` (o el que tengas)
- Habilita **SSL automático** (Let's Encrypt)

### 6. Desplegar

Haz clic en **"Deploy"**. Dokploy construirá la imagen y la servirá automáticamente.

---

## 📁 Estructura del Proyecto

```
sapiens-web/
├── public/
│   └── videos/
│       └── I_am_Sapiens-ia_1080p.mp4   ← Video del hero
├── src/
│   ├── app/
│   │   ├── layout.tsx                  ← Layout raíz (fuente, metadata)
│   │   ├── globals.css                 ← Estilos globales, animaciones
│   │   ├── page.tsx                    ← Home
│   │   ├── soluciones/page.tsx         ← Soluciones
│   │   ├── casos-de-exito/page.tsx     ← Casos de Éxito
│   │   ├── agencia/page.tsx            ← Agencia
│   │   └── insights/page.tsx          ← Blog
│   └── components/
│       ├── Header.tsx                  ← Navbar fijo con dropdown
│       ├── Footer.tsx                  ← Footer 4 columnas
│       ├── AnimatedSection.tsx         ← Wrapper Framer Motion
│       └── EcosystemDiagram.tsx        ← Diagrama interactivo SVG
├── tailwind.config.ts                  ← Tema de marca
└── next.config.ts                      ← Config Next.js
```

---

## 🎨 Design System

- **Fondo:** `#0f172a` (Slate oscuro)
- **Acento:** `#10b981` (Esmeralda)
- **Fuente:** Space Grotesk (Google Fonts)
- **Cards:** Glassmorphism (`backdrop-blur + bg-white/5`)
- **Animaciones:** Framer Motion `whileInView` fade-up en todas las secciones

---

## 🔧 Personalización Rápida

### Cambiar número de WhatsApp del CTA
Busca `wa.me/584224819607` en todo el proyecto y reemplaza con tu número real.

### Agregar fotos reales al dashboard placeholder
En `src/app/agencia/page.tsx`, busca el comentario `{/* Center badge */}` y reemplaza la sección con un `<Image>` de tu mockup real.

### Cambiar video del hero
Reemplaza `public/videos/I_am_Sapiens-ia_1080p.mp4` con la nueva versión. Mantén el mismo nombre de archivo.
