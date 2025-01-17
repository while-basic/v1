import { Card } from "@/components/ui/card";
import type { MetricData } from "@/lib/analytics";

interface AnalyticsCardProps {
  pageViews: MetricData[];
  engagement: MetricData[];
  bounceRate: MetricData[];
}

export function AnalyticsCard({ pageViews, engagement, bounceRate }: AnalyticsCardProps) {
  const currentPageViews = pageViews?.[0]?.value ?? 0;
  const avgEngagement = engagement?.[0]?.value ?? 0;
  const currentBounceRate = bounceRate?.[0]?.value ?? 0;

  // Format engagement time (assuming it's in seconds)
  const formatEngagement = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Page Views (24h)</p>
          <p className="text-2xl font-bold">{currentPageViews.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
          <p className="text-2xl font-bold">{formatEngagement(avgEngagement)}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Bounce Rate</p>
          <p className="text-2xl font-bold">{currentBounceRate.toFixed(1)}%</p>
        </div>
      </div>
    </Card>
  );
}
