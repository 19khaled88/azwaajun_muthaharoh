import React from 'react'
import RootLayout from '@/components/Layout'
const AboutPage = () => {
  return (
    <div>About Page</div>
  )
}

AboutPage.getLayout=(page)=>{
 return <RootLayout>{page}</RootLayout>
}

export default AboutPage