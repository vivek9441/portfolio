import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, MapPin, ExternalLink } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function ExperienceTimeline() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline line - simple div for the vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-border" />

                    <div className="space-y-8">
                        {experienceData.map((experience, index) => (
                            <div key={index} className="relative pl-16">
                                {/* Timeline dot - simple div for the dot */}
                                <div className="absolute left-[29px] top-7 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <CardTitle className="flex items-center gap-2">
                                                    <Building className="h-5 w-5" />
                                                    {experience.title}
                                                </CardTitle>
                                                <CardDescription className="text-lg">
                                                    {experience.company}
                                                </CardDescription>
                                            </div>
                                            <Badge variant="secondary">{experience.period}</Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="mb-4">{experience.description}</p>

                                        {experience.achievements && (
                                            <ul className="list-disc list-inside space-y-1 mb-4">
                                                {experience.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {experience.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {experience.technologies.map((tech, i) => (
                                                    <Badge key={i} variant="outline">{tech}</Badge>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-muted-foreground">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                {experience.location}
                                            </div>

                                            {experience.link && (
                                                <Button variant="ghost" size="sm" asChild>
                                                    <a
                                                        href={experience.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1"
                                                    >
                                                        Learn More <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
