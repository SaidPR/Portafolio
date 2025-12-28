import { experienceIntro, experienceItems } from './experience.data';

export default function Experience() {
  return (
    <article id="experience" className="px-4 scroll-mt-28">
      <div className="relative z-10 w-full flex justify-center px-6 lg:-mt-20">
        <p className="max-w-xl text-center text-base text-white">
          {experienceIntro}
        </p>
      </div>

      <div className="flex items-center justify-center my-12">
        <div className="separator"></div>
        <span className="separator-name">Experiencia</span>
        <div className="separator"></div>
      </div>

      <ol className="relative max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 sm:pt-8 sm:mt-4 pl-6 sm:pl-0">
        {experienceItems.map((item) => (
          <li key={item.id} className="relative sm:pl-6 lg:pr-10">
            <time
              dateTime={item.datetime}
              className="inline-block bg-slate-900/70 border border-sky-500/30 text-sky-100 text-xs font-medium px-2 py-1 rounded"
            >
              {item.date}
            </time>
            <h3 className="flex items-center justify-center sm:justify-start mb-1 text-xl font-semibold text-amber-200/95 my-2">
              {item.role}
              {item.highlight && (
                <span className="ms-2 bg-sky-900/70 border border-sky-500/40 text-sky-100 text-xs font-medium px-1.5 py-0.5 rounded">
                  {item.highlight}
                </span>
              )}
            </h3>
            <p className="mb-4 text-gray-200">{item.description}</p>
            {item.achievements?.length > 0 && (
              <>
                <p className="mb-2 text-gray-200 font-medium">Logros:</p>
                <ul className="list-disc list-inside space-y-3 text-gray-200 mb-4">
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            {item.link && (
              <a
                href={item.link.href}
                className="inline-flex items-center justify-center text-sky-100 bg-sky-900/70 box-border border border-sky-500/40 hover:bg-sky-800 hover:text-white focus:ring-4 focus:ring-sky-700/30 shadow-md font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
              >
                <svg
                  className="w-4 h-4 me-1.5 -ms-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 12h11m-2-2l2 2l-2 2m5-7v10a2 2 0 0 1-2 2H8" />
                </svg>
                {item.link.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}
