import { PortfolioNavbar } from "@/components/layouts/navbar/portfolio";
import { MarketingFooter } from "@/components/layouts/footer/marketing";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PortfolioNavbar />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </>
  );
} 