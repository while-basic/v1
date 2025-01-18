import { MobileNav } from "../components/mobile-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <MobileNav />
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/system-integration"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/system-integration" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            System Integration
          </Link>
          <Link
            href="/software-development"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/software-development" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Software Development
          </Link>
          <Link
            href="/industrial-technology"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/industrial-technology" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Industrial Technology
          </Link>
          <Link
            href="/audio-engineering"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/audio-engineering" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Audio Engineering
          </Link>
          <Link
            href="/gallery"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/gallery" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
