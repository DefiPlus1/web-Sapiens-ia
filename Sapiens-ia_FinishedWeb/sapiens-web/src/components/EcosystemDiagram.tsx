"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Recepción de Solicitud",
        subtitle: "WhatsApp · Instagram · Web",
        description:
            "El cliente llega por cualquier canal digital. Nuestro ecosistema escucha en tiempo real, sin importar la plataforma.",
        icon: "📲",
        color: "#10b981",
    },
    {
        id: 2,
        title: "Procesamiento de Entrada",
        subtitle: "n8n normaliza los datos",
        description:
            "n8n actúa como cerebro orquestador: captura, limpia y normaliza cada mensaje para que la IA lo comprenda perfectamente.",
        icon: "⚙️",
        color: "#34d399",
    },
    {
        id: 3,
        title: "Detección de Intención",
        subtitle: "Gemini AI analiza el contexto",
        description:
            "Google Gemini analiza la intención, el sentimiento y el contexto del mensaje con precisión de nivel enterprise.",
        icon: "🧠",
        color: "#6ee7b7",
    },
    {
        id: 4,
        title: "Consulta de Base de Conocimientos",
        subtitle: "Búsqueda vectorial en Supabase",
        description:
            "Busca en tiempo real dentro de tu base de conocimientos vectorial para extraer la respuesta más relevante y precisa.",
        icon: "🗄️",
        color: "#10b981",
    },
    {
        id: 5,
        title: "Generación de Respuesta",
        subtitle: "Redacción coherente y vendedora",
        description:
            "El agente redacta una respuesta personalizada, empática y orientada a la conversión — en el tono de voz de tu marca.",
        icon: "✍️",
        color: "#34d399",
    },
    {
        id: 6,
        title: "Entrega Omnicanal",
        subtitle: "Solución entregada en segundos",
        description:
            "La respuesta se envía al canal original del cliente. Tiempo de resolución: segundos. Satisfacción: máxima.",
        icon: "🚀",
        color: "#6ee7b7",
    },
];

// SVG diagram box positions
const boxPositions = [
    { x: 40, y: 20, label: "Canales", sub: "WA / IG / Web" },
    { x: 200, y: 20, label: "n8n", sub: "Orquestación" },
    { x: 360, y: 20, label: "Gemini AI", sub: "Intención" },
    { x: 40, y: 140, label: "Supabase", sub: "Conocimiento" },
    { x: 200, y: 140, label: "Agente IA", sub: "Generación" },
    { x: 360, y: 140, label: "Omnicanal", sub: "Entrega" },
];

const svgPaths = [
    "M 130 40 L 200 40",
    "M 290 40 L 360 40",
    "M 80 80 L 80 140",
    "M 240 80 L 240 140",
    "M 130 160 L 200 160",
    "M 290 160 L 360 160",
    "M 450 40 L 450 140",
];

