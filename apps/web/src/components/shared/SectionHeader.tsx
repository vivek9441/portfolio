// components/shared/SectionHeader.tsx
interface SectionHeaderProps {
    title: string;
    description?: string;
    alignment?: 'left' | 'center' | 'right';
    className?: string;
}

export function SectionHeader({
    title,
    description,
    alignment = 'center',
    className = ''
}: SectionHeaderProps) {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {description && (
                <p className="text-lg text-gray-600">{description}</p>
            )}
        </div>
    );
}
