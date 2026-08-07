import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { site } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.domain}/`, priority: 1 },
    ...getAllProjects().map((project) => ({
      url: `${site.domain}/projects/${project.slug}/`,
      lastModified: project.date,
    })),
  ];
}