export default function EcosystemDiagram() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Step List */}
            <div className="space-y-2">
                {steps.map((step) => (
                    <motion.div
                        key={step.id}
                        onHoverStart={() => setActiveStep(step.id)}
                        onHoverEnd={() => setActiveStep(null)}
                        className="relative group cursor-pointer p-4 rounded-xl transition-all duration-300"
                        style={{
                            background:
                                activeStep === step.id
                                    ? "rgba(16,185,129,0.08)"
                                    : "transparent",
                        }}
                    >
                        <div className="flex items-start gap-4">
                            {/* Step number */}
                            <div
                                className="shrink-0 w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all duration-300"
                                style={{
                                    background:
                                        activeStep === step.id
                                            ? "rgba(16,185,129,0.3)"
                                            : "rgba(16,185,129,0.08)",
                                    border:
                                        activeStep === step.id
                                            ? "1px solid rgba(16,185,129,0.6)"
                                            : "1px solid rgba(16,185,129,0.15)",
                                    color: activeStep === step.id ? "#34d399" : "#6b7280",
                                }}
                            >
                                {String(step.id).padStart(2, "0")}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3
                                        className="font-semibold text-sm transition-all duration-300"
                                        style={{
                                            color: activeStep === step.id ? "#34d399" : "#e2e8f0",
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-xs text-slate-500 mb-1">{step.subtitle}</p>
                                <AnimatePresence>
                                    {activeStep === step.id && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="text-xs text-slate-400 leading-relaxed overflow-hidden"
                                        >
                                            {step.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Active indicator */}
                            <div
                                className="shrink-0 w-1.5 h-1.5 rounded-full mt-2 transition-all duration-300"
                                style={{
                                    background:
                                        activeStep === step.id ? "#10b981" : "transparent",
                                    boxShadow:
                                        activeStep === step.id
                                            ? "0 0 8px rgba(16,185,129,0.8)"
                                            : "none",
                                }}
                            />
                        </div>

                        {/* Left border glow on active */}
                        <div
                            className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full transition-all duration-300"
                            style={{
                                background:
                                    activeStep === step.id
                                        ? "linear-gradient(to bottom, #10b981, #34d399)"
                                        : "transparent",
                                boxShadow:
                                    activeStep === step.id
                                        ? "0 0 8px rgba(16,185,129,0.6)"
                                        : "none",
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Right: SVG Diagram */}
            <div className="glass glass-hover rounded-2xl p-6 lg:p-8 relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 hero-grid opacity-30 rounded-2xl" />

                {/* Title */}
                <div className="relative z-10 mb-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-500">
                        Flujo de Ecosistema
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                        Hover sobre un paso para iluminar el nodo
                    </p>
                </div>

                {/* SVG Diagram */}
                <div className="relative z-10 w-full">
                    <svg
                        viewBox="0 0 520 220"
                        className="w-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Connection paths */}
                        {svgPaths.map((d, i) => (
                            <path
                                key={i}
                                d={d}
                                stroke={
                                    activeStep !== null
                                        ? "rgba(16,185,129,0.6)"
                                        : "rgba(16,185,129,0.2)"
                                }
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="4 4"
                                className="flow-path"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}

                        {/* Boxes */}
                        {boxPositions.map((box, i) => {
                            const stepNum = i + 1;
                            const isActive = activeStep === stepNum;
                            return (
                                <g key={i}>
                                    {/* Box background */}
                                    <rect
                                        x={box.x}
                                        y={box.y}
                                        width="115"
                                        height="60"
                                        rx="8"
                                        fill={isActive ? "rgba(16,185,129,0.15)" : "rgba(10,22,40,0.8)"}
                                        stroke={isActive ? "#10b981" : "rgba(16,185,129,0.2)"}
                                        strokeWidth={isActive ? "1.5" : "1"}
                                        filter={isActive ? "url(#glow)" : "none"}
                                        style={{ transition: "all 0.3s ease" }}
                                    />
                                    {/* Step number badge */}
                                    <circle
                                        cx={box.x + 14}
                                        cy={box.y + 14}
                                        r="9"
                                        fill={isActive ? "#10b981" : "rgba(16,185,129,0.1)"}
                                        style={{ transition: "all 0.3s ease" }}
                                    />
                                    <text
                                        x={box.x + 14}
                                        y={box.y + 18}
                                        textAnchor="middle"
                                        fill={isActive ? "#0f172a" : "#6b7280"}
                                        fontSize="7"
                                        fontWeight="bold"
                                        fontFamily="Space Grotesk, sans-serif"
                                    >
                                        {String(stepNum).padStart(2, "0")}
                                    </text>
                                    {/* Label */}
                                    <text
                                        x={box.x + 58}
                                        y={box.y + 30}
                                        textAnchor="middle"
                                        fill={isActive ? "#34d399" : "#e2e8f0"}
                                        fontSize="9"
                                        fontWeight="600"
                                        fontFamily="Space Grotesk, sans-serif"
                                        style={{ transition: "all 0.3s ease" }}
                                    >
                                        {box.label}
                                    </text>
                                    {/* Sub label */}
                                    <text
                                        x={box.x + 58}
                                        y={box.y + 44}
                                        textAnchor="middle"
                                        fill="#64748b"
                                        fontSize="7"
                                        fontFamily="Space Grotesk, sans-serif"
                                    >
                                        {box.sub}
                                    </text>
                                    {/* Active pulse dot */}
                                    {isActive && (
                                        <circle
                                            cx={box.x + 108}
                                            cy={box.y + 10}
                                            r="4"
                                            fill="#10b981"
                                            filter="url(#glow)"
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </svg>
                </div>

                {/* Active step callout */}
                <AnimatePresence>
                    {activeStep && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="relative z-10 mt-4 pt-4 border-t border-emerald-500/10"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-lg">{steps[activeStep - 1].icon}</span>
                                <div>
                                    <p className="text-xs font-semibold text-emerald-400">
                                        Paso {activeStep}: {steps[activeStep - 1].title}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {steps[activeStep - 1].subtitle}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
