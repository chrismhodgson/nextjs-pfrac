import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function RacePagesLayout({ frontMatter, children, menu }) {
  const {
    title,
    category,
    start_date_time,
    distance,
    strava_url,
    entry,
    organiser,
    header,
  } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <header className="pb-12">
          <PageTitle>{title}</PageTitle>
          <Image
            src={'/static/images/headers/' + (header || 'default.jpg')}
            width="1024"
            height="210"
            alt="No pain, no gain"
          />
        </header>

        <div className="md:grid md:grid-cols-8 md:gap-x-8">
          <div className="md:col-span-3 pb-10">
            <h3 className="text-sm pb-3 uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              Section Menu
            </h3>
            <ul>
              {menu.map((item) => (
                <li key={item.slug} className="py-2 border-b border-gray-200 dark:border-gray-700">
                  <Link
                    href={'/' + item.slug}
                    className="dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5  prose dark:prose-dark max-w-non">
            <dl className="pb-2">
              {start_date_time && (
                <>
                  <dt className="pt-1">Start Date/Time</dt>
                  <dd className="text-gray-500 dark:text-gray-400">{start_date_time}</dd>
                </>
              )}

              {category && (
                <>
                  <dt className="pt-1">Category</dt>
                  <dd className="text-gray-500 dark:text-gray-400">{category}</dd>
                </>
              )}

              {distance && (
                <>
                  <dt className="pt-1">Distance</dt>
                  <dd className="text-gray-500 dark:text-gray-400">{distance}</dd>
                </>
              )}

              {organiser && (
                <>
                  <dt className="pt-1">Organiser</dt>
                  <dd className="text-gray-500 dark:text-gray-400">{organiser}</dd>
                </>
              )}
            </dl>

            {children}

            <dl className="pb-2">
              {entry && (
                <>
                  <dt className="pt-1">Entry</dt>
                  <dd className="text-gray-500 dark:text-gray-400">{entry}</dd>
                </>
              )}

              {strava_url && (
                <>
                  <dt className="py-1">Strava Map</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    <iframe
                      title="strava"
                      src={strava_url}
                      style={{ width: '100%', height: '400px', display: 'block' }}
                    />
                  </dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
