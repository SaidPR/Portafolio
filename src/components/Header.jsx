import FotoSaid from '/src/assets/foto.webp';

export default function Header() {

    return (
    <header id="about" className="px-4 sm:px-8 md:px-16 lg:px-32 mt-30 scroll-mt-30">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-8 mt-8">
        <img
          src= {FotoSaid}
          alt="Foto Said"
          className="img-header"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-fade-in-left">¡Hola, soy Said Piñones!</h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg animate-fade-in-left animate-delay-100 text-justify">
            Soy estudiante de Ingeniería en Sistemas Computacionales <br/> enfocado en el desarrollo de software y desarrollo web con <br/>
            experiencia práctica en proyectos reales. <br/> <br/>
            Me gusta crear soluciones útiles, limpias y funcionales <br/>que respondan a necesidades reales.
            Disfruto enfrentar <br/>retos técnicos y siempre busco crecer con cada proyecto.
          </p>
          <div className="boton-cv">
          <a href="/assets/CV-ES Piñones Said 2025.pdf" download>
            <p className="p-2 font-bold text-center">Descarga mi CV</p>
          </a>
          </div>
        </div>
      </div>        
    </header>
  )
}
