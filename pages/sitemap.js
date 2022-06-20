import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'

import { PAGES_FOLDER } from 'pages'

export async function getStaticProps() {
  const pages = await getAllFilesFrontMatter(PAGES_FOLDER)

  return { props: { pages } }
}

export default function Sitemap({ pages }) {
  return (
    <>
      <PageSEO title={`Sitemap - ${siteMetadata.author}`} description={siteMetadata.description} />
      <header className="text-center pb-10 ">
        <div>
          <PageTitle>Sitemap</PageTitle>
        </div>
      </header>
      <ul>{pages.map((frontMatter) => getPage(frontMatter))}</ul>
    </>
  )
}

function getPage(frontMatter) {
  const { slug, title } = frontMatter
  return (
    <li key={slug} className="py-0">
      <Link href={`/${slug}`} className="text-gray-900 dark:text-gray-100">
        {title}
      </Link>
    </li>
  )
}
