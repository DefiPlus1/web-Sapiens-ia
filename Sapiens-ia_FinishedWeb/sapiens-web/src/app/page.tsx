import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import EcosystemDiagram from "@/components/EcosystemDiagram";
import Link from "next/link";
import { ArrowRight, Zap, Brain, Shield, TrendingUp } from "lucide-react";

const techPartners = [
  "Google Gemini", "n8n", "Supabase", "Meta Business",
  "Next.js", "Vercel", "LangChain", "OpenAI", "Python",
  "Docker", "Tailwind CSS", "PostgreSQL",
  "Google Gemini", "n8n", "Supabase", "Meta Business",
  "Next.js", "Vercel", "LangChain", "OpenAI", "Python",
  "Docker", "Tailwind CSS", "PostgreSQL",
];

const stats = [
  { value: "98%", label: "Tasa de resolución automática" },
  { value: "3x", label: "Más leads calificados" },
  { value: "< 5s", label: "Tiempo de respuesta promedio" },
  { value: "24/7", label: "Operación sin interrupciones" },
];

const features = [
  { icon: <Zap size={20} />, title: "Respuesta Instantánea", desc: "En segundos, no en horas." },
  { icon: <Brain size={20} />, title: "IA Contextual", desc: "Comprende el negocio, no solo el texto." },
  { icon: <Shield size={20} />, title: "Datos Seguros", desc: "Infraestructura privada y cifrada." },
  { icon: <TrendingUp size={20} />, title: "ROI Medible", desc: "Métricas claras desde el día uno." },
];

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* ═══════════════════════════════════════════
          HERO — Full screen video background
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/I_am_Sapiens-ia_1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/30 via-[#0f172a]/20 to-[#0f172a]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-20" />
        {/* Emerald radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/8 blur-[120px] rounded-full" />
        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-emerald-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 8px #10b981" }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MANIFIESTO — Editorial premium text block
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="bio-line absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-bold tracking-[0.35em] uppercase text-emerald-500 mb-6">
                ◆ El Impacto
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-0">
                Somos el puente entre tu negocio{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  y el futuro.
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
                En <strong className="text-emerald-400 font-semibold">Sapiens-ia</strong>, no vendemos software.
                Construimos ecosistemas inteligentes que hacen que tu empresa opere sola — atendiendo clientes,
                generando citas, respondiendo cotizaciones y procesando pedidos, las 24 horas del día.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Automatizamos lo repetitivo para que tu equipo se enfoque en lo que verdaderamente importa:
                la estrategia, la creatividad y el crecimiento. Tu empresa no necesita más empleados —
                necesita <em className="text-slate-300">inteligencia</em>.
              </p>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="glass glass-hover p-5 rounded-xl text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1" style={{ textShadow: "0 0 20px rgba(16,185,129,0.5)" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECH MARQUEE — Partners scrolling tape
      ═══════════════════════════════════════════ */}
      <section className="py-12 relative overflow-hidden border-y border-emerald-500/10">
        <div className="bio-line absolute top-0 left-0 right-0" />
        <p className="text-center text-xs font-bold tracking-[0.35em] uppercase text-slate-600 mb-8">
          Nuestro Stack & Socios Tecnológicos
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-8 w-max">
            {techPartners.map((partner, i) => (
              <div
                key={i}
                className="shrink-0 px-6 py-3 rounded-full border border-emerald-500/15 text-sm font-medium text-slate-400 whitespace-nowrap"
                style={{
                  background: "rgba(16,185,129,0.04)",
                  transition: "all 0.3s ease",
                }}
              >
                <span className="text-emerald-500/60 mr-1">◆</span> {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES — 4 pillars
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass glass-hover rounded-xl p-6 h-full group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-500">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ECOSYSTEM — Interactive 2-column diagram
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-glow opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.35em] uppercase text-emerald-500 mb-4">
              ◆ Tecnología en Acción
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cómo funciona nuestro{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Ecosistema
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Desde la primera interacción del cliente hasta la entrega de la solución — todo en segundos, de forma autónoma.
            </p>
          </AnimatedSection>
          <EcosystemDiagram />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOLUTIONS TEASER
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.35em] uppercase text-emerald-500 mb-4">
              ◆ Soluciones
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Lo que automatizamos
              </h2>
              <Link
                href="/soluciones"
                className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                Ver todas las soluciones
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Automatización de Operaciones",
                desc: "Flujos de trabajo autónomos que eliminan tareas repetitivas. Cotizaciones, agendas, reportes — sin intervención humana.",
                metric: "40% menos tiempo operativo",
                href: "/soluciones#automatizacion",
              },
              {
                icon: "🤖",
                title: "Agentes Inteligentes 24/7",
                desc: "Agentes de IA que atienden clientes en WhatsApp, Instagram y tu web simultáneamente, con el tono de voz de tu marca.",
                metric: "3x más conversiones",
                href: "/soluciones#agentes",
              },
              {
                icon: "🗄️",
                title: "Infraestructura de Datos & IA",
                desc: "Bases de conocimiento vectorial con Supabase, pipelines de datos y modelos personalizados para tu industria.",
                metric: "Datos soberanos y seguros",
                href: "/soluciones#infraestructura",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <Link href={card.href} className="block group h-full">
                  <div className="glass glass-hover rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-4xl mb-6">{card.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">{card.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                        {card.metric}
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="bio-line absolute top-0 left-0 right-0" />
        <div className="bio-line absolute bottom-0 left-0 right-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block text-xs font-bold tracking-[0.35em] uppercase text-emerald-500 mb-6">
              ◆ Da el siguiente paso
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ¿Listo para que tu empresa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                trabaje sola?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Agenda una auditoría gratuita. En 45 minutos identificamos qué procesos puedes automatizar hoy
              y cuánto dinero estás dejando en la mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/584124819608"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow px-10 py-4 text-base font-bold tracking-wide rounded-xl"
              >
                Agendar Auditoría Gratuita
              </a>
              <Link
                href="/casos-de-exito"
                className="px-10 py-4 text-base font-bold rounded-xl border border-emerald-500/20 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300"
              >
                Ver Casos de Éxito
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
