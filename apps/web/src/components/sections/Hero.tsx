import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Hi, I'm Bjorn Melin
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            AWS Solutions Architect & Full-Stack Developer
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/projects" variant="primary">
              View Projects
            </Button>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 
