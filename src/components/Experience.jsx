import FotoExp from "/src/assets/Experiencia.webp"

export default function Experience() {

    return (
        <article id="experience" className="px-4 text-center scroll-mt-28">
            <div className="flex items-center justify-center my-12">
                <div className="separator"></div>
                    <span className="separator-name">Experiencia</span>
                <div className="separator"></div>
            </div>
            <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0">
                    <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 text-center md:text-left flex flex-col justify-center gap-4">
                        <div className="space-y-2">
                            <h3 className="text-2xl sm:text-3xl font-bold">Desarrollador Full Stack</h3>
                            <p className="text-sm sm:text-base text-gray-200">Colegio Pierre Faure de Zamora, A,C.</p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm sm:text-base">
                            <span className="px-3 py-1 rounded-full bg-purple-900/60 border border-purple-400/30">Agosto - Diciembre 2025</span>
                            <span className="px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30">
                                <a
                                    href="https://pierrefaurezamora.edu.mx/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block"
                                >
                                    Ver sitio
                                </a>
                            </span>
                        </div>
                        <div className="space-y-2 text-sm sm:text-base text-gray-200">
                            <p>Rediseño, modernización e implementación de una plataforma para publicación de contenido académico (blog institucional) de extremo a extremo.</p>
                            <ul className="space-y-1 list-disc list-inside text-left md:list-outside md:pl-5">
                                <li>Maquetación y sistema de componentes optimizados para móvil y escritorio.</li>
                                <li>Automatización del flujo editorial (borrador, revisión y publicación).</li>
                                <li>Despliegue y documentación para que el equipo académico publique sin soporte técnico.</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs sm:text-sm">
                            {['React', 'Tailwind CSS', 'Python', 'MongoDB'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative overflow-hidden">
                        <img
                            src={FotoExp}
                            alt="Ilustración representando experiencia profesional"
                            className="w-full h-full object-cover md:h-full lg:h-full min-h-[240px] sm:min-h-[320px]"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </article>
    );
}
