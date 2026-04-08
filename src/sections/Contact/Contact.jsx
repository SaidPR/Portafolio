import { contactCopy, socialLinks } from './contact.data';
import Logo from '../../../favicon.png';

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-8 text-center mt-20">
      {/* SEPARADOR */}
      <div className="flex items-center justify-center my-12">
        <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-amber-200/80">
          <span className="h-px w-10 bg-amber-200/60" />
          <span>Contacto</span>
          <span className="h-px w-10 bg-amber-200/60" />
        </div>
      </div>
      {/* GRIDS */}

      {/* CONTACTO */}
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      {/* LOGO */}
        <div className='flex flex-col items-center justify-center text-center p-10'>
          <img 
            className='object-contain w-30 md:35 lg:w-45 rounded-full'
            src={Logo}
          />
          <p className=' mt-5 text-base md:text-xl uppercase text-amber-300/80 font-light tracking-wider'>Desarrollado por <span className='font-semibold'>Rafael Ramos</span></p>
        </div>
      {/* INFO */}
        <div className='p-10'>
          <h1 className="font-extrabold text-3xl text-gray-100 mt-10 mb-4 drop-shadow-lg">{contactCopy.title}</h1>
          <p className="text-lg text-gray-300 mb-6">{contactCopy.description}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            {socialLinks.map((social) => (
              <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                <img
                  src={social.img}
                  alt={social.alt}
                  className="social-img"
                />
              </a>
            ))}
          </div>
          <p className="text-base text-gray-400 font-medium mb-2">{contactCopy.closing}</p>
        </div>
      </div>
    </section>
  );
}
