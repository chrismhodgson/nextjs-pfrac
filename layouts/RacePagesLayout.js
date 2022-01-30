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
    type,
    start_date_time,
    distance,
    strava_url,
    google_maps_url,
    entry,
    registration,
    organiser,
    header,
  } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <header className="pb-12">
          <div className="text-center pb-8">
            <PageTitle>{title}</PageTitle>
          </div>
          <Image
            src={'/static/images/headers/' + (header || 'Barnsley_Boundary_2014_2.jpg')}
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
                    href={item.slug}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5  prose dark:prose-dark max-w-non">
            <dl>
              {type && (
                <>
                  <dt className="">Race Type</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">{type}</dd>
                </>
              )}

              {start_date_time && (
                <>
                  <dt className="">Start Date/Time</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">{start_date_time}</dd>
                </>
              )}

              {distance && (
                <>
                  <dt className="">Distance</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">{distance}</dd>
                </>
              )}

              {entry && (
                <>
                  <dt className="">Entry</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">{entry}</dd>
                </>
              )}

              {registration && (
                <>
                  <dt className="">Registration</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">{registration}</dd>
                </>
              )}

              {organiser && (
                <>
                  <dt className="">Organiser</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">{organiser}</dd>
                </>
              )}

              {strava_url && (
                <>
                  <dt className="">Strava Map</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">
                    <iframe title="strava" src={strava_url} />
                  </dd>
                </>
              )}

              {google_maps_url && (
                <>
                  <dt className="">Google Map</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">
                    <iframe title="googlemaps" src={google_maps_url} />
                  </dd>
                </>
              )}
            </dl>
            {children}
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
