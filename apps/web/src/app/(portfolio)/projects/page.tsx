import { Metadata } from 'next';
import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects - Bjorn Melin',
  description: 'Explore my portfolio of cloud and web development projects.',
};

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here's a collection of my recent projects, showcasing my experience in cloud architecture,
          web development, and DevOps practices.
        </p>
        <ProjectGrid />
      </div>
    </div>
  );
}
