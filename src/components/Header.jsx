import MenuButton from "./MenuButton";

export default function Header() {
    return (
    <header id="about" className="px-4 sm:px-8 md:px-16 lg:px-32">
        <nav className="flex justify-end items-center p-4 sm:p-8 animate-fade-in-down animate-delay-700">
        <ul className="flex flex-wrap justify-center gap-2 sm:space-x-4 text-sm sm:text-base font-semibold">
            <MenuButton href="#about">Sobre mi</MenuButton>
            <MenuButton href="#technologies">Tecnologías</MenuButton>
            <MenuButton href="#projects">Proyectos</MenuButton>
            <MenuButton href="#contact">Contacto</MenuButton>
        </ul>
        </nav>

         <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-8 mt-8">
        <img
          src="/assets/foto.webp"
          alt="Foto Said"
          className="object-cover rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 shadow-lg border-2 border-black animate-fade-in animate-duration-1000"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-fade-in-left">¡Hola, soy Said Piñones!</h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg animate-fade-in-left animate-delay-100">
            Soy un estudiante apasionado del desarrollo de software <br/>
            con experiencia práctica en proyectos reales. <br/> <br/>
            Siempre estoy aprendiendo algo nuevo y participando <br/>en proyectos que me reten.
          </p>
          <a href="/assets/CV-ES Piñones Said 2025.pdf" download>
            <div className="mt-4 w-44 mx-auto sm:mx-0 border rounded-xl bg-purple-950 
                            transition-transform duration-300 hover:scale-105 border-slate-900 animate-fade-in-left animate-delay-700">
              <p className="p-2 font-bold text-center">Descarga mi CV</p>
            </div>
          </a>
        </div>
      </div>

        
    </header>
  )
}
