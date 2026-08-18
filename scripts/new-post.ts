#!/usr/bin/env bun
/**
 * Scaffolds a new blog post under src/content/blog/<slug>/index.mdx
 *
 * Usage:
 *   bun run new-post -- --title "My Post Title" --description "Short summary" \
 *     [--slug custom-slug] [--tags "Tag One,Tag Two"] [--author daniel-silva-barrera] \
 *     [--date 2026-08-18] [--draft]
 *
 * Only --title and --description are required; everything else has a sensible default.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog')
const AUTHORS_DIR = join(ROOT, 'src', 'content', 'authors')

function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents (combining diacritical marks)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function listAuthors(): string[] {
  if (!existsSync(AUTHORS_DIR)) return []
  return readdirSync(AUTHORS_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''))
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

function toYamlArray(values: string[]): string {
  return `[${values.map((v) => `'${v.replace(/'/g, "\\'")}'`).join(', ')}]`
}

function yamlString(value: string): string {
  return `'${value.replace(/'/g, "\\'")}'`
}

function parseArgs(argv: string[]) {
  const args: Record<string, string | boolean> = {}
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (!arg.startsWith('--')) continue
    const key = arg.slice(2)
    const next = argv[i + 1]
    if (next === undefined || next.startsWith('--')) {
      args[key] = true // boolean flag, e.g. --draft
    } else {
      args[key] = next
      i++
    }
  }
  return args
}

function printHelp() {
  console.log(`Scaffold a new blog post.

Usage:
  bun run new-post -- --title "My Post Title" --description "Short summary" [options]

Options:
  --title        Post title (required)
  --description  Short summary shown in listings and meta tags (required)
  --slug         URL slug (default: derived from the title)
  --tags         Comma separated list of tags (optional)
  --author       Author id from src/content/authors (default: first author found)
  --date         ISO date, YYYY-MM-DD (default: today)
  --draft        Mark the post as a draft (hidden from the site until removed)
  --help         Show this message
`)
}

function main() {
  const args = parseArgs(process.argv.slice(2))

  if (args.help) {
    printHelp()
    return
  }

  const title = typeof args.title === 'string' ? args.title.trim() : ''
  if (!title) {
    console.error('Error: --title is required.\n')
    printHelp()
    process.exit(1)
  }

  const description =
    typeof args.description === 'string' ? args.description.trim() : ''
  if (!description) {
    console.error('Error: --description is required.\n')
    printHelp()
    process.exit(1)
  }

  const slug = slugify(
    typeof args.slug === 'string' && args.slug.trim() ? args.slug : title,
  )
  if (!slug) {
    console.error('Error: could not derive a valid slug from the title.')
    process.exit(1)
  }

  const postDir = join(BLOG_DIR, slug)
  if (existsSync(postDir)) {
    console.error(`Error: a post already exists at src/content/blog/${slug}`)
    process.exit(1)
  }

  const tags =
    typeof args.tags === 'string'
      ? args.tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean)
      : []

  const availableAuthors = listAuthors()
  const author =
    typeof args.author === 'string' && args.author.trim()
      ? args.author.trim()
      : availableAuthors[0]

  if (author && !availableAuthors.includes(author)) {
    console.error(
      `Error: unknown author "${author}". Available authors: ${availableAuthors.join(', ') || '(none found)'}`,
    )
    process.exit(1)
  }

  const date =
    typeof args.date === 'string' && args.date.trim()
      ? args.date.trim()
      : todayISO()

  const draft = args.draft === true

  const frontmatterLines = [
    '---',
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    `date: ${date}`,
    ...(tags.length ? [`tags: ${toYamlArray(tags)}`] : []),
    ...(author ? [`authors: ${toYamlArray([author])}`] : []),
    `draft: ${draft}`,
    '---',
    '',
    'Write your post here.',
    '',
  ]

  mkdirSync(postDir, { recursive: true })
  const filePath = join(postDir, 'index.mdx')
  writeFileSync(filePath, frontmatterLines.join('\n'))

  console.log(`Created src/content/blog/${slug}/index.mdx\n`)
  console.log('Next steps:')
  console.log('  1. Edit the post content in your editor.')
  console.log(
    "  2. (Optional) drop a cover image in the same folder and add `image: './cover.png'` to the frontmatter.",
  )
  console.log('  3. Preview locally: bun run dev, then open')
  console.log(`     http://localhost:1234/blog/${slug}`)
  console.log(
    '  4. When ready to publish: make sure draft is false, then commit and push to master (GitHub Actions deploys automatically).',
  )
}

main()
