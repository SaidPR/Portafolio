import { useEffect, useState } from "react";

const repoImages = {
    EstefaniaCrea: "/assets/JynxCode.png",
    ControlAgro25: "/assets/agroLogo.webp",
    "ControlAgro---Web": "/assets/ControlAgroWeb.png",
    "Florist-Web": "/assets/FloristWeb.png",
};

export default function Projects() {
    const [repos, setRepos] = useState([]);
    const repoNames = [
        "EstefaniaCrea",         // 1º
        "Florist-Web",          // 2º
        "ControlAgro25",        // 3º
        "ControlAgro---Web",    // 4º
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
                <div className="w-full h-px bg-gray-600"></div>
                <span className="px-4 text-gray-300 text-sm uppercase tracking-widest">Proyectos</span>
                <div className="w-full h-px bg-gray-600"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                {filteredRepos.map(repo => (
                    <div key={repo.id} 
                        className="border border-gray-600 rounded-xl shadow-2xl p-8 flex flex-col items-center w-full max-w-xl transition-transform duration-300 hover:scale-102"
                        style={{background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)"}}>
                        <p className="text-2xl font-bold mt-1 mb-4 ">{repo.name}</p>
                        <img
                            src={repoImages[repo.name] || "/assets/default.png"}
                            alt={repo.name}
                            className="w-auto h-64 object-cover rounded-lg mb-4"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <p className="text-gray-400 font-medium mb-2">{repo.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {/* Badges de tecnologías para repositorios principales */}
                            {repo.name === "EstefaniaCrea" && (
                                <>
                                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="h-7" onContextMenu={(e) => e.preventDefault()}/>
                                    <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" className="h-7" onContextMenu={(e) => e.preventDefault()}/>
                                </>
                            )}
                            {repo.name === "ControlAgro25" && (
                                <>
                                    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" className="h-7" onContextMenu={(e) => e.preventDefault()}/>
                                    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" className="h-7" onContextMenu={(e) => e.preventDefault()}/>
                                </>
                            )}
                        </div>
                        <div className="flex gap-4 mb-2">
                            {/* Badge de página web para repositorios específicos */}
                            {repo.name === "ControlAgro---Web" && (
                                <a href="https://control-agro-web.vercel.app/" className="transition-transform duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/Sitio%20Web-1976D2?style=for-the-badge&logo=google-chrome&logoColor=white"
                                        alt="Sitio Web ControlAgro" className="inline-block h-8" />
                                </a>
                            )}
                            {repo.name === "Florist-Web" && (
                                <a href="https://saidpr.github.io/Florist-Web/" className="transition-transform duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/Sitio%20Web-1976D2?style=for-the-badge&logo=google-chrome&logoColor=white"
                                        alt="Sitio Web EstefaniaCrea" className="inline-block h-8" />
                                </a>
                            )}
                            <a href={repo.html_url} className="transition-transform duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                                    alt="GitHub" className="inline-block h-8" 
                                />
                            </a>
                        </div>
                        {repo.name === "ControlAgro---Web" && (
                            <p className="text-green-400 text-sm">¡Visita el sitio web de ControlAgro para ver el proyecto en acción!</p>
                        )}
                        {repo.name === "Florist-Web" && (
                            <p className="text-blue-400 text-sm">¡Explora el sitio web de EstefaniaCrea y conoce más!</p>
                        )}
                    </div>
                ))}
            </div>
            
        </section>
    );
}