import Link from 'next/link'
import React from 'react'

function WhyWe() {
  return (
    <div className='flex flex-col py-16'>
      <div className='flex flex-col items-center w-2/3 mx-auto justify-center'>
        <h1 className='text-4xl text-semibold text-gray-600'>Why should you try This Matrimony?</h1>
        <div className='flex flex-col items-center justify-center text-center'>
          <p>Our ethos is based upon the Quranic ayah in which Allah states</p>
          <p className='text-lg py-2 font-semibold'>"Women of Purity are for men of Purity and men of Purity are for women of Purity" (Quran 24:26)</p>
          <p className='text-lg font-semibold py-2'>We believe that serving Allah SWT and actively seeking His pleasure is the ultimate foundation for success... and this can only be achieved when you marry someone who shares the same values and beliefs as you do.</p>
          <p>If that's something you believe in too, then join us today.

            Simply register now to find your pure match or learn more about how we can help you!</p>
        </div>
        <div className='grid grid-cols-2 gap-10 py-5'>
          <Link href="#" className='px-16 py-2 rounded-md bg-pink-300 text-xl text-center'>About Us</Link>
          <Link href="#" className='px-16 py-2 rounded-md bg-indigo-400 text-xl text-center'>Find your match</Link>
        </div>
      </div>
      <div>card</div>
    </div>
  )
}

export default WhyWe