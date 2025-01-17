"use client";

import { Button } from "@v1/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:chris@chriscelaya.com";
  };

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

      {/* Contact Information */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              {/* Contact Card */}
              <div className="p-8 rounded-lg border bg-card hover:border-primary transition-colors">
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Christopher Celaya
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:chris@chriscelaya.com"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      chris@chriscelaya.com
                    </a>
                  </div>
                  <Button
                    size="lg"
                    className="gap-2 mt-6"
                    onClick={handleEmailClick}
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-12 prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground text-center">
                  Whether you're interested in discussing a project, exploring
                  collaboration opportunities, or just want to connect, I'd love
                  to hear from you. Feel free to reach out through email and
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
