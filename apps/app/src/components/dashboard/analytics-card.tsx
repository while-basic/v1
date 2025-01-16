import { Card } from "@/components/ui/card";

export function AnalyticsCard() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Page Views (24h)</p>
          <p className="text-2xl font-bold">3,427</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
          <p className="text-2xl font-bold">4m 32s</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Bounce Rate</p>
          <p className="text-2xl font-bold">32%</p>
        </div>
      </div>
    </Card>
  );
}
