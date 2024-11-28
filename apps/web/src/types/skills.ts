// types/skills.ts
export interface SkillCategory {
    name: string;
    items: string[];
    icon?: string;
    description?: string;
}

export interface SkillsData {
    cloud: string[];
    backend: string[];
    frontend: string[];
    [key: string]: string[];
}
