// app/about/components/AboutHero.tsx
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-background py-20">
            <div className="container max-w-3xl mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-6">About Me</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    AWS Solutions Architect and Full Stack Developer passionate about building
                    scalable cloud solutions and modern web applications.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                    With extensive experience in cloud architecture and modern development practices,
                    I specialize in designing and implementing enterprise-grade solutions using AWS services,
                    serverless architectures, and infrastructure as code.
                </p>
                <Button className="gap-2">
                    View My Work <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </section>
    );
}
