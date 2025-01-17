import { Card } from "@/components/ui/card";
import { getAnalytics } from "@/lib/analytics";

export const metadata = {
  title: "Analytics",
};

export default async function AnalyticsPage() {
  const {
    pageViews,
    visitors,
    sessions,
    topPages,
    engagement,
    bounceRate,
    returnUsers,
  } = await getAnalytics();

  // Calculate percentage changes with null checks
  const pageViewsChange =
    pageViews?.length >= 2
      ? ((pageViews[0].value - pageViews[1].value) / pageViews[1].value) * 100
      : 0;

  const visitorsChange =
    visitors?.length >= 2
      ? ((visitors[0].value - visitors[1].value) / visitors[1].value) * 100
      : 0;

  const avgSessionDuration =
    sessions?.length > 0
      ? sessions.reduce((acc, session) => acc + (session.duration ?? 0), 0) /
        sessions.length
      : 0;

  const sessionDurationChange =
    sessions?.length >= 2
      ? (((sessions[0].duration ?? 0) - (sessions[1].duration ?? 0)) /
          (sessions[1].duration ?? 1)) *
        100
      : 0;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>

      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Page Views</p>
                <p className="text-2xl font-bold">
                  {pageViews?.[0]?.value ?? 0}
                </p>
                <p
                  className={`text-sm ${pageViewsChange >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {pageViewsChange >= 0 ? "+" : ""}
                  {pageViewsChange.toFixed(1)}% from last month
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Unique Visitors</p>
                <p className="text-2xl font-bold">
                  {visitors?.[0]?.value ?? 0}
                </p>
                <p
                  className={`text-sm ${visitorsChange >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {visitorsChange >= 0 ? "+" : ""}
                  {visitorsChange.toFixed(1)}% from last month
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Avg. Session Duration
                </p>
                <p className="text-2xl font-bold">
                  {Math.floor(avgSessionDuration / 60)}m{" "}
                  {Math.floor(avgSessionDuration % 60)}s
                </p>
                <p
                  className={`text-sm ${sessionDurationChange >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {sessionDurationChange >= 0 ? "+" : ""}
                  {sessionDurationChange.toFixed(1)}% from last month
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
            <div className="space-y-4">
              {(topPages ?? []).map((item) => (
                <div
                  key={item.page}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm font-medium">{item.page}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.value} views
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">User Engagement</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
                <p className="text-2xl font-bold">
                  {((engagement?.[0]?.value ?? 0) * 100).toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bounce Rate</p>
                <p className="text-2xl font-bold">
                  {((bounceRate?.[0]?.value ?? 0) * 100).toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Return Users</p>
                <p className="text-2xl font-bold">
                  {((returnUsers?.[0]?.value ?? 0) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
