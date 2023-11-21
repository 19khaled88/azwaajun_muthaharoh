import React from 'react'
import bride from '../../public/bride-removebg-preview.png'
import groom from '../../public/groom-removebg-preview.png'
import both from '../../public/both-removebg-preview.png'
import success from '../../public/success.png'
import Image from 'next/image'
const SuccessStory = () => {
    return (
        <div className='xl:h-screen bg-teal-50 px-10'>
            <h2 className='text-center text-xl md:text-2xl xl:text-3xl py-8 md:py-10 xl:py-16 font-semibold text-gray-500'>Number of candidates and married couples</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-7 pb-8'>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                    <figure style={{height:'150px'}}><Image src={both} alt="car!" width={150} height={100}/></figure>
                    <div className="card-body flex pt-4 pb-7 flex-col gap-5 justify-center items-center h-36">
                        <h2 className="card-title">Total Candidates</h2>
                        <p className='text-4xl font-bold text-gray-500 '>1500</p>
                       
                    </div>
                </div>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                    <figure style={{height:'150px'}}><Image src={bride} alt="car!" width={150} height={100}/></figure>
                    <div className="card-body flex pt-4 pb-7 flex-col gap-5  justify-center items-center h-36">
                        <h2 className="card-title">Total brides</h2>
                        <p className='text-4xl font-bold text-gray-500 '>700</p>
                       
                    </div>
                </div>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                    <figure style={{height:'150px'}}><Image src={groom} alt="car!" width={150} height={100}/></figure>
                    <div className="card-body pt-4 pb-7 flex pb-2 flex-col gap-5  justify-center items-center h-36">
                        <h2 className="card-title">Total groom</h2>
                        <p className='text-4xl font-bold text-gray-500 '>700</p>
                        
                    </div>
                </div>
                <div className="card w-2/3 sm:w-full mx-auto bg-base-100 shadow-2xl relative">
                <figure style={{height:'150px'}}><Image src={success} alt="car!" width={150} height={100}/></figure>
                    <div className="card-body flex pt-4 pb-7 flex-col gap-5  justify-center items-center h-36">
                        <h2 className="card-title">Happily married</h2>
                        <p className='text-4xl font-bold text-gray-500 '>150</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStory