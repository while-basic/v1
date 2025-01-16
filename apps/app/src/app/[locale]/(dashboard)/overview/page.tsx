import { AnalyticsCard } from "@/components/dashboard/analytics-card";
import { AudioStatsCard } from "@/components/dashboard/audio-stats-card";
import { SystemHealthCard } from "@/components/dashboard/system-health-card";
import { UserActivityCard } from "@/components/dashboard/user-activity-card";
import { Card } from "@/components/ui/card";
import { getUser } from "@v1/supabase/queries";

export const metadata = {
  title: "Overview",
};

export default async function OverviewPage() {
  const { data } = await getUser();

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Welcome back, {data?.user?.email?.split("@")[0]}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Now</p>
                <p className="text-2xl font-bold">42</p>
              </div>
            </div>
          </Card>

          <AnalyticsCard />
          <SystemHealthCard />
          <UserActivityCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AudioStatsCard />
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>New user signup</span>
                <span className="text-sm text-muted-foreground">2m ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Track played</span>
                <span className="text-sm text-muted-foreground">5m ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Page visit</span>
                <span className="text-sm text-muted-foreground">12m ago</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
