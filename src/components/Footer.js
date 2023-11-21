import Image from 'next/image'
import Link from 'next/link'
import footer from '../../public/footer.png'
import facebook from '../../public/facebook.png'
import linkedin from '../../public/linkedin.png'
import twitter from '../../public/twitter.png'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={`relative bg-emerald-300 `} id=""  >
      {/* <Image
          width={3000}  //use the width of the image being used
          height={5000} //use the height of the image being used
          style={{ width: '100%' }}
          className={`${styles.footerContainer} `}
          alt="No Image"
          src={footer} //image saved in public/home
        /> */}
      <div className='absolute bg-emerald-300 bottom-0 px-16 pt-10 w-full h-64 grid grid-cols-3 gap-5'>
        <div >
          <p className='text-2xl font-bold drop-shadow-2xl text-stone-700'>Azwaajum Muthohharoh</p>
        </div>
        <div>
          <h1 className='text-lg font-bold text-gray-600 mb-5'>Usefull Links</h1>
          <div className='flex flex-col gap-2 text-md font-semibold text-gray-600'>
            <Link href="home">Home</Link>
            <Link href="package">About</Link>
            <Link href="portfilio">Service</Link>
            
            </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <h1 className='text-lg font-bold text-gray-600 mb-5'>Follow Us</h1>
            <div className='flex flex-row gap-3'>
              <Image src={facebook} style={{width:'40px', height:'40px'}} width={500} height={500}/>
              <Image src={linkedin} style={{width:'40px', height:'40px'}} width={500} height={500}/>
              <Image src={twitter} style={{width:'40px', height:'40px'}} width={500} height={500}/>
            </div>
            </div>
          <div >
            <h1 className='text-lg font-bold text-gray-600 mb-5'>Our benefites</h1>
            <h2></h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer