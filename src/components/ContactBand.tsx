import { site } from "@/site.config";

export function ContactBand() {
  return (
    <section
      id="contact"
      className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-md sm:p-8"
    >
      <h2 className="text-xl font-bold">Any idea here is yours to take.</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        If something clicks — or you want to build on one of these — email me
        at{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-paper underline decoration-neutral-600 underline-offset-4 transition hover:decoration-paper"
        >
          {site.email}
        </a>
        . I&apos;d rather see an idea live than keep it in a drawer.
      </p>
    </section>
  );
}
