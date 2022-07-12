import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { POSTS_FOLDER } from './news'
import homepageSections from '../data/homepageSections'
import formatDate from '@/lib/utils/formatDate'
import PageTitle from '@/components/PageTitle'

export const PAGES_FOLDER = '_pages'

const MAX_POSTS = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(POSTS_FOLDER)

  return { props: { posts } }
}

export default function Homepage({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <header className="pb-6">
        <div className="text-center pb-8">
          <PageTitle>Penistone Footpath Runners &amp; AC</PageTitle>
        </div>

        <Image
          src="/static/images/headers/home.jpg"
          width="1024"
          height="210"
          alt="No pain, no gain"
        />
      </header>

      <div className="sm:grid sm:grid-cols-9 sm:gap-x-10">
        {homepageSections.map((section) => {
          const { title, description, href } = section
          return (
            <div key={href} className="sm:col-span-3 py-4 sm:py-8">
              <h3 className="text-xl font-bold tracking-tight text-center pb-3 ">{title}</h3>
              <div className="text-sm text-justify ">
                {description}{' '}
                <Link
                  href={href}
                  className="whitespace-nowrap text-sm font-bold dark:text-primary-400 dark:hover:text-primary-300 pl-1"
                >
                  More info
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <h3 className="text-center pb-2 pt-8 text-3xl font-bold dark:text-gray-100">Latest News</h3>

      <div className="pb-6 text-center">
        Read the latest
        <Link href="/news" className="dark:text-primary-400 px-2">
          news and events
        </Link>
        from the club
      </div>

      <div className="sm:grid sm:grid-cols-9 sm:gap-x-4">
        {posts.slice(0, MAX_POSTS).map((frontMatter) => {
          const { slug, date, title, summary } = frontMatter
          return (
            <div key={slug} className="sm:col-span-3 p-5 mb-3 border-2 dark:border-gray-400">
              <dl>
                <dd className="text-sm dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                </dd>
              </dl>
              <h3 className="text-lg font-bold pb-2 ">{title}</h3>
              <div className="text-sm">
                {summary ||
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper posuere interdum. '}
              </div>
              <Link
                href={`/news/${slug}`}
                className="text-sm dark:text-primary-400 dark:hover:text-primary-300"
              >
                Read article
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
