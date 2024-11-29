import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GitHubIcon, LinkedInIcon } from '@/components/shared/icons';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C8DEFF,transparent)]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Hi, I'm Bjorn Melin
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            AWS Solutions Architect & Full-Stack Developer specializing in cloud architecture
            and modern web development. I help businesses build scalable, secure, and
            efficient cloud solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/bjornmelin" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/bjornmelin" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 
