// types/project.ts
export interface ProjectType {
    title: string;
    description: string;
    technologies: string[];
    links: {
        demo: string;
        github: string;
        docs?: string;
    };
    image?: {
        src: string;
        alt: string;
    };
    featured?: boolean;
    status?: 'completed' | 'in-progress' | 'planned';
}
