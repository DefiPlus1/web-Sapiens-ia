"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Cpu } from "lucide-react";

const navLinks = [
    { label: "Inicio", href: "/" },
    {
        label: "Soluciones",
        href: "/soluciones",
        dropdown: [
            { label: "Automatización de Operaciones", href: "/soluciones#automatizacion" },
            { label: "Agentes Inteligentes", href: "/soluciones#agentes" },
            { label: "Infraestructura de Datos & IA", href: "/soluciones#infraestructura" },
        ],
    },
    { label: "Casos de Éxito", href: "/casos-de-exito" },
    { label: "Agencia", href: "/agencia" },
    { label: "Insights", href: "/insights" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#0a1628]/90 backdrop-blur-xl border-b border-emerald-500/10 shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            {/* Top bioluminescent line */}
            <div className="bio-line" />

            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/60 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        <Cpu size={18} className="text-emerald-400" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">
                        Sapiens<span className="text-emerald-400">-ia</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                                    {link.label}
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute top-full left-0 mt-3 w-64 glass rounded-xl p-2 shadow-2xl shadow-black/40">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="block px-4 py-3 text-sm text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://wa.me/584224819607"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow px-6 py-2.5 text-sm font-bold tracking-wide rounded-lg"
                    >
                        Agendar Auditoría
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-300 hover:text-emerald-400 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden glass border-t border-emerald-500/10 px-6 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="block text-base font-medium text-slate-300 hover:text-emerald-400 transition-colors py-2 border-b border-white/5"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/584224819607"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow block text-center px-6 py-3 text-sm font-bold rounded-lg mt-4"
                    >
                        Agendar Auditoría
                    </a>
                </div>
            )}
        </header>
    );
}
