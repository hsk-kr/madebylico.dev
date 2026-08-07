# AGENTS.md — rules for AI agents in this repo

## 1. NEVER commit or push. No exceptions.

You must NEVER run `git commit`, `git push`, `gh` write commands, or any
operation that writes to the GitHub repository. When your changes are ready:

1. Run `npm run lint && npm run typecheck && npm run build` and report the
   results honestly, including failures.
2. Stop and present the full diff (`git diff` / `git status`) to the owner.
3. The owner personally reviews and performs the commit and push.

"The change is trivial" is not an exception. This repo is public; anything
pushed is exposed immediately and permanently.

## 2. This repo is PUBLIC — data hygiene

- Never write secrets, tokens, credentials, `.env` values, server hostnames
  or IPs into any file.
- The site identity is **"Lico"**. The owner's real name must not appear in
  site content or code. The only published contact info:
  hsk.coder@gmail.com · https://github.com/hsk-kr ·
  https://www.linkedin.com/in/dev-licokr/
- `.superpowers/`, `docs/superpowers/`, `.claude/`, and `.env*` are
  gitignored AI/working files. Never remove those ignore rules.

## 3. Content conventions

- Adding a project = one `content/projects/<slug>.mdx` + a thumbnail at
  `public/projects/<slug>/thumb.png` (16:9, ~1200px wide).
- Frontmatter must satisfy `src/lib/schema.ts` (zod) — the build fails
  otherwise, on purpose. Required: title, oneLiner, status
  (live|prototype|idea|retired), tech (list), thumbnail, date.
  Optional: url, repo, featured.
- Site-wide values (email, links, meta) live ONLY in `src/site.config.ts`.

## 4. Verification before handoff

Before asking for review: `npm run lint && npm run typecheck && npm run build`
must all pass locally, and for visual changes check both a desktop and a
~390px-wide mobile viewport.
