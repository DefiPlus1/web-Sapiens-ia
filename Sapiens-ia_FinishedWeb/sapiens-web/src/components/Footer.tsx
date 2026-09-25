import Link from "next/link";
import { Cpu, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const footerLinks = {
    soluciones: [
        { label: "Automatización de Operaciones", href: "/soluciones#automatizacion" },
        { label: "Agentes Inteligentes 24/7", href: "/soluciones#agentes" },
        { label: "Infraestructura de Datos & IA", href: "/soluciones#infraestructura" },
        { label: "Consultoría Estratégica", href: "/soluciones" },
    ],
    compania: [
        { label: "Nuestra Visión", href: "/agencia" },
        { label: "Casos de Éxito", href: "/casos-de-exito" },
        { label: "Insights IA", href: "/insights" },
        { label: "Agendar Auditoría", href: "https://wa.me/584224819607" },
    ],
    legal: [
        { label: "Política de Privacidad", href: "/privacidad" },
        { label: "Términos y Condiciones", href: "/terminos" },
        { label: "Eliminación de Datos", href: "/eliminacion-de-datos" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-emerald-500/10 bg-[#080f1e]">
            {/* Bio line top */}
            <div className="bio-line" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Legal Entity Info */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                <Cpu size={18} className="text-emerald-400" />
                            </div>
                            <span className="text-lg font-bold text-white">
                                Sapiens<span className="text-emerald-400">-ia</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            Fusionamos la sabiduría humana con la inteligencia artificial para desbloquear el siguiente nivel de eficiencia empresarial.
                        </p>
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-emerald-500/20 text-xs text-slate-400 space-y-1">
                            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                                <ShieldCheck size={14} />
                                <span>Titularidad Legal</span>
                            </div>
                            <p className="text-slate-300 font-medium">Leonardo José Ytriago Manrriquez</p>
                            <p className="text-[11px] text-slate-400">Persona Natural · RIF: V-17741920-2</p>
                        </div>
                    </div>

                    {/* Soluciones */}
                    <div>
                        <h5 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Soluciones</h5>
                        <ul className="space-y-3">
                            {footerLinks.soluciones.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compañía & Enlaces Legales */}
                    <div>
                        <h5 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Compañía & Legal</h5>
                        <ul className="space-y-3">
                            {footerLinks.compania.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-white/5" />
                            {footerLinks.legal.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-xs text-slate-500 hover:text-emerald-400 transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto & Domicilio Fiscal */}
                    <div>
                        <h5 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Contacto & Sede</h5>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                                <Mail size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <a href="mailto:contacto@leoytriagoia.dev" className="hover:text-emerald-400 transition-colors">
                                    contacto@leoytriagoia.dev
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                                <Phone size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <a href="https://wa.me/584224819607" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                                    +58 422 4819607 (WhatsApp)
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                                <MapPin size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>Calle San Miguel Casa Nro 12-2, Sector San Miguel, Valle de la Pascua, Guárico, ZP 2350, Venezuela.</span>
                            </li>
                        </ul>
                        <div className="pt-3 border-t border-white/5">
                            <a
                                href="https://wa.me/584224819607"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-center w-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 py-2 rounded-lg text-xs font-semibold hover:bg-emerald-500/25 transition-all duration-200"
                            >
                                Hablar con un Asesor
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2025–2026 Sapiens IA. Operado por Leonardo José Ytriago Manrriquez. Todos los derechos reservados.</p>
                    <div className="flex flex-wrap gap-6 text-xs text-slate-500">
                        <Link href="/privacidad" className="hover:text-emerald-400 transition-colors">Política de Privacidad</Link>
                        <Link href="/terminos" className="hover:text-emerald-400 transition-colors">Términos de Servicio</Link>
                        <Link href="/eliminacion-de-datos" className="hover:text-emerald-400 transition-colors">Eliminación de Datos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
