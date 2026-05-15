import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Daniel Silva Barrera',
  description:
    'Head of AI and AI Product Manager bridging advanced analytics with high-impact business decisions.',
  href: 'https://danielsilvabarrera.com',
  author: 'Daniel Silva Barrera',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'posts',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/daniels13ca',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/danielsilvabarrera',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:silvdaniel@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
