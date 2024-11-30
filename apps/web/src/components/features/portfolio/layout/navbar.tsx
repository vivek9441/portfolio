import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { BaseNavbar } from "@/components/layouts/navbar/base-navbar";

const portfolioLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export function PortfolioNavbar() {
    return (
        <BaseNavbar
            links={portfolioLinks}
            rightContent={<SocialLinks />}
        />
    );
}
