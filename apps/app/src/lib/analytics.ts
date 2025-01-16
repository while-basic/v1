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

async function safeTrack(event: string, options: Record<string, any>): Promise<any[]> {
  try {
    const result = await analyticsClient.track(event, options);
    return Array.isArray(result) ? result : [];
  } catch (error) {
    console.error(`Error tracking ${event}:`, error);
    return [];
  }
}

export async function getAnalytics(): Promise<AnalyticsData> {
  const [pageViews, visitors, sessions] = await Promise.all([
    safeTrack("page_view", {
      interval: "1d",
      limit: 30,
    }),
    safeTrack("visitor", {
      interval: "1d",
      limit: 30,
    }),
    safeTrack("session", {
      interval: "1d",
      limit: 30,
    }),
  ]);

  const topPages = await safeTrack("page_view", {
    groupBy: "page",
    interval: "30d",
    limit: 5,
  });

  const engagement = await safeTrack("engagement", {
    interval: "30d",
  });

  const bounceRate = await safeTrack("bounce", {
    interval: "30d",
  });

  const returnUsers = await safeTrack("return_user", {
    interval: "30d",
  });

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