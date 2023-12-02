import Image from "next/image";
import offer from "../../public/offers.png";
import siteIcon from "../../public/siteIcon.jpg";
import Link from "next/link";
const Header = () => {
  return (
    <nav class="bg-white  shadow-2xl  bg-gradient-to-r from-emerald-500 from-90% to-emerald-500 to-20%">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex gap-2 items-center">
          <Image
            src={siteIcon}
            alt="No Image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span class="self-center text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap text-slate-600">
            Azwaajum Muthohharoh
          </span>
        </a>
        <div class="flex md:order-2 gap-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden  rounded-lg"
          >
            <Image src={offer} alt="No Image" width={30} height={30} />
          </button>
          <div className=" border px-2 py-1 outline-0 rounded-lg relative hidden md:block bg-emerald-500 hover:bg-white text-white hover:text-gray-500">
            <span class="absolute flex h-3 w-3 -top-2 right-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <button className="h-full">Announcement</button>
          </div>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul class="flex flex-row justify-center items-center md:gap-5 lg:gap-10 xl:gap-12 gap-4 p-4 md:p-0">
            <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
              <Link
                href="/"
                class="block py-2 md:text-lg lg:text-xl pl-3 pr-4 text-white font-semibold rounded  md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
              <Link
                href="/ui/about"
                class="block py-2 md:text-lg lg:text-xl pl-3 pr-4 text-white rounded font-semibold md:p-0 dark:border-gray-700"
              >
                About Us
              </Link>
            </li>
            <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
              <Link
                href="/ui/faq"
                class="block py-2 md:text-lg lg:text-xl pl-3 pr-4 text-white rounded font-semibold md:p-0 "
              >
                FAQ
              </Link>
            </li>
            <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
              <a
                href="/ui/contact"
                class="block py-2 md:text-lg lg:text-xl pl-3 pr-4 text-white rounded font-semibold md:p-0 "
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

export default Header;
