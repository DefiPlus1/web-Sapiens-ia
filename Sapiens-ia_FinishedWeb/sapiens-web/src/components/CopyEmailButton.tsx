"use client";

import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

interface CopyEmailButtonProps {
    email?: string;
    variant?: "primary" | "secondary" | "pill";
    showEmailText?: boolean;
    className?: string;
}

export default function CopyEmailButton({
    email = "contacto@leoytriagoia.dev",
    variant = "primary",
    showEmailText = true,
    className = "",
}: CopyEmailButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2500);
        } catch (err) {
            console.error("Error al copiar al portapapeles:", err);
        }
    };

    if (variant === "pill") {
        return (
            <button
                onClick={handleCopy}
                aria-label={`Copiar correo electrónico ${email}`}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    copied
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        : "bg-slate-900/70 border-emerald-500/25 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-900"
                } ${className}`}
            >
                <Mail size={13} className={copied ? "text-emerald-400" : "text-emerald-500/80"} />
                <span>{showEmailText ? email : "Copiar Correo"}</span>
                {copied ? (
                    <Check size={13} className="text-emerald-400 animate-in zoom-in-50 duration-200" />
                ) : (
                    <Copy size={13} className="text-slate-400 group-hover:text-emerald-400" />
                )}
            </button>
        );
    }

    if (variant === "secondary") {
        return (
            <button
                onClick={handleCopy}
                aria-label={`Copiar correo electrónico ${email}`}
                className={`relative group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                    copied
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                        : "bg-slate-900/80 border-white/10 text-slate-200 hover:text-white hover:border-emerald-500/40 hover:bg-slate-800/80"
                } ${className}`}
            >
                {copied ? (
                    <>
                        <Check size={16} className="text-emerald-400" />
                        <span>¡Copiado al portapapeles!</span>
                    </>
                ) : (
                    <>
                        <Copy size={16} className="text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
                        <span>{showEmailText ? email : "Copiar Correo"}</span>
                    </>
                )}
            </button>
        );
    }

    // Default: Primary glowing button
    return (
        <button
            onClick={handleCopy}
            aria-label={`Copiar correo electrónico ${email}`}
            className={`relative group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                copied
                    ? "bg-emerald-400 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                    : "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)]"
            } ${className}`}
        >
            {copied ? (
                <>
                    <Check size={18} className="text-slate-950 font-bold" />
                    <span>¡Correo Copiado!</span>
                </>
            ) : (
                <>
                    <Copy size={18} className="text-slate-950 group-hover:scale-110 transition-transform duration-200" />
                    <span>Copiar Correo ({email})</span>
                </>
            )}
        </button>
    );
}
