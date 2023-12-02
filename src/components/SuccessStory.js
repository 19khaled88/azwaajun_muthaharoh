import React from 'react'
import bride from '../../public/bride-removebg-preview.png'
import groom from '../../public/groom-removebg-preview.png'
import both from '../../public/both-removebg-preview.png'
import success from '../../public/success-removebg-preview_.png'
import Image from 'next/image'
const SuccessStory = () => {
    return (
        <div className='xl:h-screen bg-teal-50 px-10'>
            <h2 className='text-center text-xl md:text-2xl xl:text-3xl py-8 md:py-10 xl:py-16 font-semibold text-gray-500'>candidates and married couples</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 pb-8'>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                    <figure style={{height:'150px',backgroundColor:'#43b692'}}><Image src={both} alt="car!" width={150} height={100}/></figure>
                    <div className="py-5 flex  flex-col gap-3 justify-center items-center h-36">
                        <h2 className="card-title">Total Candidates</h2>
                        <p className='px-3 text-4xl font-bold text-gray-500 '>1500</p>
                       
                    </div>
                </div>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                    <figure style={{height:'150px',backgroundColor:'#43b692'}}><Image src={bride} alt="car!" width={150} height={100}/></figure>
                    <div className="py-5 flex  flex-col gap-3 justify-center items-center h-36">
                        <h2 className="card-title">Total brides</h2>
                        <p className='px-3 text-4xl font-bold text-gray-500 '>700</p>
                       
                    </div>
                </div>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                    <figure style={{height:'150px',backgroundColor:'#43b692'}}><Image src={groom} alt="car!" width={150} height={100}/></figure>
                    <div className="py-5 flex  flex-col gap-3 justify-center items-center h-36">
                        <h2 className="card-title">Total groom</h2>
                        <p className='px-3 text-4xl font-bold text-gray-500 '>700</p>
                        
                    </div>
                </div>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                <figure style={{height:'150px',backgroundColor:'#43b692'}}><Image src={success} alt="car!" width={150} height={100}/></figure>
                    <div className="py-5 flex  flex-col gap-3 justify-center items-center h-36">
                        <h2 className="card-title">Happily married</h2>
                        <p className='px-3 text-4xl font-bold text-gray-500 '>150</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStory