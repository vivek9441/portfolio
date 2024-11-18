'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            Bjorn Melin
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
