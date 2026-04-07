import { experienceIntro, experienceItems } from './experience.data';

export default function Experience() {
  return (
    <article id="experience" className="px-4 sm:px-8 lg:px-16 py-12 scroll-mt-28">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="text-base md:text-base text-slate-100 -mt-20">{experienceIntro}</p>
        <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-amber-200/80">
          <span className="h-px w-10 bg-amber-200/60" />
          <span>Experiencia</span>
          <span className="h-px w-10 bg-amber-200/60" />
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid gap-6 sm:gap-8">
        {experienceItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
          >
            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-amber-500/10 via-transparent to-sky-500/10" />

            <div className="relative px-5 pt-5 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <time
                  dateTime={item.datetime}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold text-amber-100 border border-amber-300/40"
                >
                  {item.date}
                </time>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{item.role}</h3>
              </div>
              {item.highlight && (
                <span className="rounded-full bg-emerald-500/15 border border-emerald-300/40 px-3 py-1 text-xs font-semibold text-emerald-100">
                  {item.highlight}
                </span>
              )}
            </div>

            <p className="relative px-5 mt-3 text-sm text-slate-100 leading-relaxed">
              {item.description}
            </p>

            {item.achievements?.length > 0 && (
              <div className="relative px-5 mt-4 pb-2">
                <p className="text-xs uppercase tracking-[0.08em] text-amber-200/80">Logro destacado</p>
                <p className="mt-1 text-sm text-amber-50 border-l border-amber-300/50 pl-3">
                  {item.achievements[0]}
                </p>

                {item.achievements.length > 1 && (
                  <details className="group mt-3 text-sm text-slate-100">
                    <summary className="flex items-center gap-2 cursor-pointer text-amber-100 hover:text-white">
                      Ver más logros
                      <span className="text-xs text-amber-200/70 group-open:hidden">▼</span>
                      <span className="text-xs text-amber-200/70 hidden group-open:inline">▲</span>
                    </summary>
                    <ul className="mt-2 space-y-2 list-disc list-inside text-slate-100/90">
                      {item.achievements.slice(1).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            )}

            {item.link && (
              <div className="relative px-5 pb-5 pt-3">
                <a
                  href={item.link.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/60 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-50 hover:bg-amber-400/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h12m-3-3 3 3-3 3"
                    />
                  </svg>
                  {item.link.label}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
