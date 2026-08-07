import type { ProjectStatus } from "@/lib/schema";

const styles: Record<ProjectStatus, string> = {
  live: "bg-paper text-ink",
  prototype: "border border-neutral-400 text-neutral-200",
  idea: "border border-dashed border-neutral-500 text-neutral-400",
  retired: "bg-neutral-800 text-neutral-500",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${styles[status]}`}
    >
      {status}
    </span>
  );
}
