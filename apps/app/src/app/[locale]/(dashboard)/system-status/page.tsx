import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock,
  Database,
  HardDrive,
  type LucideIcon,
  Server,
} from "lucide-react";

const services = [
  {
    name: "API Server",
    status: "operational",
    responseTime: "45ms",
    uptime: "99.99%",
    icon: Server,
  },
  {
    name: "Database",
    status: "operational",
    responseTime: "12ms",
    uptime: "99.95%",
    icon: Database,
  },
  {
    name: "Storage",
    status: "degraded",
    responseTime: "156ms",
    uptime: "99.87%",
    icon: HardDrive,
  },
  {
    name: "CDN",
    status: "operational",
    responseTime: "23ms",
    uptime: "99.99%",
    icon: Activity,
  },
] as const;

const incidents = [
  {
    title: "Storage Performance Degradation",
    status: "investigating" as const,
    time: "2 hours ago",
    description: "We are investigating reports of slow storage access times.",
  },
  {
    title: "API Rate Limiting Issue",
    status: "resolved" as const,
    time: "1 day ago",
    description:
      "Rate limiting was incorrectly applied to authenticated users.",
  },
  {
    title: "Database Maintenance",
    status: "completed" as const,
    time: "3 days ago",
    description: "Scheduled database maintenance and optimization.",
  },
] as const;

function StatusIndicator({ status }: { status: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          status === "operational" && "bg-green-500",
          status === "degraded" && "bg-yellow-500",
          status === "down" && "bg-red-500",
        )}
      />
      <span
        className={cn(
          "text-sm font-medium capitalize",
          status === "operational" && "text-green-700",
          status === "degraded" && "text-yellow-700",
          status === "down" && "text-red-700",
        )}
      >
        {status}
      </span>
    </div>
  );
}

const statusIcons = {
  investigating: AlertCircle,
  resolved: CheckCircle2,
  completed: Clock,
} as const;

type IncidentStatus = keyof typeof statusIcons;

function IncidentStatus({ status }: { status: IncidentStatus }) {
  const Icon = statusIcons[status];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status === "investigating" && "bg-yellow-100 text-yellow-800",
        status === "resolved" && "bg-green-100 text-green-800",
        status === "completed" && "bg-blue-100 text-blue-800",
      )}
    >
      <Icon className="mr-1 h-3 w-3" />
      {status}
    </div>
  );
}

export default function SystemStatusPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">System Status</h1>

      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Service Status</h2>
          <div className="grid gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <service.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <StatusIndicator status={service.status} />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      Response Time
                    </p>
                    <p className="font-medium">{service.responseTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Uptime</p>
                    <p className="font-medium">{service.uptime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">System Metrics</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">CPU Usage</span>
                  <span className="text-sm text-muted-foreground">45%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full w-[45%] bg-blue-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Memory Usage</span>
                  <span className="text-sm text-muted-foreground">72%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full w-[72%] bg-yellow-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Disk Space</span>
                  <span className="text-sm text-muted-foreground">28%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full w-[28%] bg-green-500 rounded-full" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div
                  key={incident.title}
                  className="border-b last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium">{incident.title}</p>
                    <IncidentStatus status={incident.status} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {incident.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {incident.time}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
