import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";

const featuredPost = {
    title: "El futuro de la atención al cliente: Cómo los Agentes de IA están redefiniendo el servicio",
    excerpt:
        "Las empresas que implementan agentes conversacionales de IA en sus canales de WhatsApp e Instagram están viendo aumentos de entre 80% y 150% en conversiones — con un costo operativo 90% menor.",
    category: "Agentes IA",
    readTime: "8 min lectura",
    date: "18 Feb 2025",
    tag: "🔥 Destacado",
};

const posts = [
    {
        emoji: "⚡",
        category: "Automatización",
        title: "n8n vs Zapier: ¿Por qué elegimos n8n para nuestros clientes?",
        excerpt:
            "Una comparativa honesta entre las dos plataformas de automatización más populares — y por qué n8n gana cuando la personalización y el costo importan.",
        readTime: "5 min",
        date: "15 Feb 2025",
    },
    {
        emoji: "🧠",
        category: "Estrategia IA",
        title: "Los 5 procesos que toda clínica médica debería automatizar hoy",
        excerpt:
            "Desde la gestión de citas hasta el seguimiento post-consulta: guía práctica para clínicas que quieren operar con la mitad del personal administrativo.",
        readTime: "7 min",
        date: "12 Feb 2025",
    },
    {
        emoji: "📊",
        category: "ROI & Datos",
        title: "Cómo medir el ROI de tus automatizaciones de IA (con plantilla incluida)",
        excerpt:
            "No todos los beneficios son inmediatos o visibles. Aquí te enseñamos a calcular el retorno real — incluyendo los costos ocultos que nadie te cuenta.",
        readTime: "6 min",
        date: "8 Feb 2025",
    },
    {
        emoji: "🔧",
        category: "Talleres Automotrices",
        title: "Automatización para talleres: De la cotización al seguimiento post-servicio",
        excerpt:
            "Un taller en Caracas implementó nuestro sistema y pasó de responder 10 cotizaciones diarias a procesar 80 — con el mismo equipo.",
        readTime: "9 min",
        date: "5 Feb 2025",
    },
    {
        emoji: "🛡️",
        category: "Privacidad & Datos",
        title: "Datos de clientes y GDPR: Lo que debes saber antes de implementar IA",
        excerpt:
            "La automatización inteligente procesa información sensible. Aquí explicamos cómo asegurarnos de que tu empresa opere dentro de las normas — y ganarte la confianza de tus clientes.",
        readTime: "6 min",
        date: "1 Feb 2025",
    },
    {
        emoji: "🚀",
        category: "Casos de Éxito",
        title: "De 28% de no-shows a 4%: La historia de DentalAI Clinic",
        excerpt:
            "Cómo un sistema de recordatorios inteligentes y reschedule automático transformó la operación de una clínica dental en menos de 30 días.",
        readTime: "5 min",
        date: "27 Ene 2025",
    },
];

const categories = ["Todos", "Agentes IA", "Automatización", "Estrategia IA", "ROI & Datos", "Casos de Éxito"];

export default function InsightsPage() {
    return (
        <main>
            <Header />

            {/* Hero */}
            <section className="relative pt-36 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-25" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/8 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Contenido Educativo
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.0]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                                Insights
                            </span>{" "}
                            de IA
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
                            Estrategia, casos reales y guías prácticas para empresas que quieren liderar la transición hacia la IA.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="bio-line" />

            {/* Featured post */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <Link href="#" className="block group">
                            <div className="glass glass-hover rounded-2xl overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Visual */}
                                    <div className="relative min-h-[320px] bg-gradient-to-br from-[#0a1628] to-[#0f172a] flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 hero-grid opacity-30" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-48 h-48 bg-emerald-500/15 rounded-full blur-[60px]" />
                                        </div>
                                        <span className="relative text-9xl opacity-70">🤖</span>
                                    </div>
                                    {/* Content */}
                                    <div className="p-10 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                                                {featuredPost.tag}
                                            </span>
                                            <span className="text-xs font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                {featuredPost.category}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-snug">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-slate-400 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-8">
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={12} /> {featuredPost.readTime}
                                            </span>
                                            <span>{featuredPost.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
                                            Leer artículo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Category filter */}
            <section className="px-6 py-4">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${i === 0
                                            ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-400"
                                            : "border-white/10 bg-white/3 text-slate-400 hover:border-emerald-500/30 hover:text-emerald-400"
                                        }`}
                                >
                                    <Tag size={10} className="inline mr-1.5" />
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Posts grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <AnimatedSection key={i} delay={i * 0.07}>
                                <Link href="#" className="block group h-full">
                                    <div className="glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full">
                                        {/* Image area */}
                                        <div className="relative h-48 bg-gradient-to-br from-[#0a1628] to-[#0f172a] flex items-center justify-center overflow-hidden shrink-0">
                                            <div className="absolute inset-0 hero-grid opacity-20" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                                <div className="w-32 h-32 bg-emerald-500/30 rounded-full blur-3xl" />
                                            </div>
                                            <span className="relative text-6xl">{post.emoji}</span>
                                        </div>
                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-3">
                                                {post.category}
                                            </span>
                                            <h3 className="text-base font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug flex-1">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                                <div className="flex items-center gap-3 text-xs text-slate-600">
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={11} /> {post.readTime}
                                                    </span>
                                                    <span>{post.date}</span>
                                                </div>
                                                <ArrowRight size={14} className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <div className="glass rounded-2xl p-12 border border-emerald-500/15 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/8 rounded-full blur-3xl -mr-24 -mt-24" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
                                Suscríbete a Sapiens Digest
                            </h2>
                            <p className="text-slate-400 mb-8 relative z-10">
                                Insights sobre IA y automatización para empresas — directo a tu email, cada semana. Sin spam.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
                                <input
                                    type="email"
                                    placeholder="tu@empresa.com"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                />
                                <button className="btn-glow px-6 py-3 text-sm font-bold rounded-xl whitespace-nowrap">
                                    Suscribirme
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
