# AGENTS.md — rules for AI agents in this repo

## 1. Committing and pushing

Agents may commit and push once `npm run lint && npm run typecheck &&
npm run build` all pass. Report results honestly, including failures.
Remember pushes to `main` auto-deploy, and this repo is public — anything
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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
