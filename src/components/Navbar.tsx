import { useState } from "react";
import classNames from "classnames";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <nav className="fixed bg-white/50 border-gray-200 dark:bg-black/20 z-10 text-sm top-0 w-full backdrop-blur-md">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 lg:px-0 lg:py-4">
        <h1 className="text-base lg:text-sm">Marcelo Arias</h1>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={classNames("w-full md:w-auto", {
            "hidden md:block": !isNavbarOpen,
          })}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-black/80 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#welcome"
                className="block py-2 pl-3 pr-4 text-dark rounded md:bg-transparent md:text-dark md:p-0 dark:text-white md:dark:text-white dark:hover:text-white md:hover:underline underline-offset-4"
                aria-current="page"
              >
                Hello
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="block py-2 pl-3 pr-4 text-dark rounded md:bg-transparent md:text-dark md:p-0 dark:text-white md:dark:text-white dark:hover:text-white md:hover:underline underline-offset-4"
                aria-current="page"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 pl-3 pr-4 text-dark rounded md:bg-transparent md:text-dark md:p-0 dark:text-white md:dark:text-white dark:hover:text-white md:hover:underline underline-offset-4"
                aria-current="page"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 text-dark rounded md:bg-transparent md:text-dark md:p-0 dark:text-white md:dark:text-white dark:hover:text-white md:hover:underline underline-offset-4"
                aria-current="page"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
