import { OpenPanel } from "@openpanel/nextjs";
import { env } from "@/env.mjs";

interface MetricData {
  value: number;
  timestamp: string;
  duration?: number;
}

interface PageViewData extends MetricData {
  page: string;
}

interface AnalyticsData {
  pageViews: MetricData[];
  visitors: MetricData[];
  sessions: MetricData[];
  topPages: PageViewData[];
  engagement: MetricData[];
  bounceRate: MetricData[];
  returnUsers: MetricData[];
}

export const analyticsClient = new OpenPanel({
  clientId: env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
  clientSecret: env.OPENPANEL_SECRET_KEY,
});

async function safeTrack<T extends MetricData[] | PageViewData[]>(
  event: string,
  options: Record<string, unknown>,
  type: "page_view" | "metric" = "metric",
): Promise<T> {
  try {
    const result = await analyticsClient.track(event, options);
    return (Array.isArray(result) ? result : []) as T;
  } catch (error) {
    console.error(`Error tracking ${event}:`, error);
    return (
      type === "page_view" ? ([] as PageViewData[]) : ([] as MetricData[])
    ) as T;
  }
}

export async function getAnalytics(): Promise<AnalyticsData> {
  const [pageViews, visitors, sessions] = await Promise.all([
    safeTrack<MetricData[]>(
      "page_view",
      {
        interval: "1d",
        limit: 30,
      },
      "metric",
    ),
    safeTrack<MetricData[]>(
      "visitor",
      {
        interval: "1d",
        limit: 30,
      },
      "metric",
    ),
    safeTrack<MetricData[]>(
      "session",
      {
        interval: "1d",
        limit: 30,
      },
      "metric",
    ),
  ]);

  const topPages = await safeTrack<PageViewData[]>(
    "page_view",
    {
      groupBy: "page",
      interval: "30d",
      limit: 5,
    },
    "page_view",
  );

  const engagement = await safeTrack<MetricData[]>(
    "engagement",
    {
      interval: "30d",
    },
    "metric",
  );

  const bounceRate = await safeTrack<MetricData[]>(
    "bounce",
    {
      interval: "30d",
    },
    "metric",
  );

  const returnUsers = await safeTrack<MetricData[]>(
    "return_user",
    {
      interval: "30d",
    },
    "metric",
  );

  return {
    pageViews,
    visitors,
    sessions,
    topPages,
    engagement,
    bounceRate,
    returnUsers,
  };
}
