import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Interested in working together? Let's discuss your project.
                </p>
                <Button size="lg" className="gap-2">
                    Get in Touch <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </section>
    );
}
