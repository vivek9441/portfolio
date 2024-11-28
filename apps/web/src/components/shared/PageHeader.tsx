
// components/shared/PageHeader.tsx
import { PageMetadata } from '@/types/metadata';

interface PageHeaderProps extends PageMetadata {
    children?: React.ReactNode;
}

export function PageHeader({
    title,
    description,
    children
}: PageHeaderProps) {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                {description && (
                    <p className="text-xl text-gray-600 mb-8">{description}</p>
                )}
                {children}
            </div>
        </div>
    );
}
