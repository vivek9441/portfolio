// apps/web/src/app/(portfolio)/layout.tsx
import { PortfolioNavbar } from "@/components/features/portfolio/layout/navbar";

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <PortfolioNavbar />
            <div className="container px-4 py-8 mx-auto">
                {children}
            </div>
        </div>
    );
}
