# danielsilvabarrera.com

Personal site built with Astro and `astro-erudite`, deployed to GitHub Pages.

## Stack

- Astro
- `astro-erudite`
- MDX content collections
- GitHub Pages via GitHub Actions

## Content structure

- `src/content/authors`: author profiles
- `src/content/blog`: blog posts
- `src/content/projects`: standalone project entries
- `public/docs`: downloadable documents such as the resume
- `public/images`: shared site images

## Development

```bash
bun install
bun run dev
```

Site runs at http://localhost:1234.

## Creating a new post

```bash
bun run new-post -- --title "My Post Title" --description "Short summary"
```

This scaffolds `src/content/blog/<slug>/index.mdx` with frontmatter filled in
and prints the local preview URL. Useful flags:

- `--slug custom-slug` — override the auto-generated slug (from the title)
- `--tags "Tag One,Tag Two"` — comma separated tags
- `--author some-author-id` — must match a file in `src/content/authors`
  (defaults to the first author found)
- `--date 2026-08-18` — defaults to today
- `--draft` — mark the post as a draft; drafts are excluded from every page,
  listing, and RSS feed, even in dev mode

Run `bun run new-post -- --help` for the full option list.

To preview: `bun run dev`, then open `http://localhost:1234/blog/<slug>`.
(Drop an optional cover image in the post's folder and reference it with
`image: './cover.png'` in the frontmatter.)

## Publishing

Nothing goes live until it's pushed to `master` — GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds and
deploys the site to GitHub Pages on every push to that branch. To publish a
post: make sure `draft` is `false` (or remove the field), then commit and
push to `master`.

```bash
git add src/content/blog/<slug>
git commit -m "Add post: <title>"
git push
```

## Build

```bash
bun run build
```
