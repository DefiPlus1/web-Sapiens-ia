import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CopyEmailButton from "@/components/CopyEmailButton";
import PortfolioCaseStudy from "@/components/PortfolioCaseStudy";
import TaglineReveal from "@/components/TaglineReveal";
import { 
    Cpu, 
    Brain, 
    Database, 
    Workflow, 
    Shield, 
    ShieldCheck, 
    Code2, 
    Terminal, 
    ExternalLink, 
    FileDown, 
    CheckCircle2, 
    Sparkles, 
    GitBranch, 
    Server, 
    Lock, 
    Layers, 
    Phone, 
    Mail, 
    Award, 
    Activity,
    Eye
} from "lucide-react";

export const metadata: Metadata = {
    title: "Leonardo Ytriago | Lead AI Architect & Automation Engineer",
    description: "Portafolio profesional de Leonardo Ytriago: especialista en IA Multimodal (Google Gemini 3.1), orquestación con n8n, bases de datos vectoriales en Qdrant y PostgreSQL avanzado con Supabase RLS.",
    openGraph: {
        title: "Leonardo Ytriago · Portafolio Profesional de Automatizaciones e IA",
        description: "Descubre los casos de estudio, arquitecturas multimodales y métricas de impacto empresarial implementadas por Leonardo Ytriago para clientes reales.",
        url: "https://leoytriagoia.dev/portafolio",
        siteName: "Sapiens IA",
        locale: "es_ES",
        type: "website",
    },
};

const skillDomains = [
    {
        title: "Orquestación de Agentes & Workflows",
        icon: Workflow,
        color: "#10b981",
        description: "Diseño y despliegue de pipelines tolerantes a fallos con más de 65 nodos por flujo en producción.",
        technologies: ["n8n Self Hosted en Dokploy", "Webhooks Transaccionales", "Dynamic Tool Calling", "Human Handoff en Chatwoot", "Manejo de Errores y Colas de Reintento"],
    },
    {
        title: "IA Multimodal & Razonamiento",
        icon: Brain,
        color: "#34d399",
        description: "Modelos de frontera aplicados al análisis de fotografías dérmicas y notas de voz de WhatsApp.",
        technologies: ["Google Gemini 3.1 Vision", "Gemini Audio y Transcripción", "Function Calling Dinámico", "Extracción Estructurada JSON", "Prompt Engineering Avanzado"],
    },
    {
        title: "Bases de Datos & Motores Vectoriales",
        icon: Database,
        color: "#6ee7b7",
        description: "Separación estricta entre capa transaccional relacional y recuperación semántica de alta velocidad.",
        technologies: ["Supabase PostgreSQL 16", "Row Level Security (RLS)", "Multi Role RBAC", "Qdrant Vector DB en Rust", "Embeddings y Payload Filtering"],
    },
    {
        title: "Arquitectura Web & Canales",
        icon: Code2,
        color: "#10b981",
        description: "Desarrollo de SmartWebs de alta velocidad e integración con plataformas líderes de mensajería.",
        technologies: ["Next.js 16 App Router", "React 19 y TypeScript", "Tailwind CSS v4 y Framer", "WhatsApp Cloud API", "Google Calendar API"],
    },
    {
        title: "DevOps, Infraestructura & Compliance",
        icon: Server,
        color: "#34d399",
        description: "Autonomía en despliegues con VPS dedicados y estricto apego a normativas internacionales.",
        technologies: ["Dokploy PaaS en VPS", "Contenedores Docker", "Cloudflare DNS y SSL", "Cumplimiento Meta Tech Provider", "Ciberseguridad Anti Exfiltración"],
    },
    {
        title: "Especialización de Negocio",
        icon: Award,
        color: "#6ee7b7",
        description: "Foco exclusivo en retorno de inversión, retención de clientes y reducción de costos operativos.",
        technologies: ["Clínicas Médicas y Estéticas", "Venta de Repuestos de Moto", "Protección de Reputación Online", "Agendamiento Cero Colisiones", "Calificación y Cierre Comercial"],
    },
];

