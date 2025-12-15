export default function Technologies() {
  const techs = [
    { name: 'HTML5',      badge: 'https://skillicons.dev/icons?i=html' },
    { name: 'Tailwind CSS', badge: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'JavaScript', badge: 'https://skillicons.dev/icons?i=js' },
    { name: 'React',      badge: 'https://skillicons.dev/icons?i=react' },
    { name: 'Python',     badge: 'https://skillicons.dev/icons?i=python' },
    { name: 'FastAPI',    badge: 'https://skillicons.dev/icons?i=fastapi' },
    { name: 'MongoDB',   badge: 'https://skillicons.dev/icons?i=mongo' },
    { name: 'Git',        badge: 'https://skillicons.dev/icons?i=git' },
    { name: 'Linux',      badge: 'https://skillicons.dev/icons?i=linux'},
  ];

  return (
    <article id="technologies" className="px-4 text-center scroll-mt-28">
      <div className="flex items-center justify-center my-12">
        <div className="separator"></div>
        <span className="separator-name">Tecnologías</span>
        <div className="separator"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 px-4">
        {techs.map((t, i) => (
          <img
            key={t.name}
            src={t.badge}
            alt={t.name}
            title={t.name}
            className="h-14 transition-transform duration-300 hover:scale-110 animate-fade-in-down"
            style={{
              animationDelay: `${2500 + (i + 1) * 300}ms`,
              animationFillMode: 'both',
            }}
            onContextMenu={(e) => e.preventDefault()}
          />
        ))}
      </div>
    </article>
  );
}
