import { technologies } from './technologies.data';

export default function Technologies() {

  return (
    <div id="stack" className="px-4 text-center scroll-mt-28">

      <div className="flex items-center justify-center my-12">
        <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-amber-200/80">
          <span className="h-px w-10 bg-amber-200/60" />
          <span>Stack</span>
          <span className="h-px w-10 bg-amber-200/60" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 mt-6 px-6 sm:px-12 md:px-20 lg:px-44">
        {technologies.map((t, i) => (
          <div
            key={t.name}
            className={`flex flex-col items-center justify-center border-2 rounded-lg p-4 sm:p-5 ${t.color} 
            w-28 sm:w-32 md:w-36 transition-transform duration-300 hover:scale-110 animate-fade-in-down`}
          >
            <img
              src={t.badge}
              alt={t.name}
              className="h-12 sm:h-14"
              style={{
                animationDelay: `${1500 + (i + 1) * 100}ms`,
                animationFillMode: 'both',
              }}
              onContextMenu={(e) => e.preventDefault()}
            />
            <span className='pt-2 font-light text-[0.7rem] sm:text-xs md:text-base'>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
