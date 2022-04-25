import PageTitle from '@/components/PageTitle'

export default function Calendar() {
  return (
    <>
      <header className="text-center pb-10 ">
        <div>
          <PageTitle>Calendar</PageTitle>
        </div>
      </header>

      <div className="iframe-screen">
        <iframe
          title="desktop"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLondon&showTitle=0&showTz=0&hl=en_GB&src=NjVoaTZubzJzZGs2bnYybGthMjI2dDU0ajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73"
          style={{ width: '100%', height: '600px', display: 'block' }}
        ></iframe>
      </div>
      <div className="iframe-mobile">
        <iframe
          title="mobile"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLondon&showTitle=0&showDate=0&showPrint=0&showTz=0&mode=AGENDA&hl=en_GB&src=NjVoaTZubzJzZGs2bnYybGthMjI2dDU0ajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73"
          style={{ width: '100%', height: '600px', display: 'block' }}
        ></iframe>
      </div>
    </>
  )
}
