import { Metadata } from "next";
import Link from "next/link";
import { Trash2, Mail, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Instrucciones de Eliminación de Datos de Usuario | Sapiens IA",
    description: "Guía paso a paso para solicitar la supresión y eliminación definitiva de datos personales y registros de mensajería en las plataformas de Sapiens IA.",
};

export default function EliminacionDatosPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[#080f1e] text-slate-300">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 border-b border-emerald-500/20 pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Trash2 size={14} />
                        <span>Control de Privacidad del Usuario</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                        Instrucciones para la Eliminación de Datos de Usuario
                    </h1>
                    <p className="text-sm text-slate-400">
                        Conforme a las Políticas de la Plataforma de Meta y las directivas de protección de datos, cualquier usuario o cliente puede solicitar la purga de su información personal.
                    </p>
                </div>

                <div className="space-y-10 text-sm md:text-base leading-relaxed">
                    {/* Intro */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">1.</span> Compromiso con la Soberanía de Datos
                        </h2>
                        <p>
                            En <strong>Sapiens IA</strong> (operado por <strong>Leonardo José Ytriago Manrriquez</strong>, RIF: V-17741920-2), respetamos el derecho fundamental de los usuarios y clientes a decidir sobre el destino de su información. No retenemos datos personales innecesarios ni impedimos su supresión.
                        </p>
                    </section>

                    {/* Qué datos se eliminan */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">2.</span> ¿Qué Datos son Suprimidos al Procesar la Solicitud?
                        </h2>
                        <p>
                            Al ejecutar una orden de eliminación de datos, nuestro sistema borra de forma permanente e irreversible:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
                                <h3 className="font-semibold text-white text-sm">Registros de Conversación</h3>
                                <p className="text-xs text-slate-400">
                                    Historiales de mensajes enviados y recibidos a través de la WhatsApp Cloud API y canales web.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
                                <h3 className="font-semibold text-white text-sm">Archivos Multimedia</h3>
                                <p className="text-xs text-slate-400">
                                    Imágenes, audios de voz (opus), documentos PDF y videos transmitidos en las sesiones de chat.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
                                <h3 className="font-semibold text-white text-sm">Identificadores y Perfiles</h3>
                                <p className="text-xs text-slate-400">
                                    Números telefónicos, nombres de contacto, correos electrónicos y metadatos asociados en el CRM.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Paso a paso */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400">3.</span> Procedimiento Paso a Paso para Solicitar la Eliminación
                        </h2>
                        <div className="space-y-3">
                            <div className="p-4 rounded-xl bg-slate-900/40 border border-emerald-500/20 flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-sm">Enviar Solicitud Formal por Correo</h4>
                                    <p className="text-xs md:text-sm text-slate-400 mt-1">
                                        Redacta un correo electrónico dirigido a <a href="mailto:contacto@leoytriagoia.dev" className="text-emerald-400 underline font-medium">contacto@leoytriagoia.dev</a> con el asunto: <code>Solicitud de Eliminación de Datos - [Tu Nombre o Empresa]</code>.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/40 border border-emerald-500/20 flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-sm">Indicar Identificadores a Eliminar</h4>
                                    <p className="text-xs md:text-sm text-slate-400 mt-1">
                                        Indica claramente el número de teléfono (en formato internacional, ej. <code>+58...</code>) o dirección de correo electrónico cuyos registros deseas purgar del sistema.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/40 border border-emerald-500/20 flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-sm">Procesamiento y Confirmación</h4>
                                    <p className="text-xs md:text-sm text-slate-400 mt-1">
                                        Nuestro equipo técnico procesará la orden en un lapso no mayor a <strong>48 horas hábiles</strong> y te responderá con un código de confirmación de purga exitosa de base de datos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Eliminación desde la app de Facebook */}
                    <section className="space-y-3 p-5 rounded-2xl bg-slate-900/60 border border-white/10">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <ShieldAlert size={18} className="text-emerald-400" />
                            <span>Eliminación a través de la Configuración de Facebook / Meta</span>
                        </h2>
                        <p className="text-xs md:text-sm text-slate-300">
                            Si utilizaste Facebook Login for Business para autorizar el acceso a tu cuenta comercial de WhatsApp (WABA), también puedes revocar los permisos de nuestra aplicación en cualquier momento directamente desde tu cuenta de Meta:
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs md:text-sm text-slate-400">
                            <li>Ingresa a tu cuenta de Facebook y dirígete a <strong>Configuración y privacidad &gt; Configuración</strong>.</li>
                            <li>En el menú lateral, selecciona <strong>Apps y sitios web</strong> o <strong>Integraciones comerciales</strong>.</li>
                            <li>Localiza la aplicación autorizada de <strong>Sapiens IA / Leoia App</strong> y haz clic en <strong>Eliminar</strong>.</li>
                        </ol>
                    </section>

                    {/* Footer de sección */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                        <p>¿Dudas sobre el tratamiento de tus datos?</p>
                        <Link href="/privacidad" className="text-emerald-400 hover:underline">
                            Consultar Política de Privacidad completa &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
