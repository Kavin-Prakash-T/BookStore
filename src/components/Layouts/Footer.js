import { Link } from "react-router-dom"

export const Footer = () => {
  return (

    <footer className="bg-white  shadow-sm  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">BookStore™</Link> . All  Rights  Reserved .
        </span>
        <ul className="flex flex-wrap items-center p-2 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a rel="noreferrer" href="https://www.instagram.com/_ka.v.i.n_/" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a rel="noreferrer" href="https://youtube.com" target="_blank" className="hover:underline me-4 md:me-6">Youtube</a>
          </li>
          <li>
            <a rel="noreferrer" href="https://www.linkedin.com/in/kavin-prakash-t-57345b32a" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a rel="noreferrer" href="https://github.com/Kavin-Prakash-T" target="_blank" className="hover:underline">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>


  )
}