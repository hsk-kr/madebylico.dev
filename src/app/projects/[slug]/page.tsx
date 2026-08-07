import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { StatusBadge } from "@/components/StatusBadge";
import { ContactBand } from "@/components/ContactBand";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: { images: [project.thumbnail] },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="pt-10 sm:pt-14">
      <Link href="/#projects" className="text-xs text-faint transition hover:text-paper">
        ← All projects
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {project.title}
        </h1>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        {project.tech.length > 0 && (
          <span className="uppercase tracking-wider">
            {project.tech.join(" · ")}
          </span>
        )}
        {project.url && (
          <a href={project.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:text-paper">
            Visit site ↗
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:text-paper">
            Source ↗
          </a>
        )}
      </p>
      <div className="mdx mt-8 max-w-2xl">
        <MDXRemote source={project.body} />
      </div>
      <div className="mt-12">
        <ContactBand />
      </div>
    </article>
  );
}
