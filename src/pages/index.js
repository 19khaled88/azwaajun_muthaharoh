import FrontPage from '@/components/FrontPage'
import Goal from '@/components/Goal'
import RootLayout from '@/components/Layout'
import SuccessStory from '@/components/SuccessStory'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Home=()=> {
  return (
      <div>
        <FrontPage />
        <SuccessStory />
        <Goal />
      </div>

  
  )
}

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;