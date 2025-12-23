import { technologies } from './technologies.data';

export default function Technologies() {

  return (
    <div id="stack" className="px-4 text-center scroll-mt-28">

      <div className="flex items-center justify-center my-12">
        <div className="separator"></div>
        <span className="separator-name">STACK</span>
        <div className="separator"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 px-4">
        {technologies.map((t, i) => (
          <img
            key={t.name}
            src={t.badge}
            alt={t.name}
            title={t.name}
            className="h-14 transition-transform duration-300 hover:scale-110 animate-fade-in-down"
            style={{
              animationDelay: `${1500 + (i + 1) * 100}ms`,
              animationFillMode: 'both',
            }}
            onContextMenu={(e) => e.preventDefault()}
          />
        ))}
      </div>
    </div>
  );
}
