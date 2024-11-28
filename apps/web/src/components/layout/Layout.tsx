// components/layout/Layout.tsx
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
