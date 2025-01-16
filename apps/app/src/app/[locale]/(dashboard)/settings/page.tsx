"use client";

import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import {
  Bell,
  Globe,
  Lock,
  Mail,
  Moon,
  Palette,
  Shield,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const settingsSections = [
  {
    title: "Profile",
    icon: User,
    items: [
      { label: "Display Name", value: "Admin User" },
      { label: "Email", value: "admin@example.com" },
      { label: "Role", value: "Administrator" },
    ],
  },
  {
    title: "Appearance",
    icon: Palette,
    items: [
      { label: "Theme", value: "System" },
      { label: "Color Scheme", value: "Default" },
      { label: "Font Size", value: "Medium" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    items: [
      { label: "Email Notifications", value: "Enabled" },
      { label: "Push Notifications", value: "Disabled" },
      { label: "Alert Sounds", value: "Enabled" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      { label: "Two-Factor Auth", value: "Enabled" },
      { label: "Login History", value: "View" },
      { label: "Active Sessions", value: "2 devices" },
    ],
  },
] as const;

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm text-muted-foreground">{value}</span>
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isLight, setIsLight] = useState(theme === "light");

  const toggleTheme = () => {
    const newTheme = isLight ? "dark" : "light";
    setIsLight(!isLight);
    setTheme(newTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground",
        "h-9 px-4 py-2",
      )}
    >
      {isLight ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function QuickActions() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {[
        { icon: Mail, label: "Update Email" },
        { icon: Lock, label: "Change Password" },
        { icon: Shield, label: "Security Check" },
      ].map((action) => (
        <button
          type="button"
          key={action.label}
          className="inline-flex items-center justify-center gap-2 rounded-lg border p-3 text-sm font-medium hover:bg-muted"
        >
          <action.icon className="h-4 w-4" />
          {action.label}
        </button>
      ))}
    </div>
  );
}

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Preferences</h2>
            <ThemeToggle />
          </div>
          <QuickActions />
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {settingsSections.map((section) => (
            <Card key={section.title} className="p-6">
              <div className="mb-6 flex items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-2">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <div className="space-y-1 divide-y">
                {section.items.map((item) => (
                  <SettingRow
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
