import { Metadata } from "next";
import Link from "next/link";
import { FileCheck, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Términos y Condiciones de Servicio | Sapiens IA",
    description: "Términos y condiciones legales que regulan el uso de los servicios de desarrollo web, CRM, automatizaciones y agentes de IA de Sapiens IA.",
};

export default function TerminosPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[#080f1e] text-slate-300">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 border-b border-emerald-500/20 pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <FileCheck size={14} />
                        <span>Marco Contractual</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                        Términos y Condiciones de Servicio
                    </h1>
                    <p className="text-sm text-slate-400">
                        Última actualización: <strong>25 de septiembre de 2026</strong> · Aplicable a clientes y usuarios de Sapiens IA.
                    </p>
                </div>

                <div className="space-y-10 text-sm md:text-base leading-relaxed">
                    {/* 1. Objeto del Acuerdo */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">1.</span> Objeto y Aceptación
                        </h2>
                        <p>
                            El presente documento establece los Términos y Condiciones Generales que regulan la contratación y uso de las soluciones de software, plataformas CRM, SmartWebs, integraciones de API y agentes de inteligencia artificial suministrados por <strong>Leonardo José Ytriago Manrriquez</strong> (en adelante, <strong>&ldquo;Sapiens IA&rdquo;</strong>), titular del RIF N° <strong>V-17741920-2</strong>, con domicilio fiscal en Valle de la Pascua, Estado Guárico, Venezuela.
                        </p>
                        <p>
                            La contratación de cualquiera de nuestros servicios implica la aceptación plena e incondicional de los presentes Términos, así como de nuestra <Link href="/privacidad" className="text-emerald-400 underline underline-offset-4">Política de Privacidad</Link>.
                        </p>
                    </section>

                    {/* 2. Descripción de los Servicios */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">2.</span> Descripción de los Servicios
                        </h2>
                        <p>
                            Sapiens IA proporciona infraestructura tecnológica avanzada que incluye, pero no se limita a:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-400">
                            <li><strong>Desarrollo de SmartWebs:</strong> Sitios web corporativos de alta velocidad, optimizados para conversión y posicionamiento orgánico.</li>
                            <li><strong>Sistemas CRM Personalizados:</strong> Paneles de gestión comercial, pipelines de ventas, módulos de citas y gestión de contactos desplegados en infraestructuras aisladas o dedicadas.</li>
                            <li><strong>Agentes de IA y Orquestación:</strong> Configuración de flujos automatizados con modelos de lenguaje de vanguardia (Google Gemini, Claude, OpenAI) y orquestadores tipo n8n.</li>
                            <li><strong>Integraciones de Mensajería:</strong> Conexión de cuentas empresariales con la plataforma oficial <strong>WhatsApp Business Cloud API</strong> de Meta Platforms, Inc.</li>
                        </ul>
                    </section>

                    {/* 3. Política de Uso Aceptable y WhatsApp */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">3.</span> Uso Aceptable y Cumplimiento con WhatsApp
                        </h2>
                        <p>
                            El Cliente se compromete a hacer un uso legítimo y ético de las herramientas facilitadas. En particular, para el canal de WhatsApp:
                        </p>
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20 space-y-2 text-xs md:text-sm text-slate-300">
                            <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                                <AlertTriangle size={16} />
                                <span>Prohibición Expresa de Spam y Mensajería Masiva no Solicitada</span>
                            </div>
                            <p>
                                Queda terminantemente prohibido utilizar las soluciones de Sapiens IA para el envío de spam, comunicaciones no autorizadas, esquemas piramidales, productos no regulados o cualquier actividad que contravenga la <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">Política de Mensajería de WhatsApp Business</a>.
                            </p>
                            <p>
                                El Cliente es el único responsable de recabar y conservar la prueba del consentimiento previo (Opt-in) de los destinatarios. Cualquier baneo o restricción de número impuesto por Meta derivado de malas prácticas del Cliente no generará responsabilidad para Sapiens IA.
                            </p>
                        </div>
                    </section>

                    {/* 4. Propiedad Intelectual */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">4.</span> Propiedad Intelectual
                        </h2>
                        <p>
                            Los códigos fuente base, librerías propietarias, arquitecturas de agentes, prompts de orquestación y marcas registradas asociadas a Sapiens IA son de propiedad exclusiva de Leonardo José Ytriago Manrriquez. El Cliente recibe una licencia de uso no exclusiva, intransferible y revocable para la operación de su plataforma contratada.
                        </p>
                        <p>
                            El contenido, logotipos, bases de datos de clientes y activos digitales suministrados por el Cliente pertenecen a este último en todo momento.
                        </p>
                    </section>

                    {/* 5. Limitación de Responsabilidad y APIs de Terceros */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">5.</span> Servicios y APIs de Terceros
                        </h2>
                        <p>
                            Nuestras soluciones interoperan con proveedores globales de nube y telecomunicaciones (Meta Platforms, Supabase, Vercel, Docker, proveedores de modelos de lenguaje). Sapiens IA realiza los mejores esfuerzos para asegurar una alta disponibilidad, pero no será responsable por interrupciones de servicio, variaciones tarifarias o caídas imputables directamente a dichos proveedores externos.
                        </p>
                    </section>

                    {/* 6. Tarifas y Facturación de Conversaciones */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">6.</span> Costes de Mensajería de Meta
                        </h2>
                        <p>
                            Los honorarios de Sapiens IA corresponden al desarrollo, mantenimiento, despliegue y soporte de las plataformas tecnológicas. Los costes derivados del consumo de mensajes de la WhatsApp Business Platform (conversaciones de marketing, autenticación, utilidad o servicio) son facturados y cobrados directamente por Meta Platforms, Inc. al método de pago registrado por el Cliente en su Meta Business Manager.
                        </p>
                    </section>

                    {/* 7. Ley Aplicable y Jurisdicción */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">7.</span> Ley Aplicable y Resolución de Disputas
                        </h2>
                        <p>
                            Estos Términos se rigen e interpretan de acuerdo con las leyes vigentes de la República Bolivariana de Venezuela. Cualquier controversia derivada del cumplimiento o interpretación del presente contrato será sometida a los tribunales competentes de la jurisdicción del domicilio fiscal del prestador del servicio en el Estado Guárico, Venezuela.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
