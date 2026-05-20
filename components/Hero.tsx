'use client';

import { profileData } from '../lib/portfolio-data';

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const email = `${profileData.emailUser}@${profileData.emailDomain}`;
    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent("Hi Ceejay,\n\nI saw your portfolio and would love to connect.");
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="flex flex-col gap-6 pt-24 pb-16 md:pt-32 md:pb-24">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {profileData.name.split(" ")[0]}
        </span>.
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-slate-400">
        A {profileData.role}
      </h2>
      <p className="max-w-2xl text-lg text-slate-500 leading-relaxed">
        {profileData.tagline}
      </p>
      
      <div className="flex items-center gap-4 mt-4">
        <a 
          href={profileData.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-white transition-colors"
        >
          View GitHub
        </a>
        <button 
          onClick={handleContactClick}
          className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-colors text-left"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}