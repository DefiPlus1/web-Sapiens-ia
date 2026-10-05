# Sapiens IA — Guía Operativa (CLAUDE.md)

Este documento contiene el mapa técnico, comandos esenciales y convenciones de desarrollo para el proyecto web corporativo de **Sapiens IA**.

---

## 🛠️ Comandos de Desarrollo (Ejecutar dentro de `Sapiens-ia_FinishedWeb/sapiens-web`)

```bash
# Instalación de dependencias
npm install

# Servidor de desarrollo local (Puerto estándar 3000 o 3001)
npm run dev

# Compilación para producción (Verificación de tipos y rutas)
npm run build

# Iniciar servidor compilado en producción
npm start
```

---

## 📁 Estructura del Proyecto

```
Web Sapiens-ia/
├── AGENTS.md                          # Reglas operativas y directrices de IA
├── CLAUDE.md                          # Esta guía técnica operativa
├── plan.md                            # Roadmap y estado de sprints
├── checklist-meta-tech-provider.html  # Checklist interactivo de homologación Meta
└── Sapiens-ia_FinishedWeb/
    └── sapiens-web/                   # Aplicación Next.js 16
        ├── public/                    # Assets estáticos (logos, videos, iconos)
        ├── src/
        │   ├── app/                   # App Router de Next.js
        │   │   ├── layout.tsx         # Layout raíz (Header + Footer global)
        │   │   ├── page.tsx           # Landing page principal
        │   │   ├── agencia/           # Visión, metodología y manifiesto
        │   │   ├── casos-de-exito/    # Testimonios y casos reales
        │   │   ├── insights/          # Blog y artículos de IA
        │   │   ├── soluciones/        # Desglose de servicios de automatización
        │   │   ├── privacidad/        # Política de privacidad (Cumplimiento Meta)
        │   │   ├── terminos/          # Términos y condiciones de servicio
        │   │   └── eliminacion-de-datos/ # Instrucciones de borrado de datos (Meta)
        │   └── components/            # Componentes compartidos
        │       ├── Header.tsx         # Barra de navegación superior
        │       ├── Footer.tsx         # Pie de página con atribución legal
        │       ├── AnimatedSection.tsx # Wrapper de Framer Motion
        │       └── EcosystemDiagram.tsx # Diagrama interactivo de automatización
```

---

## 🎨 Sistema de Diseño y Tokens UI

- **Fondo Base:** `#080f1e` (Dark navy)
- **Fondo Secundario / Cards:** `#0a1628` / `#0f172a`
- **Acento Primario (Bioluminiscencia):** `#10b981` (Emerald 500)
- **Acento Secundario:** `#3b82f6` (Blue 500)
- **Tipografía:** Sans-serif moderna, con titulares limpios y espaciado tracking amplio para badges (`uppercase tracking-wider text-xs`).
- **Efectos:**
  - `glass`: Fondo traslúcido con `backdrop-blur-xl` y borde sutil `rgba(255,255,255,0.08)`.
  - `bio-line`: Línea divisoria bioluminiscente con gradiente esmeralda.

---

## ⚖️ Atribución Legal Obligatoria (NAP)

Toda referencia legal en el sitio debe reflejar con fidelidad:
- **Razón / Titular Legal:** Leonardo José Ytriago Manrriquez
- **RIF:** V-17741920-2
- **Domicilio:** Calle San Miguel Casa Nro 12-2 Sector San Miguel, Valle de la Pascua, Guárico, ZP 2350, Venezuela
- **Correo Corporativo:** `contacto@leoytriagoia.dev`
- **WhatsApp Oficial:** `+58 412 4819608`
