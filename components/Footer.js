import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-10">
        {/* <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div> */}
        <div className="flex pb-5 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            {`© ${new Date().getFullYear()} `}
            <Link
              href="/"
              className="whitespace-nowrap dark:text-primary-400 dark:hover:text-primary-300"
            >
              {siteMetadata.title}
            </Link>

            <span className="text-xs px-1">|</span>

            <Link
              href="/calendar"
              className="whitespace-nowrap dark:text-primary-400 dark:hover:text-primary-300"
            >
              Calendar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
