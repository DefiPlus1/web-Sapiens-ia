import Link from "next/link";
import { Cpu, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
    soluciones: [
        { label: "Automatización de Operaciones", href: "/soluciones#automatizacion" },
        { label: "Agentes Inteligentes", href: "/soluciones#agentes" },
        { label: "Infraestructura de Datos & IA", href: "/soluciones#infraestructura" },
        { label: "Consultoría Estratégica", href: "/soluciones" },
    ],
    compania: [
        { label: "Nuestra Visión", href: "/agencia" },
        { label: "Casos de Éxito", href: "/casos-de-exito" },
        { label: "Insights IA", href: "/insights" },
        { label: "Carreras", href: "/agencia" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-emerald-500/10 bg-[#080f1e]">
            {/* Bio line top */}
            <div className="bio-line" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                <Cpu size={18} className="text-emerald-400" />
                            </div>
                            <span className="text-lg font-bold text-white">
                                Sapiens<span className="text-emerald-400">-ia</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Fusionamos la sabiduría humana con la inteligencia artificial para desbloquear el siguiente nivel de eficiencia empresarial.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200">
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Soluciones */}
                    <div>
                        <h5 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Soluciones</h5>
                        <ul className="space-y-3">
                            {footerLinks.soluciones.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-sm text-slate-500 hover:text-emerald-400 transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compañía */}
                    <div>
                        <h5 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Compañía</h5>
                        <ul className="space-y-3">
                            {footerLinks.compania.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-sm text-slate-500 hover:text-emerald-400 transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto + Newsletter */}
                    <div>
                        <h5 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Contacto</h5>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <Mail size={14} className="text-emerald-500 shrink-0" />
                                contact@sapiens-ia.tech
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-500">
                                <MapPin size={14} className="text-emerald-500 shrink-0" />
                                Latinoamérica & España
                            </li>
                        </ul>
                        <h6 className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Newsletter IA</h6>
                        <p className="text-xs text-slate-500 mb-3">Insights semanales sobre IA para tu negocio.</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                            />
                            <button className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/30 transition-all duration-200">
                                Suscribirme
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-600">© 2025 Sapiens-ia. Todos los derechos reservados.</p>
                    <div className="flex gap-6 text-xs text-slate-600">
                        <a href="#" className="hover:text-emerald-400 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Términos</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
