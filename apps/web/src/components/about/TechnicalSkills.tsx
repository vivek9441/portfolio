// components/about/TechnicalSkills.tsx
import { SectionHeader } from '@/components/shared/SectionHeader';
import { TechBadge } from '@/components/shared/TechBadge';
import { skillsData } from '@/data/skills';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Cloud, Layout } from 'lucide-react';

const skillIcons = {
    cloud: Cloud,
    backend: Code2,
    frontend: Layout,
};

export default function TechnicalSkills() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Technical Skills"
                    description="Core technologies and platforms I work with"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {Object.entries(skillsData).map(([category, skills]) => {
                        const Icon = skillIcons[category as keyof typeof skillIcons];
                        return (
                            <Card key={category}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        {Icon && <Icon className="h-5 w-5" />}
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <TechBadge key={index} name={skill} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
