import { Github, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectType } from '@/types/project';

interface ProjectCardProps {
    project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <Button variant="outline" asChild>
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            Live Demo <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            Source <Github className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
