import Image from "next/image";
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

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  links,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
        {links.live && (
          <Button asChild>
            <Link href={links.live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
