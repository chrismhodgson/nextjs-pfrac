import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Link from '@/components/Link'

export default function AboutPagesLayout({ frontMatter, children, menu }) {
  const { title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>

          <div className="sm:grid sm:grid-cols-8 sm:gap-x-6">
            <div className="sm:col-span-3 border">
              <h3 className="text-sm pb-7 uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                Menu
              </h3>
              <ul>
                {menu.map((item) => (
                  <li
                    key={item.slug}
                    className="py-2 border-b border-gray-200 dark:border-gray-700"
                  >
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
            <div className="sm:col-span-5 border  border pb-8 prose dark:prose-dark">
              {children}
            </div>
            {/* <div className="md:col-span-2">
              <h3 className="text-sm pb-8 uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                Results
              </h3>
            </div> */}
          </div>

          {/* <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
          </div> */}
        </div>
      </article>
    </SectionContainer>
  )
}
