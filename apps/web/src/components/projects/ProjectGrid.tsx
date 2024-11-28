import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js, React, and AWS services.',
    image: '/projects/portfolio.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS'],
    category: 'Web Development',
    links: {
      github: 'https://github.com/bjornmelin/bjornmelin-platform-io',
      live: 'https://bjornmelin.io',
    },
  },
  // Add more projects here
];

const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default function ProjectGrid() {
  return (
    <div>
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === 'All' ? 'default' : 'outline'}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.github && (
                  <Button variant="outline" asChild>
                    <Link href={project.links.github}>GitHub</Link>
                  </Button>
                )}
                {project.links.live && (
                  <Button asChild>
                    <Link href={project.links.live}>Live Demo</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 