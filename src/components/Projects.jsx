import { useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";

const repoImages = {
    EstefaniaCrea: "/assets/JynxCode.webp",
    ControlAgro25: "/assets/agroLogo.webp",
    "ControlAgro---Web": "/assets/ControlAgroWeb.webp",
    "Florist-Web": "/assets/FloristWeb.webp",
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
        <section id="projects" className="px-4 sm:px-8 text-center">
            <div className="flex items-center justify-center my-12">
                <div className="separator"></div>
                <span className="separator-name">Proyectos</span>
                <div className="separator"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
                <div className="p-4 sm:p-8 rounded-lg shadow-lg w-full sm:w-1/2 h-auto border border-white/10 bg-white/5">
                    <img 
                        src="/assets/logoTec.webp" 
                        alt="Proyectos" 
                        className="w-28 rounded-lg mb-4 bg-white object-cover mx-auto block"
                    />
                    <h2 className="text-white text-xl font-semibold text-center mb-2">Proyectos Académicos y Personales</h2>
                    <div className="w-24 h-[2px] bg-gray-400/30 mx-auto mb-4 rounded-full"></div>

                    <p className="text-gray-300 text-sm tracking-wide text-justify leading-relaxed">
                        Durante mi estancia en el 
                        <strong> Instituto Tecnológico de Estudios Superiores de Zamora</strong>, he participado en diversos proyectos
                        que reflejan tanto mi desarrollo académico como mi iniciativa personal.
                    </p>

                    <p className="text-gray-400 text-xs mt-4 text-justify">
                        Estos proyectos abarcan distintas áreas de programación, incluyendo desarrollo móvil, diseño de interfaces y 
                        soluciones web funcionales. Cada uno representa una etapa importante de mi aprendizaje y evolución como desarrollador.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 w-full sm:w-1/2">
                    {filteredRepos.map(repo => (
                        <ProjectBox 
                            key={repo.id} 
                            repo={repo} 
                            imageSrc={repoImages[repo.name]} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
