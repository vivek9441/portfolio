import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ProjectType } from "@/types/project";

interface ProjectPreviewProps {
    category: ProjectType['category'];
}

function ProjectPreview({ category }: ProjectPreviewProps) {
    const colors = {
        web: "#3b82f6",
        cloud: "#8b5cf6",
        ai: "#ef4444",
        data: "#22c55e"
    };

    const baseColor = colors[category];

    return (
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="400" fill="#f8fafc" />
            <rect x="100" y="80" width="600" height="240" rx="8" fill="#1e293b" />
            <rect x="100" y="80" width="600" height="30" rx="8" fill="#334155" />
            <circle cx="130" cy="95" r="6" fill="#ef4444" />
            <circle cx="155" cy="95" r="6" fill="#eab308" />
            <circle cx="180" cy="95" r="6" fill="#22c55e" />
            <rect x="120" y="130" width="200" height="12" rx="2" fill="#94a3b8" fillOpacity="0.5" />
            <rect x="120" y="160" width="300" height="12" rx="2" fill="#94a3b8" fillOpacity="0.5" />
            <rect x="120" y="190" width="250" height="12" rx="2" fill="#94a3b8" fillOpacity="0.5" />
            <rect x="120" y="220" width="280" height="12" rx="2" fill="#94a3b8" fillOpacity="0.5" />
            <rect x="120" y="270" width="100" height="30" rx="4" fill={baseColor} />
            <rect x="240" y="270" width="100" height="30" rx="4" fill={baseColor} fillOpacity="0.6" />
        </svg>
    );
}

export function ProjectCard({ title, description, technologies, category, links }: ProjectType) {
    return (
        <Card className="flex flex-col overflow-hidden">
            <div className="relative h-48 bg-slate-50 p-4">
                <ProjectPreview category={category} />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="mt-auto gap-2">
                {links.github && (
                    <Button variant="outline" asChild>
                        <Link href={links.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Link>
                    </Button>
                )}
                {(links.live || links.demo) && (
                    <Button asChild>
                        <Link href={links.live || links.demo!} target="_blank" rel="noopener noreferrer">
                            {links.live ? 'Live Site' : 'Demo'}
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}