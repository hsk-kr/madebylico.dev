import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/StatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group rounded-2xl border border-line bg-glass p-4 backdrop-blur-sm transition hover:border-neutral-500"
    >
      <div className="relative mb-3 aspect-video overflow-hidden rounded-lg bg-neutral-900">
        <Image
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          fill
          unoptimized
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-bold">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-1 text-xs leading-relaxed text-muted">
        {project.oneLiner}
      </p>
      {project.tech.length > 0 && (
        <p className="mt-2 text-[10px] uppercase tracking-wider text-faint">
          {project.tech.join(" · ")}
        </p>
      )}
    </Link>
  );
}
