import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { POSTS_FOLDER } from './news'
import homepageSections from '../data/homepageSections'
import featuredRaces from '../data/featuredRaces'
import formatDate from '@/lib/utils/formatDate'
import PageTitle from '@/components/PageTitle'
// import PageTitle from '@/components/PageTitle'

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

      <header className="sm:pb-6">
        <PageTitle>Penistone Footpath Runners &amp; AC</PageTitle>

        <Image
          src="/static/images/headers/home.jpg"
          width="1024"
          height="210"
          alt="Penistone Footpath Runners (PFRAC)"
        />
      </header>

      <div className="sm:grid sm:grid-cols-2 sm:gap-x-10">
        <div className="sm:col-span-1 ">
          <h3 className="text-2xl my-4">Latest News</h3>

          {posts.slice(0, MAX_POSTS).map((frontMatter) => {
            const { slug, date, title } = frontMatter
            return (
              <div key={slug} className="pb-4 border-b1 dark:border-gray-400">
                <Link
                  href={`/news/${slug}`}
                  className="text-md dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {title}
                </Link>
                <dl>
                  <dd className="pt-0.5 text-sm dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
              </div>
            )
          })}
        </div>

        <div className="sm:col-span-1 border-t pt-8 sm:pt-0 mt-4 sm:border-t-0 dark:border-gray-400">
          <h3 className="text-2xl mb-4">Featured Races</h3>

          <div className="sm:grid sm:grid-cols-2">
            {featuredRaces.map((section) => {
              const { href, title, distance, ascent, category, month } = section
              return (
                <div key={href} className="sm:col-span-1 pb-6">
                  <Link
                    href={href}
                    className="text-lg dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {title}
                  </Link>

                  <div className="pt-2 text-sm dark:text-gray-400">
                    Month: {month}
                    <br />
                    Category: {category}
                    <br />
                    Distance: {distance}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-2 sm:mt-14 py-4 border-t border-b dark:border-gray-400">
        <div className="sm:grid sm:grid-cols-8 sm:gap-x-10">
          {homepageSections.map((section) => {
            const { title, description, href } = section
            return (
              <div key={href} className="sm:col-span-2 py-4 sm:p-2">
                <Link href={href} className="dark:text-primary-400 dark:hover:text-primary-300">
                  <div className="text-lg pb-2">{title}</div>
                </Link>
                <div className="dark:text-gray-400 text-justify1">{description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
