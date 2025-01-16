"use client";

import { Button } from "@v1/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@v1/ui/dialog";
import { Github } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { SubscribeForm } from "./subscribe-form";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-semibold">
            Christopher Celaya
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="text-sm hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/audio"
              className="text-sm hover:text-primary transition-colors"
            >
              Audio
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/while-basic"
              className="text-sm px-4 py-2 bg-primary text-secondary rounded-full font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Sign In
            </a>

            <Dialog>
              <DialogTrigger asChild>
                <span className="text-sm px-4 py-2 bg-secondary text-primary rounded-full font-medium cursor-pointer">
                  Get updates
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Stay updated</DialogTitle>
                  <DialogDescription>
                    Subscribe to our newsletter to get the latest news and
                    updates.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                  <SubscribeForm
                    group="v1-newsletter"
                    placeholder="Email address"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
