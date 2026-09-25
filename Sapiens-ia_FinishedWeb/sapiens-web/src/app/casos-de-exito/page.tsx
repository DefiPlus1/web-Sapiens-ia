import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Star, ArrowRight, TrendingUp } from "lucide-react";

const clients = [
    { name: "Clínica VitalSalud", industry: "Salud & Bienestar", logo: "💊", color: "#10b981" },
    { name: "TallerPro Automotriz", industry: "Automotriz", logo: "🔧", color: "#34d399" },
    { name: "MedFlux Diagnósticos", industry: "Diagnóstico Médico", logo: "🩺", color: "#6ee7b7" },
    { name: "AutoServ360", industry: "Servicios Vehiculares", logo: "🚗", color: "#10b981" },
    { name: "DentalAI Clinic", industry: "Odontología", logo: "🦷", color: "#34d399" },
    { name: "OrthoTech Motors", industry: "Mecánica Especializada", logo: "⚙️", color: "#6ee7b7" },
];

const testimonials = [
    {
        company: "Clínica VitalSalud",
        logo: "💊",
        person: "Dra. María Rodríguez",
        role: "Directora Médica",
        result: "+127% citas agendadas automáticamente",
        resultIcon: "📅",
        quote:
            "Antes perdíamos entre 20 y 30 llamadas diarias porque el personal no daba abasto. Ahora el agente de Sapiens-ia atiende cada consulta en segundos, agenda la cita y envía los recordatorios solo. El primer mes recuperamos más de lo que invertimos.",
        stars: 5,
        metric: { value: "127%", label: "Más citas agendadas" },
    },
    {
        company: "TallerPro Automotriz",
        logo: "🔧",
        person: "Carlos Méndez",
        role: "CEO & Fundador",
        result: "+89% en conversión de presupuestos",
        resultIcon: "💰",
        quote:
            "Teníamos un problema grave: los clientes pedían presupuesto por WhatsApp y nadie respondía a tiempo. Sapiens-ia implementó un agente que cotiza en 4 segundos, con precios actualizados y fotos del trabajo anterior. Cerramos el 89% más que antes.",
        stars: 5,
        metric: { value: "89%", label: "Más conversiones" },
    },
    {
        company: "MedFlux Diagnósticos",
        logo: "🩺",
        person: "Dr. Alejandro Fuentes",
        role: "Director de Operaciones",
        result: "60h semanales ahorradas en administración",
        resultIcon: "⏱️",
        quote:
            "Los reportes que antes tardaban medio día ahora llegan a las 8am automáticamente. El seguimiento de resultados de exámenes, las notificaciones a pacientes, todo funciona solo. El equipo ahora puede enfocarse en lo que importa: los pacientes.",
        stars: 5,
        metric: { value: "60h", label: "Semanales liberadas" },
    },
];

const caseStudies = [
    {
        client: "AutoServ360",
        logo: "🚗",
        challenge: "Perdían el 60% de leads por WhatsApp sin respuesta en menos de 5 minutos.",
        solution: "Agente de calificación de leads + integración con CRM propio.",
        result: "3.2x más leads calificados en el primer mes. ROI en 3 semanas.",
        tag: "Agentes IA",
    },
    {
        client: "DentalAI Clinic",
        logo: "🦷",
        challenge: "Agenda desorganizada, cancelaciones sin previo aviso y no-shows del 28%.",
        solution: "Sistema de agendamiento automático + recordatorios inteligentes + reschedule IA.",
        result: "No-shows reducidos al 4%. Agenda con 95% de ocupación consistente.",
        tag: "Automatización",
    },
];

export default function CasosDeExitoPage() {
    return (
        <main>
            <Header />

            {/* Hero */}
            <section className="relative pt-36 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-25" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-emerald-500/8 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Prueba Social
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.0]">
                            Empresas que ya{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                                evolucionaron
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
                            Clínicas y talleres que automatizaron sus operaciones con Sapiens-ia y transformaron su rentabilidad.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="bio-line" />

            {/* Client Logos Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="text-center mb-12">
                        <p className="text-xs font-bold tracking-[0.35em] uppercase text-slate-500">
                            Empresas que confían en Sapiens-ia
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {clients.map((client, i) => (
                            <AnimatedSection key={i} delay={i * 0.07}>
                                <div className="glass glass-hover rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center aspect-square">
                                    <span className="text-4xl">{client.logo}</span>
                                    <div>
                                        <p className="text-xs font-semibold text-white leading-tight">{client.name}</p>
                                        <p className="text-[10px] text-slate-500 mt-1">{client.industry}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-12">
                        <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-3 block">
                            ◆ Casos de Estudio
                        </span>
                        <h2 className="text-4xl font-bold text-white">Resultados reales, datos reales</h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-6">
                        {caseStudies.map((cs, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="glass glass-hover rounded-2xl p-8 h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-3xl">{cs.logo}</span>
                                        <div>
                                            <h3 className="font-bold text-white">{cs.client}</h3>
                                            <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                                {cs.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Desafío</p>
                                            <p className="text-sm text-slate-300">{cs.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Solución</p>
                                            <p className="text-sm text-slate-300">{cs.solution}</p>
                                        </div>
                                        <div className="pt-2 border-t border-emerald-500/10">
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Resultado</p>
                                            <div className="flex items-start gap-2">
                                                <TrendingUp size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                                                <p className="text-sm font-semibold text-emerald-400">{cs.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection className="mb-12">
                        <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-3 block">
                            ◆ Testimonios
                        </span>
                        <h2 className="text-4xl font-bold text-white">Lo que dicen nuestros clientes</h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="glass glass-hover rounded-2xl p-8 h-full flex flex-col">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: t.stars }).map((_, s) => (
                                            <Star key={s} size={14} className="fill-emerald-400 text-emerald-400" />
                                        ))}
                                    </div>
                                    {/* Result badge */}
                                    <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 w-fit">
                                        <span>{t.resultIcon}</span>
                                        <span className="text-xs font-bold text-emerald-400">{t.result}</span>
                                    </div>
                                    {/* Quote */}
                                    <blockquote className="text-slate-400 text-sm leading-relaxed flex-1 italic mb-6">
                                        &ldquo;{t.quote}&rdquo;
                                    </blockquote>
                                    {/* Person */}
                                    <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl">
                                            {t.logo}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">{t.person}</p>
                                            <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Tu empresa es la{" "}
                            <span className="text-emerald-400">próxima historia de éxito.</span>
                        </h2>
                        <p className="text-slate-400 mb-10 text-lg">
                            Agenda una auditoría gratuita y descubre cuánto potencial sin explotar tiene tu operación.
                        </p>
                        <a
                            href="https://wa.me/584224819607"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow inline-flex items-center gap-2 px-10 py-4 text-base font-bold rounded-xl"
                        >
                            Empezar Ahora <ArrowRight size={18} />
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
