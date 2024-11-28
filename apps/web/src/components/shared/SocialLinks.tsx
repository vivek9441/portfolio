// components/shared/SocialLinks.tsx
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SocialLink } from '@/types/social';

const socialLinks: SocialLink[] = [
    {
        platform: 'GitHub',
        url: 'https://github.com/bjornmelin',
        icon: 'github',
        label: 'GitHub Profile'
    },
    {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/bjorn-melin',
        icon: 'linkedin',
        label: 'LinkedIn Profile'
    },
    {
        platform: 'Twitter',
        url: 'https://twitter.com/bjornmelin',
        icon: 'twitter',
        label: 'Twitter Profile'
    },
    {
        platform: 'Email',
        url: 'mailto:contact@bjornmelin.io',
        icon: 'mail',
        label: 'Email Contact'
    }
];

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail
};

interface SocialLinksProps {
    className?: string;
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
    return (
        <div className={`flex justify-center space-x-4 ${className}`}>
            {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                    <Button
                        key={link.platform}
                        variant="outline"
                        size="icon"
                        asChild
                    >
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    </Button>
                );
            })}
        </div>
    );
}
