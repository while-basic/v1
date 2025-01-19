"use client";

import { cn } from "@v1/ui/cn";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  title: string;
  level: number;
  description: string;
}

export function SkillBar({ title, level, description }: SkillBarProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-accent/30 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-primary rounded-full transition-all duration-1000 ease-out",
            inView ? "w-full" : "w-0",
          )}
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
