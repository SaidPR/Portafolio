import { contactCopy, socialLinks } from './contact.data';

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-8 text-center">
      <div className="flex items-center justify-center my-12">
        <div className="separator"></div>
        <span className="separator-name">Contacto</span>
        <div className="separator"></div>
      </div>
      <h1 className="font-extrabold text-3xl text-gray-100 mb-4 drop-shadow-lg">{contactCopy.title}</h1>
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
    </section>
  );
}
