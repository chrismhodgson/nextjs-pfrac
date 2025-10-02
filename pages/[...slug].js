import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { PAGES_FOLDER } from 'index-old'

const DEFAULT_LAYOUT = 'PageLayout'

export async function getStaticPaths() {
  const pages = getFiles(PAGES_FOLDER)
  return {
    paths: pages.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPages = await getAllFilesFrontMatter(PAGES_FOLDER)
  const pageIndex = allPages.findIndex((page) => formatSlug(page.slug) === params.slug.join('/'))
  const prev = allPages[pageIndex + 1] || null
  const next = allPages[pageIndex - 1] || null
  const page = await getFileBySlug(PAGES_FOLDER, params.slug.join('/'))
  const authorList = page.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  const rss = generateRss(allPages)
  fs.writeFileSync('./public/feed.xml', rss)

  const layout = getLayout(params.slug)
  const menu = getMenu(allPages, params.slug)

  return { props: { page, authorDetails, prev, next, layout, menu } }
}

function getLayout(slug) {
  if (['about', 'competitions'].includes(slug[0] /*&& slug.length > 1*/)) {
    return 'AboutPagesLayout'
  }
  if (['races'].includes(slug[0] /*&& slug.length > 1*/)) {
    return 'RacePagesLayout'
  }
  return DEFAULT_LAYOUT
}

function getMenu(pages, slug) {
  const filtered = pages.filter((page) => page.slug.startsWith(slug[0]) && slug[0] !== page.slug)
  return filtered.sort((a, b) => (a.order > b.order ? 1 : -1))
}

export default function Page({ page, authorDetails, prev, next, layout, menu }) {
  const { mdxSource, toc, frontMatter } = page

  return (
    <MDXLayoutRenderer
      layout={layout}
      mdxSource={mdxSource}
      menu={menu}
      frontMatter={frontMatter}
    />
  )
}
