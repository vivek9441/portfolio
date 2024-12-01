import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";
import { trpc } from "@/lib/trpc/client";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: "onChange",
    });

    const { mutate: sendContactForm, isLoading } = trpc.contact.submit.useMutation({
        onSuccess: () => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            reset();
        },
        onError: (error) => {
            toast({
                title: "Error sending message",
                description: error.message || "Please try again later.",
                variant: "destructive",
            });
        },
        onSettled: () => {
            setIsSubmitting(false);
        },
    });

    async function onSubmit(data: ContactFormData) {
        setIsSubmitting(true);
        sendContactForm(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
                <Input
                    {...register("name")}
                    placeholder="Your name"
                    className="w-full"
                    disabled={isSubmitting}
                />
                {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
            </div>
            <div className="space-y-2">
                <Input
                    {...register("email")}
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                    disabled={isSubmitting}
                />
                {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
            </div>
            <div className="space-y-2">
                <Textarea
                    {...register("message")}
                    placeholder="Your message"
                    className="min-h-[150px]"
                    disabled={isSubmitting}
                />
                {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
            </div>
            <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={isSubmitting || !isValid}
                aria-disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <span className="loading loading-spinner loading-sm mr-2" />
                        Sending...
                    </>
                ) : (
                    "Send Message"
                )}
            </Button>
        </form>
    );
}
