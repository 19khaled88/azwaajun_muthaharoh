import FrontPage from '@/components/FrontPage'

import RootLayout from '@/components/Layout'
import StepsPage from '@/components/Steps'
import SuccessStory from '@/components/SuccessStory'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Home=()=> {
  return (
      <div className=''>
        <FrontPage />
        <SuccessStory />
        <StepsPage />
      </div>

  
  )
}

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;