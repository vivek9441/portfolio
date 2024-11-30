import { SocialLinks } from "@/components/shared/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center gap-4">
        <SocialLinks />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bjorn Melin. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 