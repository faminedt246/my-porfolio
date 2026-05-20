import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col">
        <Hero />
        <ProjectGrid />
        
        <footer className="py-12 mt-12 border-t border-slate-800/50 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Ceejay Cumberbatch. All rights reserved.
        </footer>
      </div>
    </main>
  );
}