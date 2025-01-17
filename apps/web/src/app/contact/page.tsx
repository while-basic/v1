"use client";

import { Button } from "@v1/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:chris@chriscelaya.com';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              I'm always open to discussing new opportunities and interesting projects.
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
                  <h2 className="text-2xl font-bold mb-4">Christopher Celaya</h2>
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
                  Whether you're interested in discussing a project, exploring collaboration opportunities,
                  or just want to connect, I'd love to hear from you. Feel free to reach out through email
                  and I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking forward to discussing how we can collaborate on your next project.
            </p>
            <Button 
              size="lg" 
              className="gap-2"
              onClick={handleEmailClick}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 