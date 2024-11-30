import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

export default function MarketingPage() {
  return (
    <div className="flex-1">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
} 