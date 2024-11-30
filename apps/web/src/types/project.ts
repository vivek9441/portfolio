// types/project.ts
export interface ProjectType {
    title: string;
    description: string;
    technologies: string[];
    category: 'web' | 'cloud' | 'ai' | 'data';
    links: {
        live: string;
        github: string;
        docs?: string;
    };
    image?: string;
    // image?: {
    //     src: string;
    //     alt: string;
    // };
    featured?: boolean;
    status?: 'completed' | 'in-progress' | 'planned';
}
