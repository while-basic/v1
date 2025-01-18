"use client";

import { Button } from "@/components/ui/button";
import { track } from "@v1/analytics/client";
import { setupAnalytics } from "@v1/analytics/server";
import { useEffect } from "react";

export function AnalyticsTest() {
  useEffect(() => {
    const initAnalytics = async () => {
      const analytics = await setupAnalytics({
        userId: "test-user-123",
        fullName: "Test User",
      });

      // Test server-side tracking
      await analytics.track({
        event: "analytics_test_initialized",
        userId: "test-user-123",
        source: "server",
      });
    };

    initAnalytics().catch((error) => {
      console.error("Failed to initialize analytics:", error);
    });
  }, []);

  const handleClientEvent = async () => {
    await track({
      event: "test_button_clicked",
      source: "client",
      buttonId: "test-button",
      timestamp: new Date().toISOString(),
    });
  };

  const handleCustomEvent = async () => {
    await track({
      event: "custom_event",
      source: "client",
      customData: {
        type: "test",
        value: Math.random(),
        metadata: {
          browser: navigator.userAgent,
          screen: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        },
      },
    });
  };

  const handleErrorEvent = async () => {
    try {
      // Simulate an error
      throw new Error("Test error event");
    } catch (error) {
      await track({
        event: "error_occurred",
        source: "client",
        error: error instanceof Error ? error.message : "Unknown error",
        severity: "low",
        type: "test",
      });
    }
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-semibold mb-4">Analytics Test Panel</h2>
      <div className="space-y-2">
        <Button
          onClick={handleClientEvent}
          className="w-full"
          variant="default"
        >
          Trigger Basic Event
        </Button>
        <Button
          onClick={handleCustomEvent}
          className="w-full"
          variant="secondary"
        >
          Trigger Custom Event
        </Button>
        <Button
          onClick={handleErrorEvent}
          className="w-full"
          variant="destructive"
        >
          Trigger Error Event
        </Button>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Check the browser console and server logs for tracking results
      </div>
    </div>
  );
}
