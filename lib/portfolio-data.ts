export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: 'Completed' | 'In Progress';
  githubUrl?: string; // Made optional to handle private repositories
  liveUrl?: string;
}

export const profileData = {
  name: "Ceejay Cumberbatch",
  role: "Full-Stack Web Developer",
  tagline: "Building robust, scalable applications and enterprise solutions.",
  githubProfile: "https://github.com/FamineDT246",
  emailUser: "ceejaycumberbatch",
  emailDomain: "gmail.com"
};

export const projects: Project[] = [
  {
    id: "ip-lifecycle-erp",
    title: "IP-Lifecycle-ERP",
    description: "A B2B enterprise resource planning system featuring Kanban boards and deal room components to manage business lifecycles.",
    techStack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    status: "In Progress",
    githubUrl: "https://github.com/FamineDT246/ip-lifecycle-erp"
  },
  {
    id: "bim-hr-solutions",
    title: "BIM-HR Solutions",
    description: "A localized, multi-tenant Enterprise Payroll and HR application built specifically for the Barbadian regulatory landscape, featuring automated statutory tax calculations and strict role-based data isolation.",
    techStack: ["Next.js", "React", "Supabase", "Tailwind CSS", "Zod", "Playwright"],
    status: "In Progress",
    liveUrl: "https://bimhrsolutions.com"
    // githubUrl is intentionally omitted here because it is a private repository
  },
  {
    id: "uwi-giveback",
    title: "UWI-GIVEBACK",
    description: "A comprehensive volunteer management portal built to streamline community service coordination and track student engagement.",
    techStack: ["Next.js", "React", "Supabase", "CSS Modules"],
    status: "Completed",
    githubUrl: "https://github.com/FamineDT246/uwi-giveback",
    liveUrl: "https://uwi-giveback.vercel.app"
  },
  {
    id: "kiaras-treats",
    title: "Kiara's Treats",
    description: "A production-ready e-commerce platform for a bakery, featuring complete inventory management and revenue tracking.",
    techStack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    status: "Completed",
    githubUrl: "https://github.com/FamineDT246/kiaras-treats",
    liveUrl: "https://kays-delights.vercel.app"
  }
];