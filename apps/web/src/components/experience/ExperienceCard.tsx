import { Building, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExperienceType } from '@/types/experience';

interface ExperienceCardProps {
    experience: ExperienceType;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <Card className="mb-6">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <Building className="h-5 w-5" />
                            {experience.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium">
                            {experience.company}
                        </CardDescription>
                    </div>
                    <Badge variant="outline">{experience.period}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 mb-2">{experience.description}</p>
                <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                </div>
            </CardContent>
        </Card>
    );
}
