import ProjectBox from './project-box/ProjectBox';
import { projects} from './projects.data.js';

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8 lg:px-16 py-12 text-center scroll-mt-08">
      <div className="flex items-center justify-center my-12">
        <div className="separator"></div>
        <span className="separator-name">Proyectos</span>
        <div className="separator"></div>
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-lg overflow-hidden">
        <div className="p-6 sm:p-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectBox key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
