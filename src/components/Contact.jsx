export default function Contact(){
    return(
        <section id="contact" className="px-4 sm:px-8 text-center">
            <div className="flex items-center justify-center my-12">
                <div className="separator"></div>
                <span className="separator-name">Contacto</span>
                <div className="separator"></div>
            </div>
            <h1 className="font-extrabold text-3xl text-gray-100 mb-4 drop-shadow-lg">¡Gracias por visitar mi portafolio!</h1>
            <p className="text-lg text-gray-300 mb-6">Si deseas ponerte en contacto conmigo puedes hacerlo por medio de las siguientes plataformas:</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                <a href="mailto:ramoszaid5@gmail.com" target="_blank" className="social-icon">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                        alt="Gmail"
                        className="social-img"
                    />
                </a>
                <a href="https://www.linkedin.com/in/saidramos16/" target="_blank" className="social-icon">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn"
                        className="social-img"
                    />
                </a>
                <a href="https://github.com/SaidPR/" target="_blank" className="social-icon">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="social-img"
                    />
                </a>
            </div>
            <p className="text-base text-gray-400 font-medium mb-2">¡Espero tu mensaje!</p>
        </section>
    );
}