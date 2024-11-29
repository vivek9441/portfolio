import { Metadata } from 'next';
import Hero from './_components/Hero';
import FeaturedProjects from './_components/FeaturedProjects';

export const metadata: Metadata = {
  title: 'Bjorn Melin - AWS Solutions Architect & Full-Stack Developer',
  description: 'AWS Solutions Architect and Full-Stack Developer specializing in cloud architecture and modern web development.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}
