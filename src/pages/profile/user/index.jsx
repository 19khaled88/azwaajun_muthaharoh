'use client'
import RootLayout from '@/components/Layout';
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { RotatingLines } from 'react-loader-spinner';

const Profile = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status === 'loading') {
    return <div className="flex flex-row justify-center items-center h-screen">
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
  }

  if (status === 'unauthenticated') {
    router.push('/ui/auth/login')
  } else {
    return (
      <div>
        <p className='text-2xl text-gray-600 p-5'>Welcome, You Email Address : <span className='text-pink-400'>{session.email}</span></p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5'>
          <div className='flex flex-col content-center items-center ' style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
            <span className='flex flex-col items-center pb-3'>
              <h1 className='text-2xl'>0</h1>
              <h1 className='font-bold'>How many times this bio visited</h1>
            </span>

            <h3>Visit info day wise</h3>
            <div className='flex flex-row items-center gap-3 text-center'>
              <span>
                <p>last 30 days</p>
                <h1>0</h1>
              </span>
              <span>
                <p>last 7 days</p>
                <h1>0</h1>
              </span>
              <span>
                <p>today day</p>
                <h1>0</h1>
              </span>
            </div>
          </div>
          <div className=' flex flex-col content-center items-center' style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
            <span className='text-center pb-3'>
              <h1 className='text-2xl'>0</h1>
              <h1 className='font-bold'>How many person Liked your bio</h1>
            </span>

            <p>The number of people liked your bio</p>
          </div>
          <div className='flex  content-center items-center' style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
            <span className='pb-3 w-full text-center'>
              <h1 className='text-2xl'>0</h1>
              <h1 className='font-bold'>Your Choice list</h1>
            </span>
          </div>
          <div className='flex  content-center items-center' style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
            <span className='pb-3 w-full text-center'>
              <h1 className='text-2xl'>0</h1>
              <h1 className='font-bold'>Your dislike list</h1>
            </span>
          </div>
          <div className='flex  content-center items-center' style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
            <span className='pb-3 w-full text-center'>
              <h1 className='text-2xl'>0</h1>
              <h1 className='font-bold'>Your purchased packages number</h1>
            </span>
          </div>
        </div>
      </div>

    )
  }

}

Profile.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Profile