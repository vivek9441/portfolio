import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
    return (
        <section
            id="about"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    About Me
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    I'm an AWS Solutions Architect and Full-Stack Developer with a passion for
                    cloud architecture and modern web development. With expertise in AWS
                    services, React, TypeScript, and Node.js, I help businesses build
                    scalable and efficient cloud solutions.
                </p>
                <Button variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                </Button>
            </div>
        </section>
    );
}
