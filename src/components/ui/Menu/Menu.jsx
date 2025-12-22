import MenuButton from './MenuButton';
import { navLinks } from './menu.data';

export default function Menu() {
  return (
    <div className="hidden sm:block md:block lg:block z-50">
      <nav className="hidden sm:flex lg:flex fixed right-10 top-72 -translate-y-1/2 z-50">
        <ul className="flex flex-col gap-6 text-sm tracking-[0.18em] text-white">
          {navLinks.map((link) => (
            <MenuButton
              key={link.href}
              href={link.href}
              className="hover:-translate-x-2 transition-transform duration-200 
                            hover:underline hover:underline-offset-8"
            >
              {link.label}
            </MenuButton>
          ))}
        </ul>
      </nav>
    </div>
  );
}
