import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Audio Content",
};

export default function AudioManagementPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Audio Content Management</h1>

      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Uploads</h2>
          <div className="space-y-4">
            {[
              {
                title: "Summer Vibes",
                artist: "DJ Cool",
                duration: "3:45",
                uploaded: "2h ago",
                status: "Processing",
              },
              {
                title: "Midnight Jazz",
                artist: "The Smooth Quartet",
                duration: "5:12",
                uploaded: "5h ago",
                status: "Live",
              },
              {
                title: "Electronic Dreams",
                artist: "Synth Master",
                duration: "4:20",
                uploaded: "1d ago",
                status: "Live",
              },
            ].map((track) => (
              <div
                key={track.title}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {track.artist}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {track.duration}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {track.uploaded}
                  </span>
                  <span
                    className={cn(
                      "text-sm px-2 py-1 rounded-full",
                      track.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700",
                    )}
                  >
                    {track.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Storage Usage</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Storage Used
                </p>
                <p className="text-2xl font-bold">247.5 GB</p>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                  <div className="w-3/4 h-full bg-blue-500 rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  75% of 500 GB used
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Tracks</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Duration</p>
                <p className="text-2xl font-bold">82.5 hours</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average Quality</p>
                <p className="text-2xl font-bold">320 kbps</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
