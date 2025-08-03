export default function Technologies() {
  const techs = [
    { name: 'HTML5',      badge: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS3',       badge: 'https://skillicons.dev/icons?i=css' },
    { name: 'JavaScript', badge: 'https://skillicons.dev/icons?i=js' },
    { name: 'React',      badge: 'https://skillicons.dev/icons?i=react' },
    { name: 'Node.js',    badge: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Python',     badge: 'https://skillicons.dev/icons?i=python' },
    { name: 'FastAPI',    badge: 'https://skillicons.dev/icons?i=fastapi' },
    { name: 'Java',       badge: 'https://skillicons.dev/icons?i=java' },
    { name: 'Firebase',   badge: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'SQL',        badge: 'https://skillicons.dev/icons?i=sqlite' },
    { name: 'Git',        badge: 'https://skillicons.dev/icons?i=git' },
    { name: 'Linux',      badge: 'https://skillicons.dev/icons?i=linux'},
  ];

  return (
    <section id="technologies" className="px-4 text-center">
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
              animationDelay: `${1450 + (i + 1) * 300}ms`,
              animationFillMode: 'both',
            }}
          />
        ))}
      </div>
    </section>
  );
}
