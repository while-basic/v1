import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Bell,
  Download,
  FileAudio2,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Upload,
  Users,
} from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    title: "Upload Audio",
    description: "Add new audio content to your library",
    icon: Upload,
    href: "/audio-content",
    color: "bg-blue-500",
  },
  {
    title: "Manage Users",
    description: "View and manage user accounts",
    icon: Users,
    href: "/users",
    color: "bg-green-500",
  },
  {
    title: "System Settings",
    description: "Configure system preferences",
    icon: Settings,
    href: "/settings",
    color: "bg-purple-500",
  },
  {
    title: "View Analytics",
    description: "Check performance metrics",
    icon: LayoutDashboard,
    href: "/analytics",
    color: "bg-orange-500",
  },
] as const;

const recentActivity = [
  {
    action: "New User Registration",
    details: "John Doe joined the platform",
    time: "5 minutes ago",
    icon: Users,
  },
  {
    action: "Audio Upload",
    details: "Summer Vibes.mp3 was uploaded",
    time: "15 minutes ago",
    icon: FileAudio2,
  },
  {
    action: "System Update",
    details: "Platform updated to version 2.1.0",
    time: "1 hour ago",
    icon: Download,
  },
  {
    action: "Support Ticket",
    details: "New support request from Sarah",
    time: "2 hours ago",
    icon: MessageSquare,
  },
] as const;

const notifications = [
  {
    title: "Storage Space Alert",
    message: "Storage usage at 75% capacity",
    type: "warning",
  },
  {
    title: "New Feature Available",
    message: "Try our new batch processing tool",
    type: "info",
  },
  {
    title: "Scheduled Maintenance",
    message: "System maintenance in 2 days",
    type: "info",
  },
] as const;

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid gap-6">
        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link key={action.title} href={action.href}>
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className={cn("p-2 rounded-lg", action.color)}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.action}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-muted rounded-lg">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.details}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <Bell className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.title}
                  className={cn(
                    "p-4 rounded-lg border",
                    notification.type === "warning"
                      ? "bg-yellow-50 border-yellow-200"
                      : "bg-blue-50 border-blue-200",
                  )}
                >
                  <h3
                    className={cn(
                      "font-medium",
                      notification.type === "warning"
                        ? "text-yellow-800"
                        : "text-blue-800",
                    )}
                  >
                    {notification.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm mt-1",
                      notification.type === "warning"
                        ? "text-yellow-700"
                        : "text-blue-700",
                    )}
                  >
                    {notification.message}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Active Users
            </h3>
            <p className="text-3xl font-bold mt-2">1,234</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% from last week</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Audio Files
            </h3>
            <p className="text-3xl font-bold mt-2">5,678</p>
            <p className="text-sm text-green-600 mt-1">↑ 8% from last month</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Storage Used
            </h3>
            <p className="text-3xl font-bold mt-2">247.5 GB</p>
            <div className="w-full h-2 bg-muted rounded-full mt-2">
              <div className="w-3/4 h-full bg-blue-500 rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              75% of 500 GB used
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
