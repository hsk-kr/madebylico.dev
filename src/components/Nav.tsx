import Link from "next/link";

export function Nav() {
  return (
    <header className="flex items-center justify-between border-b border-line py-5 text-sm">
      <Link href="/" className="font-extrabold tracking-[0.25em]">
        MADEBYLICO
      </Link>
      <nav className="flex gap-6 text-muted">
        <Link href="/#projects" className="transition hover:text-paper">
          Projects
        </Link>
        <Link href="/#contact" className="transition hover:text-paper">
          Contact
        </Link>
      </nav>
    </header>
  );
}
