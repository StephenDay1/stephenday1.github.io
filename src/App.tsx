import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-slate-700 bg-slate-900 px-4 py-2 shadow-lg">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="https://avatars.githubusercontent.com/u/57306301?s=48&v=4"
          alt="Stephen Day"
          className="h-12 w-12 overflow-hidden rounded-full border border-slate-700 object-cover"
        />
        <h1 className="text-3xl font-semibold tracking-tight">Stephen Day</h1>
      </Link>
      <a
        className="absolute right-4 cursor-pointer rounded-full hover:bg-slate-800"
        href="https://github.com/stephenday1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          className="h-10 w-10 rounded-full object-cover invert transition-all duration-500 hover:invert-0"
        />
      </a>
    </header>
  )
}

/** Wrap routes that should show the site header. */
export function WithHeader() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <main className="min-h-svh bg-slate-800 pb-12 text-slate-50">
      <Outlet />
    </main>
  )
}
