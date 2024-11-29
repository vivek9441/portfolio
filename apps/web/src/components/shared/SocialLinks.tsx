// components/shared/SocialLinks.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GitHubIcon, LinkedInIcon, MediumIcon, OrcidIcon } from '@/components/shared/icons';

interface SocialLink {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/bjorn-melin/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/BjornMelin',
    icon: GitHubIcon,
    label: 'GitHub',
  },
  {
    href: 'https://medium.com/@bjornmelin',
    icon: MediumIcon,
    label: 'Medium',
  },
  {
    href: 'https://orcid.org/0009-0004-1978-3356',
    icon: OrcidIcon,
    label: 'ORCID',
  },
];

interface SocialLinksProps {
  variant?: 'default' | 'minimal';
}

export function SocialLinks({ variant = 'default' }: SocialLinksProps) {
  if (variant === 'minimal') {
    return (
      <div className="flex items-center gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <Button key={href} variant="ghost" size="icon" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </Link>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <Button key={href} variant={label === 'LinkedIn' ? 'default' : 'outline'} asChild>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="h-5 w-5 mr-2" />
            {label}
          </Link>
        </Button>
      ))}
    </div>
  );
}