export default function PortafolioPage() {
    return (
        <main className="bg-[#080f1e] text-slate-100 min-h-screen selection:bg-emerald-500/30 selection:text-white">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative pt-36 pb-20 px-6 overflow-hidden border-b border-emerald-500/10">
                <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Profile Photo & Badges (Cols 1-5) */}
                        <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
                            <AnimatedSection direction="left">
                                <div className="relative group mb-8">
                                    {/* Ambient Glow */}
                                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />
                                    
                                    {/* Image Container */}
                                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-emerald-400/40 bg-slate-950 shadow-2xl">
                                        <img
                                            src="/leo-ytriago.png"
                                            alt="Leonardo Ytriago - Lead AI Architect"
                                            className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/80 via-transparent to-transparent" />
                                    </div>

                                    {/* Availability Status Badge */}
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-slate-900/90 backdrop-blur-md border border-emerald-400/50 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-black/60 whitespace-nowrap">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs font-semibold text-emerald-300 tracking-wide">
                                            Disponible para Proyectos & Consultoría
                                        </span>
                                    </div>
                                </div>

                                {/* Identity Summary */}
                                <div className="space-y-1">
                                    <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                                        Sapiens IA · Founder & Lead AI Architect
                                    </p>
                                    <h2 className="text-xl font-bold text-white">
                                        Leonardo José Ytriago Manrriquez
                                    </h2>
                                    <p className="text-xs text-slate-400">
                                        Guárico, Venezuela · Operaciones Globales en Remoto
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Executive Bio & Action Hub (Cols 6-12) */}
                        <div className="lg:col-span-7 space-y-6">
                            <AnimatedSection direction="right">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-300">
                                    <Sparkles size={14} className="text-emerald-400" />
                                    Portafolio Profesional · Ingeniería de IA & Automatización
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mt-3 [text-wrap:balance]">
                                    Construyo ecosistemas de IA que{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                                        operan y facturan
                                    </span>{" "}
                                    de forma autónoma.
                                </h1>

                                <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
                                    Especialista en atención al cliente multimodal, orquestación de workflows en <strong className="text-white font-semibold">n8n (150+ nodos en producción)</strong>, bases de datos vectoriales en <strong className="text-white font-semibold">Qdrant</strong> y arquitecturas de datos seguras con <strong className="text-white font-semibold">Supabase PostgreSQL RLS</strong>. Transformo cuellos de botella operativos en ventajas competitivas medibles.
                                </p>

                                {/* Action Buttons Hub */}
                                <div className="pt-2 flex flex-wrap items-center gap-4">
                                    {/* Interactive Copy Email */}
                                    <CopyEmailButton variant="primary" showEmailText={false} />

                                    {/* CV Download / View */}
                                    <a
                                        href="/cv-leonardo-ytriago.pdf"
                                        download="CV Leo Ytriago + C PRESENTACION.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold border border-emerald-500/30 bg-slate-900/80 text-emerald-300 hover:bg-slate-800 hover:border-emerald-400 hover:text-white transition-all duration-300 shadow-lg shadow-black/40 group"
                                    >
                                        <FileDown size={17} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                                        <span>Descargar CV (PDF)</span>
                                    </a>

                                    {/* Direct WhatsApp */}
                                    <a
                                        href="https://wa.me/584124819608"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold border border-white/10 bg-slate-950/70 text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300"
                                    >
                                        <Phone size={16} className="text-emerald-400" />
                                        <span>WhatsApp Directo</span>
                                    </a>

                                    {/* GitHub Profile */}
                                    <a
                                        href="https://github.com/DefiPlus1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-white/10 bg-slate-950/70 text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300"
                                        aria-label="Perfil de GitHub DefiPlus1"
                                    >
                                        <Code2 size={16} className="text-emerald-400" />
                                        <span>GitHub</span>
                                        <ExternalLink size={12} className="text-slate-500" />
                                    </a>
                                </div>

                                {/* Direct Email text display for transparency */}
                                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                                    <Mail size={13} className="text-emerald-500" />
                                    <span>Canal directo:</span>
                                    <a href="mailto:contacto@leoytriagoia.dev" className="text-emerald-400 hover:underline font-mono">
                                        contacto@leoytriagoia.dev
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* Consolidated Cumulative Hero Metrics Strip */}
                    <AnimatedSection delay={0.2} className="mt-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/20 backdrop-blur-xl shadow-2xl">
                            <div className="border-r border-white/5 last:border-none pr-4">
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">150+</div>
                                <div className="text-xs sm:text-sm font-semibold text-white">Nodos en Producción</div>
                                <div className="text-[11px] text-slate-400 leading-tight">Clínica, reputación, repuestos y web</div>
                            </div>
                            <div className="border-r border-white/5 last:border-none pr-4">
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">&lt; 4s</div>
                                <div className="text-xs sm:text-sm font-semibold text-white">Latencia Multimodal</div>
                                <div className="text-[11px] text-slate-400 leading-tight">Audio, fotos dérmicas y RAG Qdrant</div>
                            </div>
                            <div className="border-r border-white/5 last:border-none pr-4">
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">+120%</div>
                                <div className="text-xs sm:text-sm font-semibold text-white">Eficiencia Operativa</div>
                                <div className="text-[11px] text-slate-400 leading-tight">Citas autónomas y seguimiento 24h</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                                <div className="text-xs sm:text-sm font-semibold text-white">Blindaje NDA & RLS</div>
                                <div className="text-[11px] text-slate-400 leading-tight">Cero fugas de secretos corporativos</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* MANDATORY TAGLINE REVEAL SECTION (B11) */}
            <section className="py-24 px-6 relative border-b border-emerald-500/10 bg-[#091322]">
                <TaglineReveal
                    text="Automatizo operaciones complejas mediante inteligencia artificial y desarrollo web de precisión para generar rentabilidad sin fricción."
                    subtext="Cada línea de código, nodo en n8n y consulta relacional está diseñada para responder en segundos y proteger el secreto comercial de tu empresa."
                />
            </section>

            {/* 2. CASOS DE ESTUDIO PRINCIPALES */}
            <section className="py-24 px-6 relative border-b border-emerald-500/10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">
                            <Layers size={14} />
                            Desarrollos en Producción
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
                            Casos de Estudio de Alto Impacto
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg [text-wrap:pretty]">
                            Proyectos corporativos reales estructurados según estándares de ingeniería: problema de negocio, arquitectura técnica, rol de desarrollo y métricas cuantitativas verificadas.
                        </p>
                    </AnimatedSection>

                    {/* Interactive Case Study Explorer with Gallery & Lightbox */}
                    <PortfolioCaseStudy />
                </div>
            </section>

            {/* DEDICATED CONFIDENTIALITY & NDA BANNER SECTION */}
            <section className="py-20 px-6 relative border-b border-emerald-500/10 bg-[#070e1c]">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection>
                        <div className="rounded-3xl bg-slate-900/70 border border-emerald-500/25 overflow-hidden shadow-2xl relative">
                            {/* Visual Pro Banner Header */}
                            <div className="relative max-h-[380px] overflow-hidden bg-slate-950 flex items-center justify-center border-b border-emerald-500/20">
                                <img
                                    src="/banner-confidencialidad-pro.jpg"
                                    alt="Aviso de Confidencialidad y Acuerdos de No Divulgación NDA - Sapiens IA"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-emerald-300 font-mono">
                                    <span className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                                        <Lock size={14} className="text-emerald-400" />
                                        <span>Protocolo de Blindaje Legal & Secreto Comercial</span>
                                    </span>
                                    <span className="hidden sm:inline bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/10 text-slate-400">
                                        Vigencia Permanente · Acuerdos NDA
                                    </span>
                                </div>
                            </div>

                            {/* Detailed Explanation */}
                            <div className="p-8 sm:p-10 space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                                            Aviso de Confidencialidad & Acuerdos NDA
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
                                            Por qué los Nombres y Datos de Clientes se Mantienen Anónimos
                                        </h3>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                                            <ShieldCheck size={14} />
                                            <span>Estándar Profesional Sapiens IA</span>
                                        </span>
                                    </div>
                                </div>

                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
                                    En Sapiens IA y bajo el liderazgo técnico de Leonardo Ytriago, suscribimos <strong>contratos formales de confidencialidad y no divulgación (NDA)</strong> con cada clínica médica, negocio de repuestos de moto y cliente corporativo. La protección de secretos comerciales, listados de precios mayoristas, fichas de pacientes y credenciales de acceso es un principio innegociable.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                                    <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                                        <div className="text-emerald-400 font-bold text-sm mb-1">Anonimización Estricta</div>
                                        <p className="text-xs text-slate-400 leading-relaxed [text-wrap:pretty]">
                                            Marcas, logotipos de clientes, nombres de doctores y números telefónicos de usuarios finales han sido anonimizados o sustituidos por descriptores técnicos.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                                        <div className="text-emerald-400 font-bold text-sm mb-1">Entornos Reales Auditados</div>
                                        <p className="text-xs text-slate-400 leading-relaxed [text-wrap:pretty]">
                                            Cada diagrama de n8n, esquema de base de datos relacional y captura de CRM corresponde a sistemas en producción que procesan transacciones diarias reales.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                                        <div className="text-emerald-400 font-bold text-sm mb-1">Seguridad en Servidores Propios</div>
                                        <p className="text-xs text-slate-400 leading-relaxed [text-wrap:pretty]">
                                            Todas las automatizaciones corren en servidores VPS dedicados con Supabase Row Level Security y Docker, sin compartir datos con modelos públicos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* 3. ARQUITECTURA TÉCNICA: DOMINIO DE SUPABASE & QDRANT */}
            <section className="py-24 px-6 relative bg-gradient-to-b from-[#080f1e] via-[#0a1628] to-[#080f1e] border-b border-emerald-500/10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">
                            <Server size={14} />
                            Ingeniería de Datos Avanzada
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
                            Dominio Técnico: Supabase vs. Qdrant
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg [text-wrap:pretty]">
                            Por qué desacoplar la capa transaccional relacional del motor vectorial RAG es la clave para la estabilidad operativa en entornos médicos y comerciales de alto tráfico.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Supabase Architecture Card */}
                        <AnimatedSection direction="left">
                            <div className="glass glass-hover rounded-3xl p-8 border border-emerald-500/20 relative h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                            <Database size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Supabase / PostgreSQL Avanzado</h3>
                                            <p className="text-xs text-emerald-400 font-mono">Capa Transaccional & Seguridad RLS</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-300 leading-relaxed mb-6 [text-wrap:pretty]">
                                        Diseño relacional estructurado sobre PostgreSQL 16 con políticas de Row Level Security (RLS) granulares para proteger datos clínicos y comerciales confidenciales:
                                    </p>

                                    <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Multi Role RBAC:</strong> Roles estrictos (<code>admin</code>, <code>doctor</code>, <code>staff</code>) y funciones <code>SECURITY DEFINER</code> para operaciones de alta sensibilidad.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Arquitectura Relacional Coordinada:</strong> Tablas sincronizadas para pacientes, especialistas, citas, historial de tratamientos, órdenes de compra y feedback.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Persistencia Multi Turn de Agentes:</strong> Integración de memoria contextual en PostgreSQL (<code>memoryPostgresChat</code>) para conversaciones largas sin pérdidas de contexto.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                                    <span className="font-mono text-emerald-400">PostgreSQL 16 + RLS</span>
                                    <span>Migración y schemas auditados</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Qdrant Vector DB Card */}
                        <AnimatedSection direction="right">
                            <div className="glass glass-hover rounded-3xl p-8 border border-emerald-500/20 relative h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                            <Brain size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Qdrant Vector Database (RAG)</h3>
                                            <p className="text-xs text-emerald-400 font-mono">Búsqueda Semántica de Baja Latencia</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-300 leading-relaxed mb-6 [text-wrap:pretty]">
                                        Implementación de motor vectorial en Rust desacoplado de la base relacional para garantizar respuestas en milisegundos sin sobrecargar recursos del servidor:
                                    </p>

                                    <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Desacoplamiento de Carga Operativa:</strong> Búsqueda de vecinos más cercanos (HNSW) en motor vectorial dedicado para no degradar consultas transaccionales de citas o ventas.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Payload Filtering Avanzado:</strong> Indexación de catálogos médicos y comerciales con metadatos para filtrar por especialidad, disponibilidad y precio.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Cero Alucinaciones:</strong> Recuperación semántica rigurosa que delimita las respuestas de los agentes exclusivamente a fuentes documentadas verificadas.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                                    <span className="font-mono text-emerald-400">Qdrant (Rust) + HNSW</span>
                                    <span>Latencia &lt; 80ms</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* 4. HABILIDADES TÉCNICAS & STACK */}
            <section className="py-24 px-6 relative border-b border-emerald-500/10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">
                            <Terminal size={14} />
                            Habilidades de Ingeniería
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
                            Stack Tecnológico en Producción
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg [text-wrap:pretty]">
                            Herramientas dominadas con criterios rigurosos de rendimiento, escalabilidad y tolerancia a fallos.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillDomains.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <AnimatedSection key={index} delay={index * 0.08}>
                                    <div className="glass glass-hover rounded-2xl p-6 border border-emerald-500/15 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4">
                                                <IconComponent size={20} />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                                            <p className="text-xs text-slate-400 leading-relaxed mb-4 [text-wrap:pretty]">
                                                {skill.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-white/5">
                                            <div className="flex flex-wrap gap-1.5">
                                                {skill.technologies.map((t, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-slate-300"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. HONESTIDAD INTELECTUAL & CONTRIBUCIÓN OPEN SOURCE */}
            <section className="py-20 px-6 relative border-b border-emerald-500/10 bg-[#070d1a]">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-emerald-500/20 relative overflow-hidden">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                                    <GitBranch size={13} />
                                    Honestidad Intelectual & Ética Técnica
                                </span>
                                <span className="text-xs text-slate-400 font-mono">
                                    Aporte Propio: ~2.650 Líneas de Código
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 [text-wrap:balance]">
                                Extensión Médica sobre Base Open Source (Deskcomm CRM)
                            </h3>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 [text-wrap:pretty]">
                                En el desarrollo del módulo de citas y pacientes para una destacada clínica médica estética (bajo acuerdo estricto de confidencialidad), se utilizó como cimiento arquitectónico la plataforma de código abierto <strong>DeskcommCRM</strong> (creada por Rafael Melgaço bajo licencia MIT).
                            </p>

                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 [text-wrap:pretty]">
                                En lugar de atribuirme el CRM completo, documento con total transparencia que mi aporte técnico consistió en diseñar y programar el <strong>módulo de clínica estética</strong> (~2.650 líneas de código TypeScript y React): fichas de pacientes para tratamientos corporales, consentimiento médico informado digital, control de sesiones por aparatología y sincronización de eventos de WhatsApp con Supabase.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-white/5 text-xs text-slate-400">
                                <div>
                                    <span className="text-slate-500 block">Base Arquitectónica:</span>
                                    <strong className="text-white">DeskcommCRM (MIT)</strong>
                                </div>
                                <div>
                                    <span className="text-slate-500 block">Módulo Creado:</span>
                                    <strong className="text-emerald-400">Salud Estética & Citas Médicas</strong>
                                </div>
                                <div>
                                    <span className="text-slate-500 block">Integración API:</span>
                                    <strong className="text-white">Supabase RLS + Chatwoot</strong>
                                </div>
                            </div>

                            {/* Production Capture */}
                            <div className="mt-8 rounded-2xl overflow-hidden border border-emerald-500/25 bg-slate-950/80 shadow-2xl">
                                <div className="p-3 bg-slate-900/90 border-b border-white/5 flex items-center justify-between text-xs text-slate-300">
                                    <span className="font-mono text-emerald-400 flex items-center gap-2">
                                        <Activity size={14} className="text-emerald-400" />
                                        <span>Captura Real de Producción: Módulo de Fichas Médicas & Citas Clínicas</span>
                                    </span>
                                    <span className="text-[11px] text-slate-400 font-mono">~2.650 líneas de código propio</span>
                                </div>
                                <div className="relative overflow-hidden group max-h-[420px] flex items-center justify-center bg-slate-950">
                                    <img
                                        src="/captures-n8n/crm-blc.jpg"
                                        alt="Módulo Médico desarrollado sobre Deskcomm CRM para Clínica Estética"
                                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3 bg-slate-950 border-t border-white/5 text-xs text-slate-400 [text-wrap:pretty]">
                                    Captura de pantalla de la interfaz desarrollada: administración de pacientes, agendamiento de tratamientos corporales o faciales y sincronización de datos clínicos.
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* 6. POLÍTICA DE SEGURIDAD Y REPOS PÚBLICOS SANEADOS */}
            <section className="py-20 px-6 relative border-b border-emerald-500/10">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-emerald-500/20 relative">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white [text-wrap:balance]">Por qué los Repositorios de Clientes se Mantienen Privados</h3>
                                    <p className="text-xs text-emerald-400 font-mono">Compromiso con la Ciberseguridad y Acuerdos NDA</p>
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-4 [text-wrap:pretty]">
                                Como principio no negociable de seguridad informática, <strong>ningún repositorio de clientes corporativos es convertido en público</strong> para servir como demostración en este portafolio:
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 my-6 text-xs text-slate-400">
                                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                                    <strong className="text-white block mb-1">Detección de Secretos en 4 Segundos:</strong>
                                    Estudios de GitGuardian demuestran que bots automatizados escanean repositorios públicos en tiempo real. Exponer código fuente expone credenciales y tokens de producción.
                                </div>
                                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                                    <strong className="text-white block mb-1">Protección de Datos Médicos y Comerciales:</strong>
                                    Los proyectos clínicos y de e-commerce gestionan historiales de pacientes y clientes reales. Su arquitectura pertenece al ámbito de confidencialidad protegida por ley.
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                                <p className="text-xs text-slate-400">
                                    ¿Deseas auditar calidad de código y diseño de flujos de forma directa?
                                </p>
                                <a
                                    href="https://github.com/DefiPlus1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-semibold transition-all duration-200"
                                >
                                    <Code2 size={14} />
                                    <span>Ver Repositorios Públicos en GitHub</span>
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* 7. CONTACTO DIRECTO & TITULARIDAD LEGAL */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-6">
                            <Sparkles size={14} />
                            Hablemos de tu Proyecto
                        </span>

                        <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
                            ¿Listo para automatizar la operación de tu empresa?
                        </h2>

                        <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 [text-wrap:pretty]">
                            Agenda una sesión de diagnóstico técnico sin costo. Analizamos tus procesos actuales y te mostramos exactamente dónde la IA generará rentabilidad inmediata.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                            <a
                                href="https://wa.me/584124819608"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glow inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold rounded-xl text-slate-950 shadow-xl"
                            >
                                <Phone size={18} />
                                <span>Agendar Auditoría por WhatsApp</span>
                            </a>
                            <CopyEmailButton variant="secondary" />
                        </div>

                        {/* Legal Footprint Card for Meta Compliance & Credibility */}
                        <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/5 text-xs text-slate-400 max-w-2xl mx-auto space-y-2 text-left">
                            <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                                <ShieldCheck size={16} />
                                <span>Titularidad Legal Verificada & Consistencia NAP</span>
                            </div>
                            <p><strong className="text-white">Titular:</strong> Leonardo José Ytriago Manrriquez (Persona Natural · RIF: V-17741920-2)</p>
                            <p><strong className="text-white">Correo Oficial:</strong> contacto@leoytriagoia.dev (Ruteado seguro en Cloudflare)</p>
                            <p><strong className="text-white">WhatsApp Corporativo:</strong> +58 412 4819608</p>
                            <p><strong className="text-white">Domicilio Fiscal:</strong> Calle San Miguel Casa Nro 12-2, Sector San Miguel, Valle de la Pascua, Guárico, ZP 2350, Venezuela.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
