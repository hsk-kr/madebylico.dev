import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  projectFrontmatterSchema,
  type ProjectFrontmatter,
} from "@/lib/schema";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

export type Project = ProjectFrontmatter & { slug: string; body: string };

export function getAllProjects(): Project[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const parsed = projectFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      // Failing the build on bad frontmatter is intentional (guards AI edits).
      throw new Error(
        `Invalid frontmatter in content/projects/${file}:\n${parsed.error.message}`,
      );
    }
    return { ...parsed.data, slug, body: content };
  });

  return projects.sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) ||
      b.date.getTime() - a.date.getTime(),
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
