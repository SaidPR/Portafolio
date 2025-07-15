export default function Header() {
    return (
    <header className="#about">
        <nav className="flex justify-end items-center p-8">
        <ul className="flex justify-center space-x-4 mt-1 font-semibold">
            <li><a href="#about" className="hover:text-gray-300 px-3 py-2 border rounded-full shadow-sm">Sobre mí</a></li>
            <li><a href="#technologies" className="hover:text-gray-300 px-3 py-2 border rounded-full shadow-sm">Tecnologías</a></li>
            <li><a href="#projects" className="hover:text-gray-300 px-3 py-2 border rounded-full shadow-sm">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-gray-300 px-3 py-2 border rounded-full shadow-sm">Contacto</a></li>
        </ul>
        </nav>

        <div className="flex flex-col justify-center mt-5">
        <img
            src="/assets/foto.jpg"
            alt="Foto Said"
            className="object-cover rounded-full w-80 h-85 shadow-lg border-2 border-black ml-55"
            onContextMenu={(e) => e.preventDefault()}
        />
        <h1 className="text-4xl font-bold -mt-70 ml-170">¡Hola, soy Said Piñones!</h1>
        <p className="mt-4 text-lg ml-170">
            Soy un estudiante apasionado del desarrollo de software <br/>
            con experiencia práctica en proyectos reales. <br/> <br/>
            Siempre estoy aprendiendo algo nuevo y participando <br/>en proyectos que me reten.
        </p>
        </div>
        <a href="/assets/CV-ES Piñones Said 2025.pdf" download>
          <div className="flex justify-center mt-4 ml-170 border rounded-xl w-45 h-10 bg-purple-950 
                          transition-transform duration-300 hover:scale-101 border-slate-900">
            <p className="flex justify-center p-1.5 font-bold text-medium">Descarga mi CV</p>
          </div>
        </a>

        
    </header>
  )
}
