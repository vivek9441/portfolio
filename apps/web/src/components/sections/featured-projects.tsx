import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectGrid } from "@/components/projects/project-grid";

export function FeaturedProjects() {
    return (
        <section
            id="projects"
            className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Featured Projects
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Explore some of my recent projects in cloud architecture and web development.
                </p>
            </div>
            <ProjectGrid />
            <div className="mx-auto text-center">
                <Button variant="outline" asChild>
                    <Link href="/projects">View All Projects</Link>
                </Button>
            </div>
        </section>
    );
}
