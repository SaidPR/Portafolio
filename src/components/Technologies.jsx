export default function Technologies() {
  const techs = [
    { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { name: 'React',      badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { name: 'HTML5',      badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS3',       badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'Node.js',    badge: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white' },
    { name: 'Python',     badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'FastAPI',    badge: 'https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white' },
    { name: 'C++',        badge: 'https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
    { name: 'Java',       badge: 'https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white' },
    { name: 'Linux',      badge: 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' },
];

  return (
    <section id="technologies" className="px-4 text-center">
      <div className="flex items-center justify-center my-12">
        <div className="w-full h-px bg-gray-600"></div>
        <span className="px-4 text-gray-300 text-sm uppercase tracking-widest">Tecnologías</span>
        <div className="w-full h-px bg-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {techs.map((t) => (
          <img
            key={t.name}
            src={t.badge}
            alt={t.name}
            title={t.name}
            className="h-8 transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </section>
  );
}
