import { Metadata } from "next";
import { ContactForm } from "@/components/features/portfolio/contact/contact-form";
import { SocialLinks } from "@/components/shared/social-links";

export const metadata: Metadata = {
    title: "Contact - Bjorn Melin",
    description: "Get in touch for collaboration opportunities or questions about cloud architecture and development.",
};

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
                I am always interested in discussing new projects, opportunities, and collaborations in cloud architecture and modern web development.
            </p>

            <div className="space-y-12">
                <ContactForm />

                <div className="border-t pt-8">
                    <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}
