import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { PAGES_FOLDER } from 'pages'

export const PAGES_PER_PAGE = 15

export async function getStaticProps() {
  const pages = await getAllFilesFrontMatter(PAGES_FOLDER)
  const initialDisplayPages = pages.slice(0, PAGES_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(pages.length / PAGES_PER_PAGE),
  }

  return { props: { initialDisplayPages, pages, pagination } }
}

export default function PageList({ pages, initialDisplayPages, pagination }) {
  return (
    <>
      <PageSEO title={`Sitemap - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={pages}
        initialDisplayPosts={initialDisplayPages}
        pagination={pagination}
        title="All Pages"
      />
    </>
  )
}
