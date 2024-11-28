// components/shared/TechBadge.tsx
import { Badge } from '@/components/ui/badge';

interface TechBadgeProps {
    name: string;
    className?: string;
}

export function TechBadge({ name, className = '' }: TechBadgeProps) {
    return (
        <Badge
            variant="secondary"
            className={`text-sm font-medium ${className}`}
        >
            {name}
        </Badge>
    );
}
