import { Code2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/skills';

export default function SkillsSection() {
    return (
        <section className="container mx-auto px-4 py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code2 className="h-5 w-5" />
                            Cloud Architecture
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.cloud.map((skill, index) => (
                                <Badge key={index} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code2 className="h-5 w-5" />
                            Backend Development
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.backend.map((skill, index) => (
                                <Badge key={index} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code2 className="h-5 w-5" />
                            Frontend Development
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.frontend.map((skill, index) => (
                                <Badge key={index} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
