"use client";

import { cn } from "@v1/ui/cn";
import { useInView } from "react-intersection-observer";

interface SkillCardProps {
  title: string;
  technologies: string[];
  description: string;
  icon?: React.ReactNode;
}

export function SkillCard({
  title,
  technologies,
  description,
  icon,
}: SkillCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "p-6 rounded-lg border bg-card hover:bg-accent/5 transition-all duration-300",
        "transform hover:-translate-y-1 hover:shadow-lg",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
    >
      <div className="flex items-start gap-4">
        {icon && <div className="p-2 rounded-lg bg-primary/10">{icon}</div>}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
