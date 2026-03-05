import type { Experience } from "@/data/experience";

interface TimelineItemProps {
  item: Experience;
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      {!isLast && (
        <div className="absolute left-[5px] top-5 h-full w-px bg-accent/20" />
      )}
      <div className="pb-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="font-semibold text-white">{item.role}</h4>
          <span className="text-xs text-muted">{item.period}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent-light">{item.company}</p>
        <ul className="mt-2 space-y-1">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-muted">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
