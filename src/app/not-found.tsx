import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-start gap-4 pt-24">
      <h1 className="silver-text text-5xl font-extrabold">404</h1>
      <p className="text-sm text-muted">
        This page doesn&apos;t exist — but plenty of ideas do.
      </p>
      <Link
        href="/"
        className="rounded-full bg-paper px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white"
      >
        Back home
      </Link>
    </section>
  );
}
