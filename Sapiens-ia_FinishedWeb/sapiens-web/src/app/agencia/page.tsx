import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Monitor } from "lucide-react";

const techStack = [
    { name: "Claude/ChatGPT/Gemini", role: "LLM & Razonamiento", icon: "🧠", desc: "Modelo de IA de última generación para comprensión contextual profunda." },
    { name: "n8n", role: "Orquestación de Flujos", icon: "⚙️", desc: "Automatización de workflows sin código, infinitamente extensible." },
    { name: "Supabase", role: "Base de Datos & Vectores", icon: "🗄️", desc: "PostgreSQL + pgvector para bases de conocimiento semántico." },
    { name: "Next.js", role: "Frontend & APIs", icon: "⚡", desc: "Framework React de producción para interfaces ultrarrápidas." },
    { name: "Python", role: "Core AI Dev", icon: "🐍", desc: "El lenguaje del ecosistema de IA moderno." },
    { name: "Docker", role: "Despliegue & Escala", icon: "🐳", desc: "Contenedores para entornos reproducibles y escalables." },
];

const vision = [
    {
        step: "01",
        title: "Descubrimiento",
        icon: "🔍",
        desc: "Analizamos cada proceso crítico de tu negocio. Identificamos dónde la IA genera el mayor impacto económico sin perder la esencia humana de tu marca.",
    },
    {
        step: "02",
        title: "Arquitectura",
        icon: "🏗️",
        desc: "Diseñamos un ecosistema a tu medida. No usamos plantillas genéricas — cada solución está construida para tus procesos, tu industria y tus clientes.",
    },
    {
        step: "03",
        title: "Implementación",
        icon: "🚀",
        desc: "Desplegamos la solución de forma gradual y supervisada. Capacitamos a tu equipo para colaborar con la IA de manera fluida y eficiente.",
    },
];

