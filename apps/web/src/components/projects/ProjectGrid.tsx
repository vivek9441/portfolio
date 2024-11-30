import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, React, and AWS services.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AWS"],
    links: {
      github: "https://github.com/bjornmelin/bjornmelin-platform-io",
      live: "https://bjornmelin.io",
    },
  },
  // Add more projects here
];

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
} 