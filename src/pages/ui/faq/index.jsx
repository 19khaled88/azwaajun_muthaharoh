import RootLayout from '@/components/Layout'
import React from 'react'

const FaqPage = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)' }} className='flex flex-col gap-3 justify-center items-center pt-10 pb-8'>
        
        <h1 className='text-5xl font-bold text-gray-600'>Frequently Asked Questions.</h1>
        <p className='text-lg w-3/5 text-center'>Here are some Question that we get asked oftenly from our users.</p>
      </div>
      <div >
        
       
      </div>
    </div>
  )
}

FaqPage.getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
   }
   
export default FaqPage