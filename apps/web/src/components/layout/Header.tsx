'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Bjorn Melin
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
