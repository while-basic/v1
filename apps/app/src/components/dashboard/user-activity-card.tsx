import { Card } from "@/components/ui/card";
import type { MetricData } from "@/lib/analytics";

interface UserActivityCardProps {
  returnUsers: MetricData[];
}

export function UserActivityCard({ returnUsers }: UserActivityCardProps) {
  const currentReturnUsers = returnUsers?.[0]?.value ?? 0;
  const previousReturnUsers = returnUsers?.[1]?.value ?? 0;
  const returnUserChange = previousReturnUsers > 0
    ? ((currentReturnUsers - previousReturnUsers) / previousReturnUsers) * 100
    : 0;

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">User Activity</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Return Users</p>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold">{currentReturnUsers.toLocaleString()}</p>
            <p className={`text-sm ${returnUserChange >= 0 ? "text-green-500" : "text-red-500"}`}>
              {returnUserChange >= 0 ? "+" : ""}{returnUserChange.toFixed(1)}%
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Previous Period</p>
          <p className="text-2xl font-bold">{previousReturnUsers.toLocaleString()}</p>
        </div>
      </div>
    </Card>
  );
}