export default function AgenciaPage() {
    return (
        <main>
            <Header />

            {/* Hero */}
            <section className="relative pt-36 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-25" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection direction="left">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                El Futuro es Humano
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
                                Nuestra{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                                    Visión
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                No reemplazamos humanos — los{" "}
                                <strong className="text-emerald-400">potenciamos</strong>. En Sapiens-ia, creemos que la inteligencia
                                artificial debe actuar como un multiplicador del talento humano, no como un sustituto.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed mb-10">
                                Somos la agencia que fusiona la sabiduría orgánica de los negocios físicos con la precisión
                                algorítmica de la IA de vanguardia — para crear empresas que operan de manera más inteligente,
                                más rápida y más rentable.
                            </p>
                            <a
                                href="https://wa.me/584224819607"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold rounded-xl"
                            >
                                Trabajar con Nosotros <ArrowRight size={16} />
                            </a>
                        </AnimatedSection>

                        {/* Manifesto card */}
                        <AnimatedSection direction="right" delay={0.15}>
                            <div className="glass glass-hover rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                                <span className="text-xs font-bold tracking-widest uppercase text-emerald-500/60 mb-4 block">
                                    Manifiesto
                                </span>
                                <blockquote className="text-2xl font-light text-slate-300 leading-relaxed italic mb-6">
                                    &ldquo;La verdadera inteligencia no reside en la potencia de cálculo, sino en la elegancia
                                    con que la tecnología se entrelaza con la experiencia humana.&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center font-bold text-emerald-400 text-lg">
                                        LY
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Leonardo Ytriago</p>
                                        <p className="text-xs text-slate-400">Fundador & Lead AI Architect · Sapiens IA</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <div className="bio-line" />

            {/* Dashboard Mockup Placeholder */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="text-center mb-12">
                        <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-3 block">
                            ◆ Dashboard Privado
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Control total en un solo lugar
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Nuestro dashboard te muestra el estado de todos tus agentes, conversaciones, conversiones y automatizaciones en tiempo real.
                        </p>
                    </AnimatedSection>

                    {/* Elegant placeholder */}
                    <AnimatedSection delay={0.1}>
                        <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20" style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1628 0%, #0f172a 100%)" }}>
                            {/* Grid background */}
                            <div className="absolute inset-0 hero-grid opacity-40" />
                            {/* Corner glows */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
                            {/* Mock UI bars */}
                            <div className="absolute top-0 left-0 right-0 h-12 bg-[#0a1628]/90 border-b border-emerald-500/10 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                <div className="flex-1" />
                                <div className="h-5 w-32 rounded bg-white/5 border border-white/5" />
                                <div className="h-5 w-20 rounded bg-emerald-500/20 border border-emerald-500/20" />
                            </div>
                            {/* Mock sidebar */}
                            <div className="absolute top-12 left-0 bottom-0 w-16 bg-[#080f1e]/80 border-r border-emerald-500/10 flex flex-col items-center py-4 gap-3">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-lg ${i === 0 ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-white/3'}`} />
                                ))}
                            </div>
                            {/* Content area */}
                            <div className="absolute top-12 left-16 right-0 bottom-0 p-6">
                                <div className="grid grid-cols-4 gap-3 mb-4">
                                    {[
                                        { label: "Conversaciones Hoy", value: "1,847" },
                                        { label: "Tasa de Resolución", value: "98.2%" },
                                        { label: "Leads Calificados", value: "234" },
                                        { label: "Revenue Generado", value: "$12.4K" },
                                    ].map((card, i) => (
                                        <div key={i} className="glass rounded-xl p-3">
                                            <p className="text-[9px] text-slate-500 mb-1">{card.label}</p>
                                            <p className="text-lg font-bold text-emerald-400">{card.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="col-span-2 glass rounded-xl p-3 h-40 flex items-end">
                                        <div className="w-full flex items-end gap-1 h-24">
                                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                                                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `rgba(16,185,129,${0.2 + (h / 200)})` }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="glass rounded-xl p-3 h-40 flex flex-col gap-2">
                                        {["WhatsApp", "Instagram", "Web"].map((ch, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                                <span className="text-[9px] text-slate-400 flex-1">{ch}</span>
                                                <span className="text-[9px] text-emerald-400 font-bold">{[68, 22, 10][i]}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Center badge */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="glass rounded-2xl px-8 py-4 border border-emerald-500/25 text-center backdrop-blur-xl">
                                    <Monitor size={28} className="text-emerald-400 mx-auto mb-2" />
                                    <p className="text-sm font-bold text-white">Sapiens IA Platform</p>
                                    <p className="text-xs text-emerald-400 font-medium">Panel Operativo · Producción</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-3 block">
                                    ◆ Stack Tecnológico
                                </span>
                                <h2 className="text-4xl font-bold text-white">Las mejores herramientas del ecosistema IA</h2>
                            </div>
                            <p className="text-slate-400 max-w-sm text-sm">
                                Seleccionamos cada herramienta por su potencia, estabilidad y capacidad de integración.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {techStack.map((tech, i) => (
                            <AnimatedSection key={i} delay={i * 0.07}>
                                <div className="glass glass-hover rounded-xl p-6 flex flex-col items-center text-center gap-3 group h-full">
                                    <span className="text-4xl">{tech.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                                            {tech.name}
                                        </h3>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{tech.role}</p>
                                    </div>
                                    <p className="text-[10px] text-slate-600 leading-relaxed hidden group-hover:block transition-all">
                                        {tech.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-3 block">
                            ◆ Metodología
                        </span>
                        <h2 className="text-4xl font-bold text-white">Cómo trabajamos contigo</h2>
                    </AnimatedSection>
                    <div className="space-y-6">
                        {vision.map((v, i) => (
                            <AnimatedSection key={i} delay={i * 0.12}>
                                <div className="glass glass-hover rounded-2xl p-8 flex gap-8 items-start">
                                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex flex-col items-center justify-center">
                                        <span className="text-2xl">{v.icon}</span>
                                        <span className="text-[10px] font-bold text-emerald-500/60">{v.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{v.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
