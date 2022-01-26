import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { PAGES_FOLDER } from 'pages'

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
  switch (slug[0]) {
    case 'about':
    case 'competitions':
      return 'AboutPagesLayout'
    case 'races':
      return 'RacePagesLayout'
    default:
      return DEFAULT_LAYOUT
  }
}

function getMenu(pages, slug) {
  return pages.filter((page) => {
    return page.slug.startsWith(slug[0]) && slug[0] !== page.slug
  })
}

export default function Page({ page, authorDetails, prev, next, layout, menu }) {
  const { mdxSource, toc, frontMatter } = page

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          //layout={frontMatter.layout || DEFAULT_LAYOUT}
          layout={layout}
          // toc={toc}
          mdxSource={mdxSource}
          menu={menu}
          frontMatter={frontMatter}
          // authorDetails={authorDetails}
          // prev={prev}
          // next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
