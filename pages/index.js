import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { POSTS_FOLDER } from './news'

export const PAGES_FOLDER = '_pages'

const MAX_POSTS = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(POSTS_FOLDER)

  return { props: { posts } }
}

export default function Homepage({ posts }) {
  console.error('Homepage')
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div>
        <header>
          <h2 className="text-4xl font-bold italic pb-10 text-center tracking-tight border-b border-gray-200 dark:border-gray-700">
            Welcome to Penistone Footpath Runners
          </h2>
        </header>

        <Image
          src="http://pfrac.co.uk/wp-content/uploads/2014/10/Silkstone_Shuffle_3_2014_1.jpg"
          width="1024"
          height="220"
          alt="No pain, no gain"
        />

        <div className="sm:grid sm:grid-cols-9 sm:gap-x-10 border-none border-gray-200 dark:border-gray-700">
          <div className="sm:col-span-3 py-8 ">
            <h3 className="text-xl font-bold tracking-tight text-center pb-3 ">New Members</h3>
            <div className="text-sm text-justify ">
              We're a friendly bunch and always keen to welcome new members. If you're interested in
              joining, then come down to one of our training sessions.{' '}
              <Link
                href={`/about/membership`}
                className="text-sm text-primary-500 dark:hover:text-primary-400 pl-1"
              >
                more info &raquo;
              </Link>
            </div>
          </div>

          <div className="sm:col-span-3 py-8 ">
            <h3 className="text-xl font-bold tracking-tight text-center pb-3 ">
              Training Sessions
            </h3>
            <div className="text-sm text-justify ">
              We meet at Penistone Football Club on Tuesday and Thursday evenings at 6.30pm. There
              is usually a mixture of road and off-road runs to suit all abilities.{' '}
              <Link
                href={`/about/training`}
                className="text-sm text-primary-500 dark:hover:text-primary-400  pl-1"
              >
                more info &raquo;
              </Link>
            </div>
          </div>

          <div className="sm:col-span-3 py-8 ">
            <h3 className="text-xl font-bold tracking-tight text-center pb-3 ">Juniors</h3>
            <div className="text-sm text-justify ">
              We have a very popular Juniors section run by fully qualified instructors with many
              years of experience aimed at all age groups from 8 years and above.{' '}
              <Link
                href={`/about/juniors`}
                className="text-sm text-primary-500 dark:hover:text-primary-400  pl-1"
              >
                more info &raquo;
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-9 sm:gap-x-8 border-none border-gray-200 dark:border-gray-700">
          <div className="sm:col-span-3 py-8 ">
            <h3 className="text-xl font-bold tracking-tight text-center pb-3 ">Fell Running</h3>
            <div className="text-sm text-justify">
              We have a popular fell running section of the club including a fell league,
              orienteering events short and long runs. In the summer we have more regular fell runs
              including meets over at Langsett.{' '}
              <Link
                href={`/about/fell-running`}
                className="text-sm text-primary-500 dark:hover:text-primary-400  pl-1"
              >
                more info &raquo;
              </Link>
            </div>
          </div>
          <div className="sm:col-span-3 py-8 ">
            <h3 className="text-xl font-bold tracking-tight text-center pb-3 ">Road Running</h3>
            <div className="text-sm text-justify ">
              Our most popular type of running is on roads with a variety of distances to suit. We
              run the Penistone 10k race and also have a parkrun competition.{' '}
              <Link
                href={`/about/road-running`}
                className="text-sm text-primary-500 dark:hover:text-primary-400  pl-1"
              >
                more info &raquo;
              </Link>
            </div>
          </div>
          <div className="sm:col-span-3 py-8 ">
            <h3 className="text-xl font-bold tracking-tight text-center pb-3 ">
              Trail / Cross Country
            </h3>
            <div className="text-sm text-justify ">
              We operate some popular local trail races including the Thurlstone Chase and Penistone
              Hill Race. We also compete cross country competitions.{' '}
              <Link
                href={`/about/cross-country`}
                className="text-sm text-primary-500 dark:hover:text-primary-400  pl-1"
              >
                more info &raquo;
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-center py-8 ">Latest News</h2>

        <div className="sm:grid sm:grid-cols-9 sm:gap-x-4">
          {posts.slice(0, MAX_POSTS).map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <div
                key={slug}
                className="sm:col-span-3 p-5 border border-gray-200 dark:border-gray-700"
              >
                <dl>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">
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
                  className="text-sm text-primary-500 dark:hover:text-primary-400"
                >
                  read article
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
