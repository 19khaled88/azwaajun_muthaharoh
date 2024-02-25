'use client'

import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import {usePathname} from 'next/navigation'
import { useEffect, useState } from "react";
import { RotatingLines } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
// import decodedToken from '../utils/decodeToken'
const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const pathName = usePathname()
  const { data: session, status } = useSession();

  const [currentRole, setCurrentRole] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (session && session !== undefined) {
      setCurrentRole(session.role)
      setLoading(false)
      // fetchData(session)
    }else if( session === undefined){
      setLoading(true)
    }
    else if (session === null ) {
      router.push('/ui/auth/login')
    }
    else {
      setLoading(true)
    }
  
  }, [session,router])


  if (loading) {
    return (
      <div className="flex flex-row justify-center items-center h-screen">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )

  }


  if (currentRole && currentRole !== 'ADMIN') {
    router.push('/')
  }


  if (currentRole && currentRole === 'ADMIN') {
    return (
      <div className="flex ">
        <aside className="flex-[2] ">
          {/* Include shared UI here e.g. a sidebar */}
          <div className="flex flex-col min-h-screen ">
            <div>
              <p className="text-center md:p-3 text-md md:text-lg lg:text-2xl text-amber-700 border border-emerald-400 m-1">Azwajum Muthoharao</p>
            </div>
            <div className="flex-auto flex flex-col py-5 pl-3">
              <div className="flex-auto flex flex-col gap-1">
                <Link href='/dashboard/Bio_List' className={`${pathName === '/dashboard/Bio_List' ? 'bg-blue-400 py-2 pl-2' : 'bg-blue-100 py-2 pl-2'}`}>All Bio-Data</Link>
                <Link href='/dashboard/Aproved' className={`${pathName === '/dashboard/Aproved' ? 'bg-blue-400 py-2 pl-2' : 'bg-blue-100 py-2 pl-2'}`}>Aproved</Link>
                <Link href='/dashboard/Pending' className={`${pathName === '/dashboard/Pending' ? 'bg-blue-400 py-2 pl-2' : 'bg-blue-100 py-2 pl-2'}`}>Pending</Link>
              </div>

              <div>
                <button onClick={() => signOut()} className=" px-3 py-1 border border-pink-400 rounded-md hover:bg-red-600 hover:text-white hover:border-none">Logout</button>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-gray-100 flex-[8] p-2 rounded min-h-screen">
          <Toaster />
          {children}
        </div>
      </div>
    );
  }

  if(status === 'authenticated' && currentRole && currentRole !== 'ADMIN'){
    router.push('/profile/user')
  }

  // return (
  //   <div className="flex ">
  //     <aside className="flex-[2] ">
  //       {/* Include shared UI here e.g. a sidebar */}
  //       <div className="flex flex-col min-h-screen ">
  //         <div>
  //           <p className="text-center md:p-3 text-md md:text-lg lg:text-2xl text-amber-700 border border-emerald-400 m-1">Azwajum Muthoharao</p>
  //         </div>
  //         <div className="flex-auto flex flex-col py-5 pl-3">
  //           <div className="flex-auto">
  //             <p>All Bio-Data</p>
  //             <p>Aproved</p>
  //             <p>Pending</p>
  //           </div>

  //           <div>
  //             <button onClick={() => signOut()} className=" px-3 py-1 border border-pink-400 rounded-md hover:bg-red-600 hover:text-white hover:border-none">Logout</button>
  //           </div>
  //         </div>
  //       </div>
  //     </aside>
  //     <div className="bg-gray-100 flex-[8] p-2 rounded min-h-screen">
  //       {children}
  //     </div>
  //   </div>
  // );

};

export default DashboardLayout;