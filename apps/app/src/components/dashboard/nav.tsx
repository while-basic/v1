"use client";

import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart,
  LayoutDashboard,
  Music,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart,
  },
  {
    title: "Audio Content",
    href: "/audio-content",
    icon: Music,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "System Status",
    href: "/system-status",
    icon: Activity,
  },
] as const;

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2 p-4">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground",
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
