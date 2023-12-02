import RootLayout from '@/components/Layout'
import React from 'react'

const FaqPage = () => {
  return (
    <div>Faq Page</div>
  )
}

FaqPage.getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
   }
   
export default FaqPage