import telephone from '../../public/telephone-removebg-preview.png'
import biodata from '../../public/biodata-removebg-preview.png'
import search from '../../public/search-removebg-preview.png'
import success from '../../public/success-removebg-preview.png'
import Image from 'next/image'
const StepsPage = () => {
  return (
    <div className='xl:h-screen pb-10' style={{backgroundColor:'#fbe9d7'}}>
      <h1 className='text-center text-xl md:text-2xl xl:text-3xl py-8 md:py-10 xl:py-16 font-semibold text-gray-500'>The way you can go with us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-10 pb-8'>
        <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl ">
          <figure style={{ height: '150px' }}><Image src={biodata} alt="car!" width={150} height={100} /></figure>
          <div className="p-5 flex  flex-col gap-3 justify-center items-center h-36">
            <h2 className="card-title text-2xl">Create Your Bio</h2>
            <p className='text-lg text-center text-gray-800 pb-5'>First create your biodata with all necessary information</p>

          </div>
        </div>
        <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl ">
          <figure style={{ height: '150px' }}><Image src={search} alt="car!" width={150} height={100} /></figure>
          <div className="p-5 flex  flex-col gap-3 justify-center items-center h-36">
            <h2 className="card-title text-2xl">Search Bio</h2>
            <p className='text-lg text-center text-gray-500 pb-5'>Then you can do searh on all biodata in our collection</p>

          </div>
        </div>
        <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl ">
          <figure style={{ height: '150px' }}><Image src={telephone} alt="car!" width={150} height={100} /></figure>
          <div className="p-5 flex  flex-col gap-3 justify-center items-center h-36">
            <h2 className="card-title text-2xl">Seak for any help</h2>
            <p className='text-lg text-center text-gray-500 pb-5'>Feel free to make telephone and get help if you need</p>

          </div>
        </div>
        <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl ">
          <figure style={{ height: '150px' }}><Image src={success} alt="car!" width={150} height={100} /></figure>
          <div className="p-5 flex  flex-col gap-3 justify-center items-center h-36">
            <h2 className="card-title text-2xl">Got married</h2>
            <p className='text-lg text-center text-gray-500 pb-5'>Finally, you got married happily, and be in peace</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsPage