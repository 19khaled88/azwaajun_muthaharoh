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
    <div className={`relative`} id=""  >
      {/* <Image
          width={3000}  //use the width of the image being used
          height={5000} //use the height of the image being used
          style={{ width: '100%' }}
          className={`${styles.footerContainer} `}
          alt="No Image"
          src={footer} //image saved in public/home
        /> */}
      <div className='absolute bg-emerald-300 bottom-0 px-16 pt-10 w-full h-64 grid grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='col-span-1'>
          <p className='text-2xl font-bold drop-shadow-2xl text-stone-700'>Azwaajum Muthohharoh</p>
        </div>

        <div className='col-span-1 lg:col-span-2 lg:flex-col-2 grid lg:grid-cols-2'>
          <div className='lg:col-span-1'>
            <h1 className='text-lg font-bold text-gray-600 mb-2 lg:mb-5'>Usefull Links</h1>
            <div className='flex lg:flex-col gap-2 text-md font-semibold text-gray-600'>
              <Link href="home">Home</Link>
              <Link href="package">About</Link>
              <Link href="portfilio">Service</Link>

            </div>
          </div>

          <div className='flex flex-row lg:flex-col gap-3 lg:col-span-1'>
            <div>
              <h1 className='text-lg font-bold text-gray-600 mb-2 hidden lg:flex lg:mb-5'>Follow Us</h1>
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
              <h1 className='text-lg font-bold text-gray-600 mb-5 hidden lg:flex'>Our benefites</h1>
              <h2></h2>
            </div>
          </div>
        </div>


      </div>

      <span className='bg-white h-1 w-11/12 mx-auto absolute bottom-12 inset-x-0'></span>

      <div className='absolute bottom-3 inset-x-0 w-5/6 mx-auto flex flex-row justify-between'>
        <p> © Copyright 2023 Azwaajum Muthohharoh. All rights reserved.</p>
        <div className='flex flex-row gap-4'>
          <Link href="">Privacy policy</Link>
          <Link href="">Terms & conditions</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer