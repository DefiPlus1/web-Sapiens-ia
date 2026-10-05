"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Layers, 
    Brain, 
    Database, 
    ShieldCheck, 
    Calendar, 
    MessageSquare, 
    CheckCircle2, 
    ArrowRight, 
    Zap, 
    Activity, 
    Lock,
    ChevronRight,
    ChevronLeft,
    Server,
    Eye,
    Maximize2,
    X,
    ZoomIn,
    ZoomOut,
    RotateCcw,
    ShoppingBag,
    CreditCard,
    Sparkles
} from "lucide-react";

export interface CaseStudyGalleryItem {
    id: string;
    title: string;
    src: string;
    alt: string;
    caption: string;
}

export interface CaseStudyData {
    id: string;
    number: string;
    badge: string;
    title: string;
    subtitle: string;
    rating: string;
    gallery: CaseStudyGalleryItem[];
    metrics: { label: string; value: string; detail: string }[];
    problem: {
        title: string;
        description: string;
        painPoints: string[];
    };
    architecture: {
        title: string;
        description: string;
        highlights: { label: string; desc: string; icon: string }[];
        workflowSteps: { step: string; title: string; tech: string; desc: string }[];
    };
    techStack: { name: string; category: string }[];
    impact: {
        quote: string;
        author: string;
        achievements: string[];
    };
    confidentialityNote: string;
}

export const caseStudiesList: CaseStudyData[] = [
    {
        id: "clinica-medica",
        number: "01",
        badge: "Caso de Estudio Estrella · Enterprise",
        title: "Ecosistema Clínico & Médico Estético",
        subtitle: "Agente IA Multimodal Autónomo de 65 Nodos en n8n con RAG en Qdrant y Supabase RLS",
        rating: "Puntuación Técnica: 10/10",
        gallery: [
            {
                id: "agente-sofia",
                title: "Agente Multimodal Sofía (65 Nodos)",
                src: "/captures-n8n/agente-sofia-blc.jpg",
                alt: "Lienzo de n8n Agente Sofía 65 Nodos",
                caption: "Captura de producción en n8n: Pipeline multimodal de 65 nodos con Google Gemini 3.1 Vision para análisis de fotos dérmicas, transcripción de notas de voz de WhatsApp, Qdrant Vector Store y Supabase Tool Calling transaccional.",
            },
            {
                id: "crm-clinico",
                title: "Módulo CRM de Fichas Médicas",
                src: "/captures-n8n/crm-blc.jpg",
                alt: "Interfaz del CRM Clínico y Fichas de Pacientes",
                caption: "Módulo de gestión médica desarrollado con TypeScript y React sobre Supabase: Registro seguro de fichas de pacientes, agendamiento de tratamientos corporales y faciales, y sincronización en tiempo real de estados de consulta.",
            },
        ],
        metrics: [
            { label: "Tiempo de Respuesta", value: "< 4 seg", detail: "Procesamiento de texto, audio e imágenes" },
            { label: "Complejidad n8n", value: "65 Nodos", detail: "Orquestación en producción médica" },
            { label: "Citas Automatizadas", value: "+120%", detail: "Sincronización directa sin colisiones" },
            { label: "Seguridad Médica", value: "Multi Role RLS", detail: "Protección estricta de datos clínicos" },
        ],
        problem: {
            title: "El Desafío Operativo de la Clínica",
            description: "El centro médico estético recibía un volumen masivo de consultas por WhatsApp con notas de voz extensas y fotografías de afecciones estéticas de la piel. El personal de recepción colapsaba en horas pico, provocando demoras de hasta cuatro horas para presupuestar tratamientos, citas duplicadas y pérdida de pacientes de alto valor.",
            painPoints: [
                "Audios extensos de WhatsApp que el personal administrativo no podía escuchar a tiempo.",
                "Fotografías dérmicas sin categorización previa para el especialista médico.",
                "Falta de sincronización en tiempo real entre la ficha del paciente, la agenda y las cancelaciones.",
                "Riesgo de exponer datos confidenciales de historias clínicas en conversaciones abiertas.",
            ],
        },
        architecture: {
            title: "Solución Técnica & Arquitectura de 65 Nodos",
            description: "Diseño e implementación de un orquestador integral en n8n auto hospedado en Dokploy. Integra Google Gemini 3.1 para razonamiento multimodal de frontera, Qdrant como base de datos vectorial para recuperación semántica de protocolos clínicos, y Supabase PostgreSQL con Row Level Security como capa transaccional de alta seguridad.",
            highlights: [
                {
                    label: "Visión & Audio con Google Gemini 3.1",
                    desc: "Gemini 3.1 Vision analiza la zona dérmica consultada por el paciente y el módulo de audio transcribe y extrae intenciones de las notas de voz de WhatsApp.",
                    icon: "Brain",
                },
                {
                    label: "RAG Desacoplado con Qdrant Vector DB",
                    desc: "Índice HNSW en Qdrant con embeddings semánticos. Recupera protocolos médicos, precios y políticas sin sobrecargar la base de datos transaccional relacional.",
                    icon: "Server",
                },
                {
                    label: "Supabase PostgreSQL con RLS y RBAC",
                    desc: "Ocho tablas relacionales protegidas por RLS. Funciones SECURITY DEFINER para transacciones de pacientes, especialistas y citas con roles admin, doctor y staff.",
                    icon: "Database",
                },
                {
                    label: "Chatwoot Handoff & Presencia",
                    desc: "Detección inmediata de estado del agente humano. Si un médico o recepcionista interviene en la conversación, la IA silencia sus respuestas de forma transparente.",
                    icon: "MessageSquare",
                },
            ],
            workflowSteps: [
                {
                    step: "01",
                    title: "Recepción de Mensajes Omnicanal",
                    tech: "Webhook WhatsApp Cloud API y Chatwoot",
                    desc: "El webhook captura el evento entrante y clasifica si el payload contiene texto plano, archivo de audio o fotografía.",
                },
                {
                    step: "02",
                    title: "Normalización Multimodal",
                    tech: "n8n Code Node y Gemini 3.1 Vision",
                    desc: "Las notas de voz se transcriben de inmediato; las fotografías dérmicas se envían al endpoint de Gemini 3.1 para generar un preanálisis contextual seguro.",
                },
                {
                    step: "03",
                    title: "Recuperación RAG en Qdrant",
                    tech: "Qdrant Vector Store y Payload Filtering",
                    desc: "Búsqueda semántica en los documentos de tratamientos médicos y políticas oficiales con umbral de similitud estricto para evitar alucinaciones.",
                },
                {
                    step: "04",
                    title: "Tool Calling Transaccional en Supabase",
                    tech: "Supabase Tool Nodes (PostgreSQL 16)",
                    desc: "Gemini invoca herramientas programadas: buscar paciente, crear paciente, actualizar paciente, consultar especialista y agendar cita atómica.",
                },
                {
                    step: "05",
                    title: "Generación de Respuesta & Memoria Contextual",
                    tech: "Postgres Chat Memory y WhatsApp API",
                    desc: "Persistencia del turno en memoryPostgresChat y despacho de respuesta personalizada en menos de cuatro segundos al paciente.",
                },
            ],
        },
        techStack: [
            { name: "n8n Self Hosted", category: "Orquestador Core" },
            { name: "Google Gemini 3.1", category: "Razonamiento & Visión" },
            { name: "Qdrant Vector DB", category: "Motor RAG en Rust" },
            { name: "Supabase PostgreSQL", category: "Base de Datos & RLS" },
            { name: "Chatwoot CRM", category: "Inbox & Human Handoff" },
            { name: "Dokploy y Docker", category: "Infraestructura VPS" },
        ],
        impact: {
            quote: "El sistema no solo atiende de día y de noche: comprende exactamente qué tratamiento requiere el paciente y agenda la cita en el calendario del especialista sin un solo error de solapamiento.",
            author: "Evaluación Operativa · Ecosistema Clínico",
            achievements: [
                "Reducción del tiempo de primera respuesta de 4 horas a menos de 4 segundos promedio.",
                "Incremento del 120% en citas médicas agendadas de forma totalmente autónoma.",
                "Cero colisiones de horarios gracias a bloqueos transaccionales en PostgreSQL.",
                "Cumplimiento riguroso de privacidad: historias clínicas protegidas bajo Row Level Security.",
            ],
        },
        confidentialityNote: "Aviso de Confidencialidad y NDA: Por acuerdo de privacidad médica y protección de secreto comercial, el nombre comercial de la clínica y las historias médicas de pacientes se mantienen anónimos. La arquitectura corresponde a un entorno en producción verificado.",
    },
    {
        id: "reputation-suite",
        number: "02",
        badge: "Suite Operativa · Negocio Real",
        title: "Suite de Reputación, Resguardo & Agendamiento",
        subtitle: "Workflows El Escudo, El Cazador, El Limpiador y Sincronización Google Calendar con Supabase",
        rating: "Puntuación Técnica: 9.8/10",
        gallery: [
            {
                id: "crear-cita",
                title: "Crear y Actualizar Cita",
                src: "/captures-n8n/crear-actualizar-cita-blc.jpg",
                alt: "Lienzo de n8n Crear y Actualizar Cita Médica",
                caption: "Captura de producción en n8n: Orquestación transaccional para verificar disponibilidad, agendar citas y sincronizar Google Calendar con Supabase sin solapamientos.",
            },
            {
                id: "el-escudo",
                title: "Reputación El Escudo",
                src: "/captures-n8n/reputacion-el-escudo.jpg",
                alt: "Lienzo de n8n Workflow El Escudo",
                caption: "Captura de producción en n8n: Detección preventiva de insatisfacción post tratamiento mediante análisis de sentimiento con IA, intercepción del enlace público y alerta inmediata a gerencia.",
            },
            {
                id: "el-cazador",
                title: "Reputación El Cazador",
                src: "/captures-n8n/reputacion-el-cazador.jpg",
                alt: "Lienzo de n8n Workflow El Cazador",
                caption: "Captura de producción en n8n: Identificación de pacientes con alta satisfacción tras consulta y despacho inteligente de invitación con enlace directo a Google Reviews 5 estrellas.",
            },
            {
                id: "el-limpiador",
                title: "Reputación El Limpiador",
                src: "/captures-n8n/reputacion-el-limpiador.jpg",
                alt: "Lienzo de n8n Workflow El Limpiador",
                caption: "Captura de producción en n8n: Mantenimiento automatizado de registros temporales, expiración de tokens de encuesta y actualización de estado en la base de datos.",
            },
        ],
        metrics: [
            { label: "Google Reviews", value: "95% Positivas", detail: "Intercepción preventiva de quejas" },
            { label: "Workflows Coordinados", value: "4 Motores", detail: "Escudo, Cazador, Citas y Limpiador" },
            { label: "Colisiones de Agenda", value: "0%", detail: "Sincronización atómica bidireccional" },
            { label: "Kill Switch Humano", value: "0 ms", detail: "Apagado reactivo al tomar el chat" },
        ],
        problem: {
            title: "El Desafío de la Reputación y las Agendas Médicas",
            description: "Cualquier inconformidad de un paciente terminaba directamente como una reseña negativa en Google Maps antes de que la administración pudiera mediar. Al mismo tiempo, los pacientes satisfechos rara vez dejaban una opinión positiva, y las citas sufrían choques entre Google Calendar y las agendas privadas de los especialistas.",
            painPoints: [
                "Quejas imprevistas publicadas en Google Reviews sin oportunidad de resolución previa.",
                "Pacientes satisfechos que no completaban reseñas por fricción en el proceso.",
                "Doble reserva de especialistas en el consultorio por falta de sincronización atómica.",
                "Agentes de IA interfiriendo en conversaciones cuando un asesor humano ya estaba dialogando.",
            ],
        },
        architecture: {
            title: "Arquitectura de la Suite: 4 Motores Coordinados",
            description: "Ecosistema coordinado de cuatro workflows en n8n que resuelven integralmente la experiencia post atención, la sincronización de citas y el control operacional humano.",
            highlights: [
                {
                    label: "1. El Escudo (18 Nodos)",
                    desc: "Analiza el sentimiento de las conversaciones de seguimiento post tratamiento. Si detecta insatisfacción o dolor, bloquea el envío del enlace de Google y crea un ticket urgente para la dirección.",
                    icon: "ShieldCheck",
                },
                {
                    label: "2. El Cazador (21 Nodos)",
                    desc: "Monitorea la confirmación de consultas exitosas. Envía un mensaje de agradecimiento personalizado y el enlace directo para dejar reseña de cinco estrellas en el momento exacto.",
                    icon: "Zap",
                },
                {
                    label: "3. Escribir y Actualizar Cita (21 Nodos)",
                    desc: "Bloquea horarios en Google Calendar y Supabase simultáneamente. Si una llamada concurrente intenta ocupar el slot, la transacción revierte para impedir duplicidades.",
                    icon: "Calendar",
                },
                {
                    label: "4. Apagar Agente IA (7 Nodos)",
                    desc: "Kill Switch conectado al webhook de Chatwoot. En cuanto un asesor humano asigna la conversación a su usuario, el bot desactiva sus respuestas automáticamente.",
                    icon: "Lock",
                },
            ],
            workflowSteps: [
                {
                    step: "01",
                    title: "Disparo Post Tratamiento",
                    tech: "Supabase Trigger y n8n Cron",
                    desc: "Veinticuatro horas después del procedimiento médico, se dispara un mensaje de chequeo de recuperación para evaluar el bienestar del paciente.",
                },
                {
                    step: "02",
                    title: "Clasificación de Sentimiento con Gemini",
                    tech: "Google Gemini Sentiment Engine",
                    desc: "El modelo evalúa la respuesta en tres ramas analíticas: Altamente Satisfecho, Neutral o Inconforme con Dolor o Queja.",
                },
                {
                    step: "03",
                    title: "Bifurcación: Escudo frente a Cazador",
                    tech: "n8n Switch & Router Nodes",
                    desc: "Si es Inconforme, El Escudo genera alerta interna inmediata por canal privado a supervisión. Si es Satisfecho, El Cazador despacha invitación para Google Reviews.",
                },
                {
                    step: "04",
                    title: "Sincronización Bidireccional de Citas",
                    tech: "Google Calendar API y PostgreSQL RPC",
                    desc: "Las modificaciones de fecha u hora actualizan el evento en el calendario del doctor y la fila de Supabase en una misma transacción atómica.",
                },
            ],
        },
        techStack: [
            { name: "n8n Self Hosted", category: "Motor de Reglas & Switches" },
            { name: "Google Calendar API", category: "Coordinación de Agendas" },
            { name: "Google Gemini AI", category: "Detección de Sentimiento" },
            { name: "Supabase RPC & Triggers", category: "Lógica Transaccional" },
            { name: "Chatwoot Webhooks", category: "Kill Switch Humano" },
        ],
        impact: {
            quote: "El Escudo protegió la reputación del consultorio en más de una docena de situaciones que se resolvieron internamente en minutos, antes de convertirse en un comentario negativo en internet.",
            author: "Métricas de Control de Calidad Operativa",
            achievements: [
                "Aumento de reseñas verificadas de 5 estrellas en un 340% durante los primeros 60 días.",
                "Tasa de colisiones de citas reducida al 0% exacto.",
                "Tiempo de respuesta ante quejas de pacientes reducido de 24 horas a 8 minutos promedio.",
                "Convivencia armónica entre la automatización y el personal de atención humana.",
            ],
        },
        confidentialityNote: "Aviso de Confidencialidad y NDA: Desarrollo original de Leonardo Ytriago para clientes corporativos de Sapiens IA. Los identificadores de calendarios y datos de contacto han sido completamente protegidos.",
    },
    {
        id: "repuestos-moto-ecommerce",
        number: "03",
        badge: "Comercio Digital & Repuestos de Moto",
        title: "E-commerce de Venta de Repuestos de Moto & Cashea BNPL",
        subtitle: "Ecosistema de Ventas, Seguimiento 24h, Cashea API, MercadoLibre y Evolution API en n8n",
        rating: "Puntuación Técnica: 9.9/10",
        gallery: [
            {
                id: "crm-repuestos",
                title: "CRM de Repuestos de Moto",
                src: "/captures-n8n/crm-orovalor.jpg",
                alt: "Pipeline de Órdenes y Pedidos de Repuestos de Moto",
                caption: "Captura real del CRM y pipeline de pedidos de repuestos de moto: Control de estados de órdenes, confirmación de financiamiento Cashea, trazabilidad de envíos nacionales y retiros en tienda.",
            },
            {
                id: "notificacion-cashea",
                title: "Notificación Estatus Cashea",
                src: "/captures-n8n/notificacion-cambio-estatus-cashea.jpg",
                alt: "Workflow de n8n Notificación de Estatus Cashea",
                caption: "Workflow de n8n: Captura automatizada de webhook de aprobación de pago en Cashea y despacho inmediato de confirmación con número de guía y estatus de empaque al comprador.",
            },
        ],
        metrics: [
            { label: "Financiamiento BNPL", value: "Cashea API", detail: "Generación automática de enlaces de pago" },
            { label: "Seguimiento 24 Horas", value: "100% Autónomo", detail: "Recuperación de cotizaciones de repuestos" },
            { label: "Canales Integrados", value: "Omnicanal", detail: "WhatsApp Evolution API, MercadoLibre y CRM" },
            { label: "Notificaciones DDS", value: "Tiempo Real", detail: "Alertas por cambios de estatus del pedido" },
        ],
        problem: {
            title: "El Desafío de Ventas en Tienda de Repuestos de Moto",
            description: "El comercio gestiona un alto flujo diario de consultas y pedidos de repuestos para motocicletas (kits de arrastre, cauchos, frenos, cilindros, carburadores y consumibles). Los clientes solicitaban presupuestos que requerían horas de validación manual para confirmar compatibilidad de piezas por modelo y cilindrada; los pedidos entrantes desde MercadoLibre no se sincronizaban en tiempo real con el inventario, y la gestión del método de pago financiado Cashea exigía verificación manual constante de cada comprobante.",
            painPoints: [
                "Pérdida de ventas de repuestos por falta de seguimiento comercial a las 24 horas tras cotizar.",
                "Fricción al generar y enviar enlaces de financiamiento Cashea de forma manual por chat.",
                "Pedidos de MercadoLibre y WhatsApp aislados sin un panel unificado de despacho de piezas.",
                "Consultas repetitivas de motorizados y mecánicos preguntando por el estado de envío de sus piezas.",
            ],
        },
        architecture: {
            title: "Solución de Automatización para Venta de Repuestos de Moto",
            description: "Ecosistema integral en n8n que conecta el catálogo de repuestos de motos, la API de Cashea para financiamiento digital, la API de MercadoLibre y WhatsApp mediante Evolution API, articulados con un CRM de órdenes y seguimiento proactivo a las 24 horas.",
            highlights: [
                {
                    label: "Integración Directa con Cashea API (BNPL)",
                    desc: "Generación programática de órdenes de compra con Cashea, validación instantánea de aprobación y emisión automática de recibo de compra de repuestos.",
                    icon: "CreditCard",
                },
                {
                    label: "Motor de Seguimiento Post Cotización (24h)",
                    desc: "Workflow inteligente que recontacta a motorizados y talleres 24 horas después de cotizar repuestos para aclarar dudas sobre compatibilidad o cerrar la orden.",
                    icon: "Zap",
                },
                {
                    label: "Tool Calling para Catálogo de Repuestos",
                    desc: "Funciones del agente para buscar repuestos por modelo y año de motocicleta, validar existencias, dar de alta clientes y registrar pedidos formalmente.",
                    icon: "ShoppingBag",
                },
                {
                    label: "Notificaciones DDS & Trazabilidad de Envíos",
                    desc: "Despacho instantáneo de avisos por WhatsApp ante cada transición: Repuesto Cotizado, Pago Aprobado, En Empaque, Enviado por Encomienda o Listo para Retiro.",
                    icon: "Activity",
                },
            ],
            workflowSteps: [
                {
                    step: "01",
                    title: "Consulta y Cotización de Repuestos",
                    tech: "Evolution API (WhatsApp) y Agente de Ventas",
                    desc: "El cliente consulta por repuestos específicos indicando modelo y marca de moto. El sistema valida el catálogo y entrega cotización exacta de inmediato.",
                },
                {
                    step: "02",
                    title: "Generación de Pago con Cashea o MercadoLibre",
                    tech: "Cashea API y MercadoLibre Webhooks",
                    desc: "Si el cliente elige pagar con financiamiento Cashea, el flujo genera el enlace directo de cobro mediante webhook y lo envía al chat en segundos.",
                },
                {
                    step: "03",
                    title: "Trazabilidad de Orden y Notificaciones DDS",
                    tech: "n8n DDS Status Orders Workflow",
                    desc: "Cada actualización de estado en el CRM de repuestos dispara un mensaje dinámico de WhatsApp informando al comprador en tiempo real.",
                },
                {
                    step: "04",
                    title: "Recuperación de Cotizaciones a las 24 Horas",
                    tech: "n8n Cron 24 Horas y Reactivación",
                    desc: "Si transcurren 24 horas sin confirmación de pago, el sistema contacta respetuosamente al comprador para ofrecer asistencia o canalizar asesoría técnica.",
                },
            ],
        },
        techStack: [
            { name: "n8n Self Hosted", category: "Orquestador de Procesos" },
            { name: "Cashea API", category: "Pasarela BNPL Venezuela" },
            { name: "WhatsApp Evolution API", category: "Canal de Mensajería" },
            { name: "MercadoLibre API", category: "Integración de Marketplace" },
            { name: "PostgreSQL CRM", category: "Gestión de Pedidos" },
            { name: "Google Gemini", category: "Asistente de Cotizaciones" },
        ],
        impact: {
            quote: "La automatización del enlace de Cashea y el recordatorio a las 24 horas convirtieron cotizaciones de repuestos en compras cerradas todos los días, sin que el equipo tuviera que hacer llamadas manuales.",
            author: "Evaluación Operativa · Venta de Repuestos de Moto",
            achievements: [
                "Automatización completa del procesamiento de cobros con financiamiento Cashea.",
                "Recuperación del 28% de cotizaciones pendientes gracias al seguimiento de 24 horas.",
                "Reducción del 90% en mensajes preguntando por el despacho de sus repuestos gracias a las notificaciones DDS.",
                "Reportes periódicos automáticos de ventas enviados directamente a gerencia por WhatsApp.",
            ],
        },
        confidentialityNote: "Aviso de Confidencialidad y NDA: Proyecto desarrollado bajo contrato de confidencialidad comercial para venta de repuestos de motos. El nombre de la marca, claves de API y listas privadas de clientes han sido anonimizados.",
    },
    {
        id: "sapiens-web-ecosystem",
        number: "04",
        badge: "Plataforma Base & Frontend · Producción",
        title: "Ecosistema Web Sapiens IA & SmartWebs",
        subtitle: "SmartWebs de Alta Conversión en Next.js 16 con Agentes Embebidos y Cumplimiento Meta Tech Provider",
        rating: "Puntuación Técnica: 9.8/10",
        gallery: [
            {
                id: "web-sapiens",
                title: "Arquitectura Web Sapiens IA",
                src: "/banner-leo-ytriago.jpg",
                alt: "Arquitectura y Marca Sapiens IA",
                caption: "Plataforma institucional de ingeniería en Next.js 16: Despliegue en VPS Dokploy, contenedores Docker y cumplimiento riguroso de Meta Tech Provider.",
            },
            {
                id: "banner-nda-seguridad",
                title: "Aviso de Confidencialidad & Blindaje NDA",
                src: "/banner-confidencialidad-pro.jpg",
                alt: "Blindaje de Confidencialidad y NDA de Sapiens IA",
                caption: "Estándar de ciberseguridad y protección de propiedad intelectual: Resguardo estricto de secretos comerciales, bases de datos Supabase RLS y anonimización de marcas corporativas.",
            },
        ],
        metrics: [
            { label: "Framework", value: "Next.js 16", detail: "App Router, React 19 y Turbopack" },
            { label: "Core Web Vitals", value: "95+ Score", detail: "Generación estática SSG ultra rápida" },
            { label: "Infraestructura", value: "Dokploy y Docker", detail: "VPS independiente con Cloudflare" },
            { label: "Cumplimiento Meta", value: "100% NAP", detail: "Razón social y políticas rigurosas" },
        ],
        problem: {
            title: "El Desafío de Credibilidad y Conversión Web",
            description: "Las plataformas de agencias tradicionales sufren de tiempos de carga lentos, diseños genéricos basados en plantillas de WordPress y falta de cumplimiento legal con Meta (Facebook y WhatsApp Platform), lo que arriesga el rechazo o bloqueo de APIs de WhatsApp Cloud de clientes corporativos.",
            painPoints: [
                "Sitios web lentos que aumentan la tasa de rebote por encima del 70%.",
                "Rechazos de Meta for Developers por falta de consistencia en Nombre, Dirección y Teléfono (NAP).",
                "Ausencia de interactividad en tiempo real (SmartWebs) con agentes de IA.",
                "Altos costos y dependencia de plataformas propietarias cerradas.",
            ],
        },
        architecture: {
            title: "Solución de Ingeniería Frontend & Despliegue",
            description: "Arquitectura web moderna en Next.js 16 (App Router) con estilos Tailwind CSS v4, animaciones fluidas con Framer Motion, diseño Dark Luxury UI (#080f1e, #10b981) y pre renderizado SSG para indexación inmediata de Meta y Google.",
            highlights: [
                {
                    label: "Next.js 16 & React 19",
                    desc: "Separación estricta entre Server Components pre renderizados y Client Components interactivos para maximizar Core Web Vitals.",
                    icon: "Zap",
                },
                {
                    label: "Cumplimiento Regulatorio Meta Tech Provider",
                    desc: "Páginas legales explícitas (/privacidad, /terminos, /eliminacion de datos) con datos del titular SENIAT RIF V-17741920-2 y domicilio verificado.",
                    icon: "ShieldCheck",
                },
                {
                    label: "Despliegue Continuo con Dokploy & Docker",
                    desc: "Pipeline de CI/CD conectado a GitHub con construcción automática en VPS, proxy inverso y certificados SSL gestionados en Cloudflare.",
                    icon: "Server",
                },
                {
                    label: "Diseño Bioluminiscente & Glassmorphism",
                    desc: "Identidad visual de alto impacto con acentos esmeralda (#10b981), líneas bio luminosas y paleta oscura de alta gama.",
                    icon: "Eye",
                },
            ],
            workflowSteps: [
                {
                    step: "01",
                    title: "Diseño UI y UX Dark Luxury",
                    tech: "Figma, Tailwind CSS v4 y Framer Motion",
                    desc: "Estructuración de componentes modulares, contrastes de alta accesibilidad y micro interacciones fluidas.",
                },
                {
                    step: "02",
                    title: "Pre renderizado Estático (SSG)",
                    tech: "Next.js App Router (Turbopack)",
                    desc: "Todas las rutas clave se generan en build time, garantizando respuestas HTTP 200 inmediatas para los rastreadores web.",
                },
                {
                    step: "03",
                    title: "Integración de Agente Interactivo",
                    tech: "API Routes y Streaming de Respuestas",
                    desc: "Componentes reactivos que permiten a los prospectos interactuar directamente con la propuesta de valor sin fricciones.",
                },
                {
                    step: "04",
                    title: "Publicación Automatizada en Dokploy",
                    tech: "Git Webhook y Contenedor Docker",
                    desc: "Despliegue sin tiempo de inactividad supervisado directamente en el VPS administrado por Leonardo Ytriago.",
                },
            ],
        },
        techStack: [
            { name: "Next.js 16", category: "Framework Fullstack" },
            { name: "React 19 & TypeScript", category: "Lógica de UI" },
            { name: "Tailwind CSS v4", category: "Sistema de Diseño" },
            { name: "Framer Motion", category: "Micro animaciones" },
            { name: "Dokploy & Docker", category: "DevOps & Despliegue" },
            { name: "Cloudflare", category: "DNS & Seguridad Edge" },
        ],
        impact: {
            quote: "Un sitio web no es un folleto digital: es un motor comercial y la tarjeta de presentación de ingeniería para validar tu infraestructura técnica ante clientes y plataformas internacionales.",
            author: "Leonardo Ytriago · Visión de Desarrollo",
            achievements: [
                "Tiempos de carga iniciales menores a 0.8 segundos con pre renderizado estático.",
                "Cumplimiento del 100% de los requisitos de verificación comercial y Meta Tech Provider.",
                "Ecosistema web unificado bajo el dominio institucional leoytriagoia.dev.",
                "Desarrollo totalmente propio de la agencia Sapiens IA.",
            ],
        },
        confidentialityNote: "Proyecto público y oficial de Sapiens IA, visible en producción en https://leoytriagoia.dev.",
    },
];

export default function PortfolioCaseStudy() {
    const [selectedCase, setSelectedCase] = useState<string>("clinica-medica");
    const [activeTab, setActiveTab] = useState<"architecture" | "workflow" | "impact">("architecture");
    const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
    const [lightbox, setLightbox] = useState<{ isOpen: boolean; imageIndex: number } | null>(null);
    const [zoomLevel, setZoomLevel] = useState<number>(1);

    const currentCase = caseStudiesList.find((c) => c.id === selectedCase) || caseStudiesList[0];
    const currentGallery = currentCase.gallery || [];
    const activeImage = currentGallery[activeGalleryIndex] || currentGallery[0];

    // Reset active gallery index when changing case
    const handleCaseChange = (caseId: string) => {
        setSelectedCase(caseId);
        setActiveTab("architecture");
        setActiveGalleryIndex(0);
        setZoomLevel(1);
    };

    // Close lightbox on Escape key & handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setLightbox(null);
                setZoomLevel(1);
            }
            if (lightbox?.isOpen) {
                if (e.key === "ArrowRight") {
                    setLightbox((prev) => prev ? {
                        ...prev,
                        imageIndex: (prev.imageIndex + 1) % currentGallery.length
                    } : null);
                    setZoomLevel(1);
                }
                if (e.key === "ArrowLeft") {
                    setLightbox((prev) => prev ? {
                        ...prev,
                        imageIndex: (prev.imageIndex - 1 + currentGallery.length) % currentGallery.length
                    } : null);
                    setZoomLevel(1);
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightbox, currentGallery.length]);

    const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
    const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    const handleZoomReset = () => setZoomLevel(1);

    return (
        <div className="space-y-12">
            {/* Case Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 rounded-2xl bg-slate-900/80 border border-emerald-500/20 max-w-5xl mx-auto shadow-xl">
                {caseStudiesList.map((item) => {
                    const isSelected = selectedCase === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleCaseChange(item.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                isSelected
                                    ? "bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                                    : "text-slate-300 hover:text-white hover:bg-emerald-500/10"
                            }`}
                        >
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                isSelected ? "bg-slate-950/20 text-slate-950" : "bg-emerald-500/15 text-emerald-400"
                            }`}>
                                {item.number}
                            </span>
                            <span className="truncate">{item.title.split(":")[0]}</span>
                        </button>
                    );
                })}
            </div>

            {/* Active Case Study Details */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentCase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass glass-hover rounded-3xl p-6 md:p-10 border border-emerald-500/25 relative overflow-hidden shadow-2xl shadow-black/50"
                >
                    {/* Top Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

                    {/* Header info */}
                    <div className="relative z-10 mb-8 border-b border-white/5 pb-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 tracking-wide uppercase">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                {currentCase.badge}
                            </span>
                            <span className="text-xs font-medium text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-white/5">
                                {currentCase.rating}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight [text-wrap:balance]">
                            {currentCase.title}
                        </h3>
                        <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-4xl [text-wrap:pretty]">
                            {currentCase.subtitle}
                        </p>
                    </div>

                    {/* MULTI-SCREENSHOT GALLERY HUB */}
                    {currentGallery.length > 0 && (
                        <div className="mb-10 space-y-3">
                            {/* Gallery Tab Switcher */}
                            <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-1">
                                        <Activity size={14} className="text-emerald-400" />
                                        <span>Capturas del Sistema:</span>
                                    </span>
                                    {currentGallery.map((imgItem, idx) => {
                                        const isImgActive = activeGalleryIndex === idx;
                                        return (
                                            <button
                                                key={imgItem.id}
                                                onClick={() => {
                                                    setActiveGalleryIndex(idx);
                                                    setZoomLevel(1);
                                                }}
                                                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 border ${
                                                    isImgActive
                                                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                                                        : "bg-slate-900/80 border-white/10 text-slate-400 hover:text-white hover:border-emerald-500/30"
                                                }`}
                                            >
                                                {imgItem.title}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={() => setLightbox({ isOpen: true, imageIndex: activeGalleryIndex })}
                                    className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 ml-auto"
                                >
                                    <ZoomIn size={14} />
                                    <span>Inspeccionar en Alta Resolución</span>
                                </button>
                            </div>

                            {/* Main Preview Container */}
                            <div className="rounded-2xl overflow-hidden border border-emerald-500/25 bg-slate-950/90 shadow-2xl group relative">
                                <div className="p-3 bg-slate-900/90 border-b border-white/5 flex items-center justify-between text-xs">
                                    <span className="text-emerald-400 font-mono flex items-center gap-2 font-semibold">
                                        <Sparkles size={13} className="text-emerald-400" />
                                        <span>{activeImage.title}</span>
                                    </span>
                                    <span className="text-[11px] text-slate-400">
                                        Imagen {activeGalleryIndex + 1} de {currentGallery.length}
                                    </span>
                                </div>

                                <div 
                                    className="relative cursor-pointer max-h-[420px] overflow-hidden flex items-center justify-center bg-slate-950"
                                    onClick={() => setLightbox({ isOpen: true, imageIndex: activeGalleryIndex })}
                                >
                                    <img
                                        src={activeImage.src}
                                        alt={activeImage.alt}
                                        className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]">
                                        <Maximize2 size={18} className="text-emerald-400" />
                                        <span>Click para ampliar y leer detalles de nodos</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-950 border-t border-white/5 text-xs text-slate-300 [text-wrap:pretty]">
                                    {activeImage.caption}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Key Metrics Banner */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {currentCase.metrics.map((m, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-2xl bg-slate-950/60 border border-emerald-500/15 flex flex-col justify-between"
                            >
                                <span className="text-xs text-slate-400 font-medium mb-1">{m.label}</span>
                                <span className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">{m.value}</span>
                                <span className="text-[11px] text-slate-500 leading-tight">{m.detail}</span>
                            </div>
                        ))}
                    </div>

                    {/* Sub Tabs: Arquitectura / Flujo Paso a Paso / Impacto */}
                    <div className="flex items-center gap-3 border-b border-white/10 mb-8 pb-3 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab("architecture")}
                            className={`flex items-center gap-2 text-sm font-semibold pb-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
                                activeTab === "architecture"
                                    ? "border-emerald-400 text-emerald-400"
                                    : "border-transparent text-slate-400 hover:text-slate-200"
                            }`}
                        >
                            <Layers size={16} />
                            <span>Arquitectura & Componentes</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("workflow")}
                            className={`flex items-center gap-2 text-sm font-semibold pb-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
                                activeTab === "workflow"
                                    ? "border-emerald-400 text-emerald-400"
                                    : "border-transparent text-slate-400 hover:text-slate-200"
                            }`}
                        >
                            <Activity size={16} />
                            <span>Flujo de Ejecución (Paso a Paso)</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("impact")}
                            className={`flex items-center gap-2 text-sm font-semibold pb-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
                                activeTab === "impact"
                                    ? "border-emerald-400 text-emerald-400"
                                    : "border-transparent text-slate-400 hover:text-slate-200"
                            }`}
                        >
                            <CheckCircle2 size={16} />
                            <span>Resultados & Métricas</span>
                        </button>
                    </div>

                    {/* Tab 1: Arquitectura */}
                    {activeTab === "architecture" && (
                        <div className="space-y-8">
                            {/* Problem Context */}
                            <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                                    {currentCase.problem.title}
                                </h4>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4 [text-wrap:pretty]">
                                    {currentCase.problem.description}
                                </p>
                                <div className="grid md:grid-cols-2 gap-2.5">
                                    {currentCase.problem.painPoints.map((point, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-400">
                                            <span className="text-rose-400 shrink-0 font-bold">✕</span>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solution Highlights */}
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    Pilares Técnicos de la Solución
                                </h4>
                                <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed [text-wrap:pretty]">
                                    {currentCase.architecture.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {currentCase.architecture.highlights.map((hl, idx) => (
                                        <div
                                            key={idx}
                                            className="p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/15 hover:border-emerald-500/35 transition-colors"
                                        >
                                            <div className="flex items-center gap-3 mb-2.5">
                                                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                                    <Zap size={16} />
                                                </div>
                                                <h5 className="font-semibold text-white text-sm md:text-base">{hl.label}</h5>
                                            </div>
                                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed [text-wrap:pretty]">
                                                {hl.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack Pills */}
                            <div>
                                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-3">
                                    Stack Tecnológico Implementado
                                </span>
                                <div className="flex flex-wrap gap-2.5">
                                    {currentCase.techStack.map((tech, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-xs"
                                        >
                                            <span className="text-white font-medium">{tech.name}</span>
                                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                                {tech.category}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Workflow Steps */}
                    {activeTab === "workflow" && (
                        <div className="space-y-4">
                            <p className="text-sm text-slate-400 mb-6 [text-wrap:pretty]">
                                Secuencia lógica de ejecución programada dentro de los workflows en n8n:
                            </p>
                            <div className="space-y-4">
                                {currentCase.architecture.workflowSteps.map((ws, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center font-bold text-emerald-400 shrink-0">
                                                {ws.step}
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h5 className="font-semibold text-white text-base">{ws.title}</h5>
                                                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                                                        {ws.tech}
                                                    </span>
                                                </div>
                                                <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-2xl [text-wrap:pretty]">
                                                    {ws.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="shrink-0 text-emerald-400/50 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all hidden md:block">
                                            <ChevronRight size={20} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Impact */}
                    {activeTab === "impact" && (
                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/25">
                                <blockquote className="text-base md:text-lg text-slate-200 font-light leading-relaxed mb-4 [text-wrap:pretty]">
                                    &ldquo;{currentCase.impact.quote}&rdquo;
                                </blockquote>
                                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                                    — {currentCase.impact.author}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                    Hitos Cuantitativos Verificados
                                </h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {currentCase.impact.achievements.map((ach, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3 text-sm text-slate-300"
                                        >
                                            <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                                            <span>{ach}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Confidentiality Footer Note */}
                    <div className="mt-10 pt-6 border-t border-white/5 flex items-start gap-3 text-xs text-slate-400">
                        <Lock size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <p className="leading-relaxed [text-wrap:pretty]">{currentCase.confidentialityNote}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* LIGHTBOX MODAL FOR FULL RESOLUTION INSPECTION */}
            <AnimatePresence>
                {lightbox && lightbox.isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
                        onClick={() => {
                            setLightbox(null);
                            setZoomLevel(1);
                        }}
                    >
                        <div 
                            className="relative max-w-7xl w-full bg-slate-950 border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="p-3 sm:p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white truncate">
                                    <Activity size={16} className="text-emerald-400 shrink-0" />
                                    <span className="truncate">{currentGallery[lightbox.imageIndex]?.title}</span>
                                    <span className="text-[11px] text-slate-400 hidden sm:inline">
                                        ({lightbox.imageIndex + 1}/{currentGallery.length})
                                    </span>
                                </div>

                                {/* Zoom & Navigation Controls */}
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        onClick={handleZoomIn}
                                        disabled={zoomLevel >= 3}
                                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                                        title="Acercar (Zoom In)"
                                        aria-label="Acercar imagen"
                                    >
                                        <ZoomIn size={16} />
                                    </button>
                                    <button
                                        onClick={handleZoomOut}
                                        disabled={zoomLevel <= 1}
                                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                                        title="Alejar (Zoom Out)"
                                        aria-label="Alejar imagen"
                                    >
                                        <ZoomOut size={16} />
                                    </button>
                                    <button
                                        onClick={handleZoomReset}
                                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-[11px] font-mono px-2"
                                        title="Restablecer tamaño (100%)"
                                        aria-label="Restablecer tamaño"
                                    >
                                        <span className="flex items-center gap-1">
                                            <RotateCcw size={13} />
                                            <span>{Math.round(zoomLevel * 100)}%</span>
                                        </span>
                                    </button>

                                    {currentGallery.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setLightbox((prev) => prev ? {
                                                        ...prev,
                                                        imageIndex: (prev.imageIndex - 1 + currentGallery.length) % currentGallery.length
                                                    } : null);
                                                    setZoomLevel(1);
                                                }}
                                                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-1"
                                                title="Imagen anterior"
                                                aria-label="Imagen anterior"
                                            >
                                                <ChevronLeft size={16} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setLightbox((prev) => prev ? {
                                                        ...prev,
                                                        imageIndex: (prev.imageIndex + 1) % currentGallery.length
                                                    } : null);
                                                    setZoomLevel(1);
                                                }}
                                                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                                                title="Siguiente imagen"
                                                aria-label="Siguiente imagen"
                                            >
                                                <ChevronRight size={16} />
                                            </button>
                                        </>
                                    )}

                                    <button
                                        onClick={() => {
                                            setLightbox(null);
                                            setZoomLevel(1);
                                        }}
                                        className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 hover:text-white hover:bg-rose-500/40 transition-colors ml-2"
                                        aria-label="Cerrar modal"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Image Body with Pan & Zoom */}
                            <div className="overflow-auto p-4 flex items-center justify-center bg-black/80 flex-1 min-h-[50vh] max-h-[72vh]">
                                <div 
                                    className="transition-transform duration-200 flex items-center justify-center"
                                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
                                >
                                    <img
                                        src={currentGallery[lightbox.imageIndex]?.src}
                                        alt={currentGallery[lightbox.imageIndex]?.alt}
                                        className="max-w-full h-auto max-h-[68vh] object-contain rounded-lg shadow-2xl"
                                        style={{ imageRendering: "auto" }}
                                    />
                                </div>
                            </div>

                            {/* Modal Caption */}
                            <div className="p-3.5 bg-slate-900 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between gap-4">
                                <p className="leading-relaxed [text-wrap:pretty]">
                                    {currentGallery[lightbox.imageIndex]?.caption}
                                </p>
                                <span className="text-[11px] font-mono text-emerald-400 shrink-0">
                                    Presiona Esc para cerrar o flechas para navegar
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
