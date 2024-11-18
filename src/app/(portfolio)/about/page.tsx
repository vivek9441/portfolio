import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Bjorn Melin',
  description: 'Learn more about my background and experience',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          I'm an AWS Solutions Architect and Full-Stack Developer with a passion
          for building scalable cloud solutions and modern web applications.
        </p>
        {/* Add more content about yourself */}
      </div>
    </div>
  );
}
