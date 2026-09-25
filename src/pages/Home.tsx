import { Link } from 'react-router-dom'

const projectsData = [
  {
    name: 'Rate This University Professor',
    description:
      'A set of chrome extensions that add integration of Rate My Professor to the university course registration pages.',
    image: './rtup/RTBYUP.png',
    imageClass: 'p-1 rounded-2xl w-16 h-16',
    link: '/ratethisprofessor',
    linkText: 'View Project Page',
    linkInternal: true,
  },
  {
    name: 'Kuna Physical Therapy',
    description:
      'A custom website for Kuna Physical Therapy built from scratch using React, including an embedded form for scheduling appointments.',
    image: 'https://kunaphysicaltherapy.com/kuna-logo-icon.svg',
    link: 'https://kunaphysicaltherapy.com',
    linkText: 'Visit Website',
    repo: 'https://github.com/stephenday1/kunapt',
  },
  {
    name: 'Fratter Frame Photography',
    description:
      'A custom website for Fratter Frame Photography built from scratch using React, including a portfolio and gallery sharing platform through Cloudflare R2 storage.',
    image: './favicon.svg',
    imageClass: 'w-12 h-12 my-2',
    link: 'https://fratterframesphotography.web.app/',
    linkText: 'Visit Website',
    repo: 'https://github.com/stephenday1/fratterframesphotography',
  },
  // {
  //   name: 'BYU Broadcasting Job',
  //   description:
  //     'I currently work at BYU Broadcasting as a student computer programmer, working on the websites and backend servers for BYUtv and BYUradio.',
  //   image: 'https://www.byutv.org/images/byutv-logo.svg',
  //   imageClass: '',
  //   link: 'https://www.byutv.org',
  //   linkText: 'BYUtv',
  //   repo: 'https://www.byuradio.org',
  //   repoText: 'BYUradio',
  // },
  {
    name: 'Lensflare Galleries',
    description:
      [
        'A work in progress software service called Lensflare Galleries that photographers will be able to use to publish and share galleries.',
        'Currently this project is built on the same structure as the Fratter Frame Photography website, with some restructuring allowing for multiple users to have their own galleries.',
      ],
    image: './lensflareicon.svg',
    imageClass:
      'w-16 h-16 pb-2 px-1 object-left object-contain scale rounded-2xl',
    link: 'https://lensflaregalleries.web.app/',
    linkText: 'Visit Website',
  },
  {
    name: 'Trash Panda Hauling and Demo',
    description:
      'A simple website for Trash Panda Hauling and Demo use advertising and scheduling services.',
    image: './trash-panda-logo.png',
    imageClass: 'w-12 h-12 my-2',
    link: 'https://trashpandahaulingdemo.com/',
    linkText: 'Visit Website',
  },
  {
    name: 'TeachIdaho Econ Summit App',
    description:
      'A web app used by students participating in the Teach Idaho Econ Summit to trade goods and services with other students and learn more about economics principles.',
    image: 'https://www.teachidaho.org/assets/teachidaho-logo-C2DaVk65.png',
    imageClass: 'w-16 h-16 object-left object-contain scale rounded-2xl',
    link: 'https://www.teachidaho.org/info/trading-app',
    linkText: 'View App Overview',
  },
  {
    name: 'Neopply Stripe Payment System',
    description:
      'Stripe payment system implemented for Neopply, a platform for helping students find programs to participate in.',
    image: 'https://www.neopply.com/NeopplyWithoutWords.png',
    imageClass: 'w-16 h-16 p-1 rounded-2xl',
    link: 'https://www.neopply.com',
    linkText: 'Visit Website',
  },
]

export default function Home() {
  return (
    <>
    <div className="p-4 text-center my-4">
      <h2 className="text-3xl font-semibold tracking-tight">My Portfolio</h2>
    </div>
    <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
      {projectsData.map((project) => (
        <div
          key={project.name}
          className="flex flex-col gap-2 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="shrink-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className={`object-cover ${project.imageClass ? project.imageClass : 'h-16 w-16'}`}
              />
            </div>
            <h3 className="text-2xl font-semibold">{project.name}</h3>
          </div>
          {
            Array.isArray(project.description) ? (
              project.description.map((item) => (
                <p key={item} className="text-slate-400">{item}</p>
              ))
            ) : (
              <p className="text-slate-400">{project.description}</p>
            )
          }
          <div className="mt-auto flex flex-col gap-4 md:flex-row">
            {project.link &&
              (project.linkInternal ? (
                <Link
                  to={project.link}
                  className="w-full rounded-md bg-slate-700 px-4 py-2 text-center text-sm text-slate-200 transition-colors hover:bg-slate-600"
                >
                  {project.linkText}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => window.open(project.link, '_blank')}
                  className="w-full cursor-pointer rounded-md bg-slate-700 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-600"
                >
                  {project.linkText}
                </button>
              ))}
            {project.repo && (
              <button
                type="button"
                onClick={() => window.open(project.repo, '_blank')}
                className="w-full cursor-pointer rounded-md bg-slate-700 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-600"
              >
                {/* {project.repoText ? project.repoText : 'Github Repository'} */}
                Github Repository
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
    </>
  )
}
