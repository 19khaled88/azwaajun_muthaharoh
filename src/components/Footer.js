import Image from 'next/image'
import Link from 'next/link'

import facebook from '../../public/facebook.png'
import facebookHover from '../../public/facebook_hover.png'
import linkedInHover from '../../public/LinkedIn_hover.png'
import twitterHover from '../../public/twitter_hover.png'
import linkedin from '../../public/linkedin.png'
import twitter from '../../public/twitter.png'
import styles from '../styles/footer.module.css'
import { useState } from 'react'

const Footer = () => {

  const [isFacebook, setIsFacebook] = useState(false)
  const [isTwitter, setIsTwitter] = useState(false)
  const [isLinkedin, setIsLinkedin] = useState(false)


  const facebookHandler = (data) => {
    if (data === 'hover') {
      setIsFacebook(true)
    } else if (data === 'leave') {
      setIsFacebook(false)
    }
  }

  const twitterHandler = (data) => {
    if (data === 'hover') {
      setIsTwitter(true)
    } else if (data === 'leave') {
      setIsTwitter(false)
    }
  }

  const linkedHandler = (data) => {
    if (data === 'hover') {
      setIsLinkedin(true)
    } else if (data === 'leave') {
      setIsLinkedin(false)
    }

  }



  return (
    <div className="bg-emerald-300 " id=""  >
      {/* <Image
          width={3000}  //use the width of the image being used
          height={5000} //use the height of the image being used
          style={{ width: '100%' }}
          className={`${styles.footerContainer} `}
          alt="No Image"
          src={footer} //image saved in public/home
        /> */}
      <div className='px-16 py-5 w-full  grid md:grid-cols-2 lg:grid-cols-3 md:gap-5'>
        <div className='col-span-1 my-3 md:my-10'>
          <p className='text-2xl font-bold drop-shadow-2xl text-stone-700'>Azwaajum Muthohharoh</p>
        </div>

        <div className='col-span-1 my-3 md:my-10 lg:col-span-2 gap-2 md:gap-4 lg:gap-0 md:grid-cols-1 grid lg:grid-cols-2'>
          <div className='lg:col-span-1'>
            <h1 className='text-lg font-bold text-gray-600 mb-2 lg:mb-5'>Usefull Links</h1>
            <div className='flex lg:flex-col gap-2 text-md font-semibold text-gray-600'>
              <Link href="/" className='border border-1 rounded-md border-orange-500 w-fit px-3 hover:bg-pink-500 hover:text-white'> Home</Link>
              <Link href="/ui/about" className='border border-1 rounded-md border-orange-500 w-fit px-3 hover:bg-pink-500 hover:text-white'>About Us</Link>
              <Link href="/ui/faq" className='border border-1 rounded-md border-orange-500 w-fit px-3 hover:bg-pink-500 hover:text-white'>FAQ</Link>
              <Link href="/ui/contact" className='border border-1 rounded-md border-orange-500 w-fit px-3 hover:bg-pink-500 hover:text-white'>Contact us</Link>

            </div>
          </div>

          <div className='flex flex-row lg:flex-col gap-3 lg:col-span-1'>
            <div>
              <h1 className='text-lg font-bold text-gray-600 mb-2  lg:flex lg:mb-3'>Follow Us</h1>
              <div className='flex flex-row gap-3'>
                {

                }
                <Link onMouseOver={() => facebookHandler('hover')} onMouseLeave={() => facebookHandler('leave')} className='transition ease-in-out delay-150' href="#">
                  {
                    isFacebook === true ?
                      <Image src={facebookHover} style={{ width: '40px', height: '40px' }} width={500} height={500} alt="No image" /> :
                      <Image src={facebook} style={{ width: '40px', height: '40px' }} width={500} height={500} alt="No image" />
                  }

                </Link>
                <Link onMouseOver={() => twitterHandler('hover')} onMouseLeave={() => twitterHandler('leave')} href="#">{
                  isTwitter === true ?
                    <Image src={twitterHover} style={{ width: '40px', height: '40px' }} width={500} height={500} alt="No image" /> :
                    <Image src={twitter} style={{ width: '40px', height: '40px' }} width={500} height={500} alt="No image" />
                }

                </Link>
                <Link onMouseOver={() => linkedHandler('hover')} onMouseLeave={() => linkedHandler('leave')} href="#">
                  {
                    isLinkedin === true ?
                      <Image src={linkedInHover} style={{ width: '40px', height: '40px' }} width={500} height={500} alt="No image" /> :
                      <Image src={linkedin} style={{ width: '40px', height: '40px' }} width={500} height={500} alt="No image" />
                  }

                </Link>
              </div>
            </div>
            <div >
              <h1 className='text-lg font-bold text-gray-600 mb-3  lg:flex'>Our benefites</h1>
              <h2>For the sake of allah</h2>
            </div>
          </div>
        </div>


      </div>

      <p className='bg-red-600 h-1 w-11/12 mx-auto'></p>

      <div className=' w-5/6 py-3 mx-auto flex flex-col md:flex-row justify-between'>
        <p className='text-sm'> © Copyright 2023 Azwaajum Muthohharoh. All rights reserved.</p>
        <div className='flex flex-row gap-4 text-sm'>
          <Link href="">Privacy policy</Link>
          <Link href="">Terms & conditions</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer