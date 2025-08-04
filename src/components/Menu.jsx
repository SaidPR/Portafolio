import MenuButton from "./MenuButton";

export default function Menu() {
  const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#technologies', label: 'Tecnologías' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 animate-fade-in-left animate-delay-500">
      <div className="div-menu">
        <nav className="nav-menu">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold">
            {links.map((link, i) => (
              <MenuButton
                key={link.href}
                href={link.href}
                className="animate-fade-in-down transition-transform duration-300 hover:scale-105"
                style={{
                  animationDelay: `${2000 + i * 150}ms`,
                  animationFillMode: 'both',
                }}
              >
                {link.label}
              </MenuButton>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
