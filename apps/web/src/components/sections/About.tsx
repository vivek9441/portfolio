import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about/profile.jpg"
              alt="Bjorn Melin"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm an AWS Solutions Architect and Full-Stack Developer with a passion for building
              scalable cloud solutions. With extensive experience in cloud architecture and
              modern web development, I help businesses leverage cloud technology to solve
              complex problems.
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'AWS',
                    'React',
                    'Node.js',
                    'TypeScript',
                    'Python',
                    'Infrastructure as Code',
                    'CI/CD',
                    'Serverless',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'AWS Solutions Architect Professional',
                    'AWS DevOps Engineer Professional',
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 