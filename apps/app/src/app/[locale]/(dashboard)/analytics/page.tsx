import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Analytics",
};

export default function AnalyticsPage() {
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
                <p className="text-2xl font-bold">12,543</p>
                <p className="text-sm text-green-500">+12.3% from last month</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Unique Visitors</p>
                <p className="text-2xl font-bold">5,271</p>
                <p className="text-sm text-green-500">+8.1% from last month</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Avg. Session Duration
                </p>
                <p className="text-2xl font-bold">4m 23s</p>
                <p className="text-sm text-red-500">-2.5% from last month</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
            <div className="space-y-4">
              {[
                { page: "/home", views: "3,456" },
                { page: "/audio/popular", views: "2,123" },
                { page: "/users/profile", views: "1,654" },
                { page: "/settings", views: "892" },
              ].map((item) => (
                <div
                  key={item.page}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm font-medium">{item.page}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.views} views
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
                <p className="text-2xl font-bold">67.8%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bounce Rate</p>
                <p className="text-2xl font-bold">32.2%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Return Users</p>
                <p className="text-2xl font-bold">45.9%</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
