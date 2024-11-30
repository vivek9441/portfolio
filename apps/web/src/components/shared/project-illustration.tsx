interface ProjectIllustrationProps {
    variant?: 'cloud' | 'web' | 'ai' | 'data';
    className?: string;
}

export function ProjectIllustration({ variant = 'web', className = "w-full h-full" }: ProjectIllustrationProps) {
    const illustrations = {
        cloud: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 400" className={className}>
                <rect width="800" height="400" fill="#f8fafc" />
                <path d="M400 140c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm0 120c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z" fill="#0ea5e9" />
                <path d="M520 180c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z" fill="#0369a1" />
                <path d="M280 180c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z" fill="#0369a1" />
            </svg>
        ),
        web: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 400" className={className}>
                <rect width="800" height="400" fill="#f8fafc" />
                <rect x="200" y="100" width="400" height="200" rx="8" fill="#e2e8f0" />
                <rect x="220" y="120" width="360" height="160" rx="4" fill="#f1f5f9" />
                <circle cx="240" cy="140" r="8" fill="#94a3b8" />
                <circle cx="270" cy="140" r="8" fill="#94a3b8" />
                <circle cx="300" cy="140" r="8" fill="#94a3b8" />
            </svg>
        ),
        ai: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 400" className={className}>
                <rect width="800" height="400" fill="#f8fafc" />
                <path d="M350 150h100v100h-100z" fill="#818cf8" />
                <path d="M380 180l40 40m0-40l-40 40" stroke="#f1f5f9" strokeWidth="8" />
                <circle cx="400" cy="200" r="80" stroke="#4f46e5" strokeWidth="4" strokeDasharray="8 8" />
            </svg>
        ),
        data: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 400" className={className}>
                <rect width="800" height="400" fill="#f8fafc" />
                <path d="M300 150h50v150h-50z" fill="#22c55e" />
                <path d="M375 200h50v100h-50z" fill="#16a34a" />
                <path d="M450 100h50v200h-50z" fill="#15803d" />
            </svg>
        )
    };

    return illustrations[variant] || illustrations.web;
}
