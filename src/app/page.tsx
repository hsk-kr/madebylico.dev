import { getAllProjects } from "@/lib/projects";
import { site } from "@/site.config";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactBand } from "@/components/ContactBand";

export default function Home() {
  const projects = getAllProjects();
  const liveCount = projects.filter((p) => p.status === "live").length;
  const wipCount = projects.filter(
    (p) => p.status === "prototype" || p.status === "idea",
  ).length;

  return (
    <>
      <section className="max-w-2xl pb-10 pt-16 sm:pt-24">
        <h1 className="silver-text text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          Ideas, shipped early.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          I&apos;m Lico. I build fast prototypes and put every idea out in the
          open — finished or not. Take one, use one, or tell me which deserves
          to grow.
        </p>
        <div className="mt-7 flex gap-3">
          <a
            href="#projects"
            className="rounded-full bg-paper px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white"
          >
            See projects
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-neutral-700 px-5 py-2 text-sm font-semibold text-paper transition hover:border-neutral-400"
          >
            Email me
          </a>
        </div>
        <div className="mt-10 flex gap-8 text-xs text-muted">
          {liveCount > 0 && (
            <span>
              <b className="block text-base text-paper">{liveCount}</b> live
            </span>
          )}
          {wipCount > 0 && (
            <span>
              <b className="block text-base text-paper">{wipCount}</b> in the
              open
            </span>
          )}
          <span>
            <b className="block text-base text-paper">∞</b> ideas
          </span>
        </div>
      </section>

      <section id="projects" className="scroll-mt-8 pb-14">
        <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-faint">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
