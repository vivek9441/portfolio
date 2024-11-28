// types/experience.ts
export interface ExperienceType {
    company: string;
    title: string;
    period: string;
    description: string;
    location: string;
    achievements?: string[];
    technologies?: string[];
    link?: string;
}
