import { SocialLinks } from "@/components/shared/social-links";
import { BaseNavbar } from "./base-navbar";

const portfolioLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "https://orcid.org/0000-0003-3891-5522", label: "ORCID" },
];

export function PortfolioNavbar() {
  return (
    <BaseNavbar
      links={portfolioLinks}
      rightContent={<SocialLinks />}
    />
  );
} 