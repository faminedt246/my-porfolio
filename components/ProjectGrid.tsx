import { projects } from '../lib/portfolio-data';

export default function ProjectGrid() {
  return (
    <section className="py-16">
      <h3 className="text-3xl font-bold text-slate-100 mb-10">Selected Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-slate-100">{project.title}</h4>
              <span 
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-emerald-500/10 text-emerald-400' 
                    : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                {project.status}
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col gap-3 mt-auto">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                >
                  View Website &rarr;
                </a>
              )}
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
              >
                View Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}