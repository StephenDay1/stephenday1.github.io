import { useEffect, useState } from 'react'

const universities = [
  {
    name: 'BYU',
    icon: '/rtup/BYU.svg',
    url: 'https://chromewebstore.google.com/detail/bdhjildnnfjkjlejbbjonkkegojchgha?utm_source=github-page',
  },
  {
    name: 'UVU',
    icon: '/rtup/UVU.png',
    url: 'https://chromewebstore.google.com/detail/aijmgaelakebamabmlodeclppecefanm?utm_source=github-page',
  },
]

export default function RateThisProfessor() {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const icon = document.querySelector<HTMLLinkElement>("link[rel='icon']")
    const previousHref = icon?.getAttribute('href')
    const previousType = icon?.getAttribute('type')
    const previousTitle = document.title

    if (icon) {
      icon.href = '/rtup/RTBYUP.png'
      icon.type = 'image/png'
    }
    document.title = 'Rate This University Professor'

    return () => {
      document.title = previousTitle
      if (!icon) return
      if (previousHref) icon.href = previousHref
      if (previousType) icon.type = previousType
      else icon.removeAttribute('type')
    }
  }, [])

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-2 bg-black/50 transition-opacity duration-300 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-slate-700 bg-slate-900 px-4 py-2 shadow-lg">
        <img
          src="/rtup/RTBYUP.png"
          alt="Rate This BYU Professor"
          className="h-20 w-20 rounded-2xl object-cover p-1"
        />
        <h2 className="text-3xl font-semibold tracking-tight">
          Rate This University Professor
        </h2>
      </div>
      <section className="mx-auto flex max-w-3xl flex-col gap-6 p-4 pb-12">
        <p className="text-lg leading-relaxed text-slate-300">
          A set of chrome extensions that add integration of Rate My Professor to
          the university course registration pages, allowing you to see ratings and
          reviews while you build your schedule while never opening another tab.
        </p>
        <div
          className="relative z-5 rounded-xl border border-slate-700 bg-slate-900 p-4 text-center hover:border-slate-500 transition-all duration-300"
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
        >
          <h3 className="pb-4 text-lg font-bold">
            Install the extension for your university
          </h3>

          <div className="mt-auto flex flex-col gap-4 md:flex-row">
            {universities.map((university) => (
              <a
                href={university.url}
                key={university.name}
                className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white px-4 py-2"
              >
                <img
                  src={university.icon}
                  alt={`Rate This ${university.name} Professor`}
                  className="transition-all duration-300 hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold">Conveniently see ratings and reviews</h2>
        <p>
          Each professor&apos;s name will update to show a color representing their
          rating. You can hover over a professor&apos;s name to see the details of
          their rating, or click on it to open the full Rate My Professor page.
        </p>
        <img
          src="/rtup/ClassList-1.1-1280x800.png"
          alt="How it works"
          className="rounded-xl"
        />
        <h2 className="text-2xl font-bold">We may not find every professor</h2>
        <p>
          If we can&apos;t find a professor, you can still easily search for them
          yourself by clicking on their name
        </p>
        <img
          src="/rtup/RateMyProfessorsResultsNoRatingFound.png"
          alt="How it works"
          className="rounded-xl"
        />
      </section>
    </>
  )
}
