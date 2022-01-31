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
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLondon&showTitle=0&showTz=0&hl=en_GB&src=dHJhY3lqaG9kZ3NvbkBnbWFpbC5jb20&color=%23E67C73"
          style={{ width: '100%', height: '600px', display: 'block' }}
        ></iframe>
      </div>
      <div className="iframe-mobile">
        <iframe
          title="mobile"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLondon&showTitle=0&showDate=0&showPrint=0&showTz=0&mode=AGENDA&hl=en_GB&src=aGVsbG9AY2hyaXNob2Rnc29ud2ViLmNvLnVr&src=Y2hyaXNob2Rnc29ud2ViLmNvLnVrX2w1OTF0cTluNWU2dnY0cGdvZGNiMDZjOG1zQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2hyaXNob2Rnc29ud2ViLmNvLnVrX3E0YWRodTBrZG11azFlODhjaHBjcmxxNHQ4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2hyaXNob2Rnc29ud2ViLmNvLnVrX2VxYzh0Mzk0bWo3c2ltZDA3bXJzcHVmNmJjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2hyaXNob2Rnc29ud2ViLmNvLnVrX2kyaWJ2anRqNmRzampzOTg1OTg1YmU5djRzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2hyaXNob2Rnc29ud2ViLmNvLnVrX2Y0Z2w0MWZvcmNscDIzNzJkYzdsMXBrMzFvQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2hyaXNob2Rnc29ud2ViLmNvLnVrX3ZuaGVidnUzN3U1ZWFmMWlyOHMxNzltNzBvQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=dHJhY3lqaG9kZ3NvbkBnbWFpbC5jb20&color=%23D50000&color=%233F51B5&color=%2333B679&color=%23F6BF26&color=%238E24AA&color=%237CB342&color=%23B39DDB&color=%23616161&color=%23E67C73"
          style={{ width: '100%', height: '600px', display: 'block' }}
        ></iframe>
      </div>
    </>
  )
}
