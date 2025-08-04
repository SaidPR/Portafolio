export default function ProjectBox({ repo, imageSrc }) {
    const techsByRepo = {
        "EstefaniaCrea": ["Python", "SQLite", "Tkinter"],
        "ControlAgro25": ["React Native", "Firebase", "Expo"],
    };

    const tagClass = "px-2 py-0.5 bg-white/10 rounded cursor-pointer text-sm font-medium text-gray-400 hover:bg-white/20 hover:text-white transition";

    return (
        <div className="div-pbox">
            <img
                src={imageSrc || "/assets/default.png"}
                alt={repo.name}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                onContextMenu={(e) => e.preventDefault()}
            />

            <div className="flex flex-col justify-between flex-grow text-left">
                <h3 className="text-lg font-semibold text-white mb-1">{repo.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{repo.description}</p>

                    <div className="flex flex-wrap gap-3 mb-2">
                        {(techsByRepo[repo.name] || []).map(tech => (
                            <span key={tech} className={tagClass}>
                                {tech}
                            </span>
                        ))}
                        <div className="flex gap-3 items-center">
                        {(repo.name === "ControlAgro---Web" || repo.name === "Florist-Web") && (
                            <a
                                href={
                                    repo.name === "ControlAgro---Web"
                                    ? "https://control-agro-web.vercel.app/"
                                    : "https://saidpr.github.io/Florist-Web/"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className={tagClass}
                            >
                                Sitio Web
                            </a>
                        )}
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={tagClass}
                        >
                            GitHub
                        </a>
                        
                    </div>
                </div>               
            </div>
        </div>
    );
}
