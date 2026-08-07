import { z } from "zod";

export const projectStatusSchema = z.enum([
  "live",
  "prototype",
  "idea",
  "retired",
]);
export type ProjectStatus = z.infer<typeof projectStatusSchema>;

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  oneLiner: z.string().min(1).max(160),
  status: projectStatusSchema,
  tech: z.array(z.string()),
  url: z.url().optional(),
  repo: z.url().optional(),
  thumbnail: z.string().startsWith("/"),
  date: z.coerce.date(),
  featured: z.boolean().default(false),
});
export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
