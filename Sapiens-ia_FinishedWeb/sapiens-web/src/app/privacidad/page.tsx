import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Política de Privacidad | Sapiens IA",
    description: "Política de privacidad y directivas de tratamiento de datos personales y mensajería de WhatsApp Business API de Sapiens IA.",
};

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[#080f1e] text-slate-300">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 border-b border-emerald-500/20 pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Shield size={14} />
                        <span>Transparencia & Cumplimiento</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                        Política de Privacidad y Tratamiento de Datos
                    </h1>
                    <p className="text-sm text-slate-400">
                        Última actualización: <strong>25 de septiembre de 2026</strong> · Vigente para todos los servicios de Sapiens IA.
                    </p>
                </div>

                <div className="space-y-10 text-sm md:text-base leading-relaxed">
                    {/* 1. Responsable */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">1.</span> Responsable del Tratamiento
                        </h2>
                        <p>
                            El responsable del tratamiento de los datos personales recopilados a través de este sitio web y de las soluciones de software y automatizaciones es <strong>Leonardo José Ytriago Manrriquez</strong> (en adelante, <strong>&ldquo;Sapiens IA&rdquo;</strong> o <strong>&ldquo;el Responsable&rdquo;</strong>), titular del Registro de Información Fiscal (RIF) N° <strong>V-17741920-2</strong>, con domicilio fiscal en Calle San Miguel Casa Nro 12-2, Sector San Miguel, Valle de la Pascua, Estado Guárico, Código Postal 2350, República Bolivariana de Venezuela.
                        </p>
                        <p>
                            Correo electrónico de contacto directo y oficial: <a href="mailto:contacto@leoytriagoia.dev" className="text-emerald-400 underline underline-offset-4">contacto@leoytriagoia.dev</a>.
                        </p>
                    </section>

                    {/* 2. Alcance y Servicios */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">2.</span> Alcance de Nuestros Servicios
                        </h2>
                        <p>
                            Sapiens IA es una firma tecnológica especializada en el diseño y despliegue de:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-400">
                            <li>Sitios web inteligentes (SmartWebs) de alta conversión.</li>
                            <li>Sistemas de CRM e infraestructura de datos para sectores médico, estético y empresarial.</li>
                            <li>Agentes de Inteligencia Artificial conversacionales integrados a canales omnicanal (WhatsApp, Instagram, Web).</li>
                            <li>Conexión, sincronización y orquestación con la plataforma <strong>WhatsApp Business Cloud API</strong> de Meta Platforms, Inc.</li>
                        </ul>
                    </section>

                    {/* 3. Datos recopilados */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">3.</span> Datos Objeto de Tratamiento
                        </h2>
                        <p>
                            Dependiendo del nivel de interacción del usuario o cliente, podemos procesar las siguientes categorías de datos:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
                                <h3 className="font-semibold text-white flex items-center gap-2">
                                    <Lock size={16} className="text-emerald-400" />
                                    <span>Datos Comerciales y de Contacto</span>
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Nombres, apellidos, número de teléfono (WhatsApp), correo electrónico, nombre de la empresa y requerimientos técnicos suministrados voluntariamente al agendar auditorías o solicitar presupuestos.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
                                <h3 className="font-semibold text-white flex items-center gap-2">
                                    <FileText size={16} className="text-emerald-400" />
                                    <span>Datos de Mensajería WhatsApp API</span>
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Identificadores de cuenta de WhatsApp Business (WABA ID), ID de número de teléfono, números de los remitentes y destinatarios, contenido de los mensajes transaccionales, marcas de tiempo y estados de entrega (enviado, entregado, leído).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. WhatsApp Cloud API y Meta Platforms */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">4.</span> Tratamiento Especial: WhatsApp Business Platform (Meta)
                        </h2>
                        <p>
                            Para la provisión de canales oficiales de mensajería, Sapiens IA utiliza la <strong>WhatsApp Cloud API</strong> proporcionada por Meta Platforms, Inc. En el marco de estas integraciones:
                        </p>
                        <div className="space-y-2 pl-4 border-l-2 border-emerald-500/40 text-slate-300">
                            <p>
                                <strong>a) Seguridad en Tránsito y Reposo:</strong> Todas las llamadas hacia la API Graph de Meta se realizan mediante protocolos seguros HTTPS/TLS con cifrado de extremo a extremo entre los servidores y los endpoints de Meta.
                            </p>
                            <p>
                                <strong>b) Consentimiento del Usuario Final:</strong> Nuestros clientes empresariales son responsables de obtener el debido consentimiento previo (Opt-in) de sus clientes finales antes de iniciar comunicaciones salientes mediante plantillas de WhatsApp.
                            </p>
                            <p>
                                <strong>c) Estricto Cumplimiento de Políticas:</strong> Todas las operaciones están sujetas a la <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">Política de Mensajería de WhatsApp Business</a> y a las <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">Condiciones para Desarrolladores de Meta</a>.
                            </p>
                        </div>
                    </section>

                    {/* 5. Cláusula de NO venta de datos */}
                    <section className="space-y-3 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-emerald-400" />
                            <span>Compromiso de No Venta ni Cesión de Datos</span>
                        </h2>
                        <p className="text-slate-300 text-sm">
                            <strong>Sapiens IA NO vende, NO alquila, NO comercia ni transfiere datos personales o registros de conversaciones a terceros intermediarios de datos, corredores de información (*data brokers*) ni redes publicitarias externas.</strong> Los datos son procesados exclusivamente para la prestación del servicio técnico contratado y el funcionamiento de los agentes de IA.
                        </p>
                    </section>

                    {/* 6. Conservación de Datos */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">6.</span> Período de Conservación de Datos
                        </h2>
                        <p>
                            Los datos de contacto y registros de actividad se conservarán durante el tiempo estrictamente necesario para cumplir con las finalidades operativas descritas o mientras exista una relación contractual activa. Una vez finalizada la relación, los datos podrán ser retenidos únicamente durante los plazos legalmente exigibles para el cumplimiento de obligaciones tributarias o de prescripción de responsabilidades legales.
                        </p>
                    </section>

                    {/* 7. Derechos del Usuario y Eliminación */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">7.</span> Derechos ARCO y Mecanismo de Eliminación de Datos
                        </h2>
                        <p>
                            Cualquier usuario o cliente tiene derecho a acceder a sus datos personales, solicitar su rectificación en caso de inexactitud, oponerse al tratamiento, limitar el procesamiento o solicitar la <strong>eliminación total y definitiva</strong> de sus registros de nuestras bases de datos.
                        </p>
                        <p>
                            Para solicitar la eliminación de datos, puedes consultar el procedimiento detallado en nuestra página de <Link href="/eliminacion-de-datos" className="text-emerald-400 underline underline-offset-4 font-semibold">Instrucciones de Eliminación de Datos</Link> o enviar una solicitud por correo a <a href="mailto:contacto@leoytriagoia.dev" className="text-emerald-400 underline underline-offset-4">contacto@leoytriagoia.dev</a> indicando tu nombre y número de teléfono asociado. Las solicitudes se procesan en un plazo máximo de 48 horas hábiles.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
