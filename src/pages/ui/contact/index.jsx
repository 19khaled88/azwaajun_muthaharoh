import RootLayout from '@/components/Layout'
import React from 'react'

const ConctactPage = () => {
  return (
    <div>Conctact Page</div>
  )
}

ConctactPage.getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
   }

export default ConctactPage