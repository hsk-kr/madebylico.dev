import { site } from "@/site.config";

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-2 border-t border-line py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} Lico</span>
      <span className="flex gap-4">
        <a href={`mailto:${site.email}`} className="transition hover:text-paper">
          {site.email}
        </a>
        <a href={site.github} target="_blank" rel="noreferrer" className="transition hover:text-paper">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-paper">
          LinkedIn
        </a>
      </span>
    </footer>
  );
}
