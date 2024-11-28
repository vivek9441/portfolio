// app/about/page.tsx
import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import TechnicalSkills from '@/components/about/TechnicalSkills';
import Certifications from '@/components/about/Certifications';

export const metadata: Metadata = {
  title: 'About - Bjorn Melin',
  description: 'AWS Solutions Architect and Full Stack Developer with expertise in cloud architecture and modern development practices.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <ExperienceTimeline />
      <TechnicalSkills />
      <Certifications />
    </div>
  );
}
