import { useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";
import FotoTec from "../assets/logoTec.webp";
import JynxImg from "../assets/JynxCode.webp";
import AgroImg from "../assets/agroLogo.webp";
import FloristImg from "../assets/FloristWeb.webp";
import AgroWebImg from "../assets/ControlAgroWeb.webp";

const repoImages = {
    EstefaniaCrea: JynxImg,
    ControlAgro25: AgroImg,
    "ControlAgro---Web": AgroWebImg,
    "Florist-Web": FloristImg,
};

export default function Projects() {
    const [repos, setRepos] = useState([]);
    const repoNames = [
        "EstefaniaCrea",
        "Florist-Web",
        "ControlAgro25",
        "ControlAgro---Web",
    ];

    useEffect(() => {
        fetch("https://api.github.com/users/SaidPR/repos")
            .then(res => res.json())
            .then(data => setRepos(data));
    }, []);

    const filteredRepos = repoNames
        .map(name => repos.find(repo => repo.name === name))
        .filter(Boolean);

    return (
        <section id="projects" className="px-4 sm:px-8 lg:px-16 py-12 text-center scroll-mt-28">
            <div className="flex items-center justify-center my-12">
                <div className="separator"></div>
                <span className="separator-name">Proyectos</span>
                <div className="separator"></div>
            </div>

            <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-stretch p-6 sm:p-10">
                    <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-black/20 shadow-lg h-full flex flex-col gap-4 text-left">
                        <div className="flex items-center gap-3">
                            <img 
                                src= {FotoTec} 
                                alt="Proyectos" 
                                className="w-20 h-20 rounded-xl bg-white object-cover shadow"
                            />
                            <div>
                                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-wide text-gray-200">Formación & Side Projects</span>
                                <h2 className="text-white text-xl sm:text-2xl font-semibold mt-2">Proyectos Académicos y Personales</h2>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Durante mi estancia en el <strong>Instituto Tecnológico de Estudios Superiores de Zamora</strong> he desarrollado soluciones que mezclan práctica académica con iniciativa personal.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Incluyen apps móviles, interfaces accesibles y plataformas web funcionales. Cada entrega refuerza mi experiencia end-to-end: ideación, diseño, desarrollo y despliegue.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-center text-sm text-white/90">Frontend</span>
                            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-center text-sm text-white/90">Backend</span>
                            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-center text-sm text-white/90">Móvil</span>
                            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-center text-sm text-white/90">UI/UX</span>
                            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-center text-sm text-white/90">APIs</span>
                            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-center text-sm text-white/90">DevOps básico</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {filteredRepos.map(repo => (
                            <ProjectBox 
                                key={repo.id} 
                                repo={repo} 
                                imageSrc={repoImages[repo.name]} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
