import { experienceData } from '@/data/experience';
import ExperienceCard from '@/components/experience/ExperienceCard';

export default function ExperienceSection() {
    return (
        <section className="container mx-auto px-4 py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
            <div className="max-w-4xl mx-auto">
                {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </div>
        </section>
    );
}
