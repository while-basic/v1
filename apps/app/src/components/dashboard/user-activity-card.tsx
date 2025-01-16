import { Card } from "@/components/ui/card";

export function UserActivityCard() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">User Activity</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Active Sessions</p>
          <p className="text-2xl font-bold">42</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">New Users Today</p>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Interactions</p>
          <p className="text-2xl font-bold">1,893</p>
        </div>
      </div>
    </Card>
  );
}
