import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { CheckCircle, ArrowRight, Zap, Shield, Database, Bot } from "lucide-react";

const services = [
    {
        id: "automatizacion",
        icon: <Zap size={32} />,
        tag: "Paso 1 del Ecosistema",
        title: "Automatización de Operaciones",
        headline: "Tu empresa en piloto automático — sin errores, sin descanso.",
        desc: `Transformamos cada proceso manual y repetitivo de tu operación en un flujo autónomo e inteligente.
    Desde la confirmación de citas hasta la generación de reportes financieros, nuestra IA ejecuta, supervisa y optimiza — mientras tú te concentras en escalar.`,
        metrics: [
            { value: "40%", label: "Reducción en tiempos de respuesta" },
            { value: "0", label: "Errores en tareas repetitivas" },
            { value: "60h", label: "Horas semanales liberadas por equipo" },
        ],
        bullets: [
            "Automatización de agendas y confirmaciones de citas vía WhatsApp",
            "Generación automática de presupuestos y cotizaciones",
            "Reportes de ventas, inventario y KPIs en tiempo real",
            "Integración con sistemas existentes: CRM, ERP, hojas de cálculo",
            "Alertas proactivas y follow-ups automáticos",
            "Flujos n8n personalizados para cada proceso crítico",
        ],
        imgSide: "right",
        accent: "⚡",
    },
    {
        id: "agentes",
        icon: <Bot size={32} />,
        tag: "Núcleo del Ecosistema",
        title: "Agentes Inteligentes 24/7",
        headline: "El empleado más eficiente que jamás tendrás.",
        desc: `Nuestros Agentes de IA son sistemas conversacionales de nueva generación que atienden a tus clientes en tiempo real — comprendiendo contexto, intención y emoción.
    Operan en todos tus canales simultáneamente, con el tono de voz exacto de tu marca.`,
        metrics: [
            { value: "3x", label: "Más leads calificados mensualmente" },
            { value: "24/7", label: "Disponibilidad sin interrupciones" },
            { value: "< 3s", label: "Tiempo de respuesta promedio" },
        ],
        bullets: [
            "Atención multicanal: WhatsApp, Instagram DM, Web Chat",
            "Calificación automática de leads con scoring IA",
            "Gestión de objeciones y cierre de ventas conversacional",
            "Escalado inteligente a humanos cuando es necesario",
            "Memoria contextual por cliente (historial completo)",
            "Powered by Google Gemini + base de conocimiento propia",
        ],
        imgSide: "left",
        accent: "🤖",
    },
    {
        id: "infraestructura",
        icon: <Database size={32} />,
        tag: "Base del Ecosistema",
        title: "Infraestructura de Datos & IA",
        headline: "La inteligencia se construye sobre datos sólidos.",
        desc: `Sin datos bien estructurados, los modelos de IA fallan. Diseñamos la columna vertebral tecnológica que permite que toda la inteligencia artificial de tu empresa funcione de forma coherente, segura y escalable.`,
        metrics: [
            { value: "100%", label: "Soberanía de tus datos" },
            { value: "∞", label: "Escalabilidad horizontal" },
            { value: "SSL", label: "Cifrado end-to-end" },
        ],
        bullets: [
            "Base de conocimiento vectorial con Supabase + pgvector",
            "Pipelines de datos personalizados para tu industria",
            "Integración con fuentes existentes: PDFs, CRMs, Google Sheets",
            "Dashboards de monitoreo en tiempo real",
            "Arquitectura serverless — pagas solo lo que usas",
            "Cumplimiento GDPR y privacidad por diseño",
        ],
        imgSide: "right",
        accent: "🗄️",
    },
];

export default function SolucionesPage() {
    return (
        <main>
            <Header />

            {/* Hero */}
            <section className="relative pt-36 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-30" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/8 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Propuestas de Valor
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] text-white mb-8 tracking-tight">
                            Nuestras{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                                Soluciones
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
                            Tres pilares de inteligencia que transforman la manera en que tu empresa opera, vende y crece.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="bio-line" />

            {/* Service Cards */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto space-y-8">
                    {services.map((svc, i) => (
                        <AnimatedSection key={svc.id} delay={0.05}>
                            <div id={svc.id} className="glass glass-hover rounded-2xl overflow-hidden">
                                <div className={`grid md:grid-cols-2 gap-0`}>
                                    {/* Content */}
                                    <div className={`p-10 lg:p-14 flex flex-col justify-center ${svc.imgSide === "left" ? "md:order-2" : ""}`}>
                                        <span className="text-xs font-bold tracking-widest uppercase text-emerald-500/70 mb-3">
                                            {svc.tag}
                                        </span>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                                                {svc.icon}
                                            </div>
                                            <h2 className="text-3xl font-bold text-white">{svc.title}</h2>
                                        </div>
                                        <p className="text-2xl font-semibold text-emerald-400 mb-6 leading-snug">
                                            {svc.headline}
                                        </p>
                                        <p className="text-slate-400 leading-relaxed mb-8 whitespace-pre-line">{svc.desc}</p>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {svc.metrics.map((m, j) => (
                                                <div key={j} className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                                                    <div className="text-2xl font-bold text-emerald-400">{m.value}</div>
                                                    <div className="text-xs text-slate-500 mt-1">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="https://wa.me/584124819608"
                                            className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold rounded-xl w-fit"
                                        >
                                            Solicitar Demo <ArrowRight size={16} />
                                        </Link>
                                    </div>

                                    {/* Visual panel */}
                                    <div className={`relative min-h-[400px] ${svc.imgSide === "left" ? "md:order-1" : ""}`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#0f172a]" />
                                        <div className="absolute inset-0 hero-grid opacity-40" />
                                        {/* Center glow */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px]" />
                                        </div>
                                        {/* Big emoji icon */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                                            <span className="text-8xl opacity-80">{svc.accent}</span>
                                            <div className="space-y-2 w-64">
                                                {svc.bullets.map((b, k) => (
                                                    <div key={k} className="flex items-start gap-2.5">
                                                        <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                                        <span className="text-xs text-slate-400">{b}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <div className="glass rounded-2xl p-14 relative overflow-hidden border border-emerald-500/15">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -ml-32 -mb-32" />
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
                                ¿Cuál es el cuello de botella{" "}
                                <span className="text-emerald-400">de tu empresa?</span>
                            </h2>
                            <p className="text-slate-400 mb-10 text-lg relative z-10">
                                Hablemos 45 minutos. Identificamos qué automatizar y cuánto dinero recuperas.
                            </p>
                            <a
                                href="https://wa.me/584124819608"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glow relative z-10 inline-flex items-center gap-2 px-10 py-4 text-base font-bold rounded-xl"
                            >
                                Agendar Auditoría Gratuita <ArrowRight size={18} />
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
