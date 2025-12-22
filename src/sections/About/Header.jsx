import FotoSaid from '../../assets/Foto.webp';
import { headerCopy } from './header.data';

export default function Header() {
  return (
    <header
      id="about"
      className="relative isolate overflow-hidden text-white min-h-[520px] lg:min-h-[580px] flex items-center"
    >
      <div
        className="absolute inset-0 bg-amber-200/95 pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 70% 0, 0 80%)' }}
      />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-55">
          <div className="flex w-full flex-col items-center gap-8 lg:w-auto lg:items-start">
            <img
              src={FotoSaid}
              alt={headerCopy.imageAlt}
              className="img-header"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="pl-1.5 text-lg font-semibold text-gray-200">{headerCopy.greeting}</p>
            <h1 className="mt-3 text-5xl font-extrabold leading-none text-[#6ea0e2] sm:text-6xl lg:text-7xl">
              <span className="block">{headerCopy.name}</span>
              <span className="block">{headerCopy.lastName}</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 sm:text-xl">{headerCopy.role}</p>
          </div>
        </div>

    </header>
  );
}
