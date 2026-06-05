import { projects } from '../lib/portfolio-data';

export default function ProjectGrid() {
  return (
    <section className="py-16">
      <h3 className="text-3xl font-bold text-slate-100 mb-10">Selected Work</h3>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-bold text-slate-100">{project.title}</h4>
              <span 
                className={`text-sm px-4 py-1 rounded-full font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-emerald-500/10 text-emerald-400' 
                    : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                {project.status}
              </span>
            </div>
            
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-3xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-sm font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-sm"
                >
                  View Website &rarr;
                </a>
              )}
              
              {project.githubUrl ? (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
                >
                  View Repository
                </a>
              ) : (
                <span className="text-sm font-semibold text-slate-500 border border-slate-800 px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 cursor-not-allowed w-full sm:w-auto bg-slate-900/50">
                  Private Repository 🔒
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}