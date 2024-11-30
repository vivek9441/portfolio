import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ featuredOnly = false }) {
    const projects = featuredOnly
        ? projectsData.filter(project => project.featured)
        : projectsData;

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    );
}
