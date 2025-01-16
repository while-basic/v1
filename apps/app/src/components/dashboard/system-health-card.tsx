import { Card } from "@/components/ui/card";

export function SystemHealthCard() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">System Health</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Server Status</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <p className="text-sm font-medium">Operational</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Response Time</p>
          <p className="text-2xl font-bold">124ms</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Uptime</p>
          <p className="text-2xl font-bold">99.9%</p>
        </div>
      </div>
    </Card>
  );
}
