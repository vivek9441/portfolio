// app/about/page.tsx
import { Metadata } from 'next';
import AboutHero from './components/AboutHero';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Bjorn Melin, AWS Solutions Architect and Full-Stack Developer.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
    </div>
  );
}
