export default function ProjectBox({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-lime-100 text-black shadow-2xl ring-1 ring-black/5 transition-transform duration-300">
      <div className="relative h-48">
        <img
          src={project.heroImage || '/assets/default.png'}
          alt={project.title}
          className="h-full w-full object-cover"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/50" />
        {project.logo && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-amber/90 backdrop-blur p-3 shadow-lg">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="h-16 w-16 object-contain"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-4">
        {project.ctaHref && (
          <a
            href={project.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-200/95 px-4 py-2 text-sm font-semibold text-amber-950 shadow hover:bg-blue-200 hover:text-indigo-950 hover:font-bold transition-colors"
          >
            {project.ctaLabel || 'Ver proyecto'}
          </a>
        )}

        <div className="text-left">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-900 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 ">
          {project.techs?.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-400 bg-slate-200 px-3 py-1 text-xs font-medium text-slate-950"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
