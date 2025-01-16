import { Card } from "@/components/ui/card";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const popularityData = [
  { day: "Mon", height: 40 },
  { day: "Tue", height: 65 },
  { day: "Wed", height: 45 },
  { day: "Thu", height: 90 },
  { day: "Fri", height: 85 },
  { day: "Sat", height: 60 },
  { day: "Sun", height: 70 },
];

export function AudioStatsCard() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Audio Statistics</h2>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground">Total Plays Today</p>
          <p className="text-2xl font-bold">247</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Most Played Track</p>
          <p className="text-lg font-medium">Summer Vibes</p>
          <p className="text-sm text-muted-foreground">84 plays</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Average Listen Time</p>
          <p className="text-2xl font-bold">3:24</p>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Popular Times</h3>
          <div className="flex items-end space-x-1 h-16">
            {popularityData.map(({ day, height }) => (
              <div
                key={day}
                className="flex-1 bg-primary/10 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            {WEEKDAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
