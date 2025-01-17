"use client";

import { Button } from "@v1/ui/button";
import { Input } from "@v1/ui/input";
import { Textarea } from "@v1/ui/textarea";
import { Mail } from "lucide-react";
import { useFormState } from "react-dom";
import { contactAction } from "@/actions/contact-action";
import { toast } from "sonner";
import { useEffect } from "react";

type FormState = {
  success: boolean;
  errors?: {
    _form?: string;
    name?: string;
    email?: string;
    message?: string;
  };
};

const initialState: FormState = {
  success: false,
  errors: {},
};

export default function ContactPage() {
  const [state, action] = useFormState<FormState, FormData>(
    async (_, formData) => await contactAction(formData),
    initialState
  );

  useEffect(() => {
    if (state.success) {
      toast.success("Message sent successfully!");
      const form = document.querySelector("form");
      if (form) form.reset();
    } else if (state.errors?._form) {
      toast.error(state.errors._form);
    }
  }, [state]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center rounded-3xl overflow-hidden mb-12">
        {/* Background layers */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
          style={{ backgroundPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        
        {/* Content */}
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 drop-shadow-lg max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always open to discussing new opportunities and ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <form action={action} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-describedby="name-error"
                />
                {state.errors?.name && (
                  <p className="mt-1 text-sm text-red-500" id="name-error">
                    {state.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-describedby="email-error"
                />
                {state.errors?.email && (
                  <p className="mt-1 text-sm text-red-500" id="email-error">
                    {state.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-describedby="message-error"
                />
                {state.errors?.message && (
                  <p className="mt-1 text-sm text-red-500" id="message-error">
                    {state.errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>

            {/* Additional Information */}
            <div className="mt-12 prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground text-center">
                Whether you're interested in discussing a project, exploring
                collaboration opportunities, or just want to connect, I'd love
                to hear from you. I'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
