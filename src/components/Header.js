'use client'
import Image from "next/image";
import offer from "../../public/offers.png";
import siteIcon from "../../public/siteIcon.jpg";
import toast, { Toaster } from 'react-hot-toast';
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Link from "next/link";
import styles from '../styles/header.module.css'
import { Helmet } from "react-helmet";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Header = () => {
  const router = useRouter()
  const { data: session, status } = useSession();
  const [currentRole, setCurrentRole] = useState('')

  if (session && session.accessToken === undefined) {
    // Call signOut function
    signOut();
    // Redirect or perform any other action after signing out
    // For example, you can redirect the user to the homepage
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // const isoDate = "2024-03-04T18:02:44.315Z";
  // const humanReadableDate = new Date(isoDate).toLocaleString();
  // console.log(humanReadableDate);

  const handleSignOut = ()=>{
    signOut({ redirect: false }).then(() => {
      router.push("/"); // Redirect to the dashboard page after signing out
  })
  }

  if (status == 'loading') {
    return null
  }


  return (
    <nav className="bg-white  shadow-2xl  bg-gradient-to-r from-emerald-500 from-90% to-emerald-500 to-20%">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex gap-2 items-center">
          <Image
            src={siteIcon}
            alt="No Image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="self-center text-xl md:text-lg lg:text-2xl font-semibold whitespace-nowrap text-slate-600">
            Azwaajum Muthohharoh
          </span>
        </Link>
        <div className="flex md:order-2 gap-2">


          {/* 
          <div id="account_click" className={`${styles.dropdown}  cursor-pointer border px-3 py-1 outline-0 rounded-lg relative hidden md:block bg-emerald-500 hover:bg-white text-white hover:text-gray-500`}>
            <span className="absolute flex h-3 w-3 -top-2 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <div className={` inline-block relative`}>
              <span className={`h-full mb-4`}>
                My Account
              </span>
              <ul className={`${styles.dropdown_menu} absolute hidden text-gray-700 pt-4 w-36 -right-3 z-40 shadow-2xl`}>
                <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap" href="#">Profile</a></li>
                <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap" href="#">Register</a></li>
                <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap" href="#">Login</a></li>
              </ul>
            </div>
          </div> 
        */}

          {
            status === 'authenticated' ? (
              <>
                <div className={`${styles.drops} flex flex-col gap-1 divide-y-1 relative hidden md:block`}>
                  <span className="absolute flex h-3 w-3 -top-2 right-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                  My Account
                  <ul className={`${styles.drop_menu}`}>
                    <li><Link className="text-left pl-2" href="/ui/profile/user">Profile</Link></li>
                    <li> <button className="text-left pl-2" onClick={() => handleSignOut()} type="button" >Logout</button> </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.drop} flex flex-col gap-1 divide-y-1 relative hidden md:block`}>
                  <span className="absolute flex h-3 w-3 -top-2 right-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                  My Account
                  <ul className={`${styles.drop_menu}`}>

                    <li><Link className="text-left pl-2" href="/ui/auth/register">Register</Link></li>
                    <li><Link className="text-left pl-2" href="/ui/auth/login">Login</Link></li>
                  </ul>
                </div>
              </>
            )
          }




          {/* for responsive screen*/}
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
          {/* for responsive screen*/}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          {/* <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div> */}


          <ul className="flex flex-row justify-center items-center md:gap-4 lg:gap-10 xl:gap-12 gap-3 p-4 md:p-0">
            <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
              <Link
                href="/"
                className="block py-2 md:text-md lg:text-xl pl-3 pr-4 text-white font-semibold rounded  md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {
              status === 'authenticated' ? (
                <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
                  <Link
                    href="/ui/biodata"
                    className="block py-2 md:text-lg lg:text-xl pl-3 pr-4 text-white rounded font-semibold md:p-0 dark:border-gray-700"
                  >
                    Make-bio
                  </Link>
                </li>
              ) : ""
            }

            <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
              <Link
                href="/ui/faq"
                className="block py-2 md:text-lg lg:text-xl pl-3 pr-4 text-white rounded font-semibold md:p-0 "
              >
                FAQ
              </Link>
            </li>
            <li className="hover:transition ease-in delay-150  hover:-translate-y-1   duration-300">
              <Link
                href="/ui/contact"
                className="block py-2 md:text-lg lg:text-xl pl-3 pr-4 text-white rounded font-semibold md:p-0 "
              >
                Contact us
              </Link>
            </li>

          </ul>
        </div>
        <Toaster />
      </div>
    </nav>
  );
};

export default Header;
