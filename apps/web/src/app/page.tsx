import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
}
