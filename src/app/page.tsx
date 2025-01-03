import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";

export const metadata = {
  title: "Bjorn Melin - Senior Data Scientist & Cloud Solutions Architect",
  description:
    "Portfolio of Bjorn Melin, a Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML solutions, GenAI innovation, and cloud-native architectures. 6x AWS Certified professional with expertise in machine learning and scalable cloud solutions.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
