import RootLayout from '@/components/Layout'
import React from 'react'

const ConctactPage = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)' }} className='flex flex-col gap-3 justify-center items-center pt-10 pb-8'>
        <p>Need Help?</p>
        <h1 className='text-5xl font-bold text-gray-600'>Contact Us</h1>
        <p className='text-lg w-3/5 text-center'>Our Support Team is happy to assist you with any questions you have. Send us a message and we will get back to you within a day.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 px-8 lg:px-16 pt-10'>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} className=' rounded mx-5 mt-5 mb-10 lg:col-span-2 flex flex-col gap-3'>
          <h1 className='px-8 pt-6 text-4xl text-gray-600'>Send us your message</h1>
          <form className="bg-white  px-8 pt-6 pb-8 mb-4">

            <div className=" relative w-full min-w-[200px] h-12 mb-4">
              <input
                className="shadow peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                  peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                  peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm 
                  text-[11px] peer-focus:text-[11px] before:content[' '] 
                  before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                  peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t 
                  peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                  before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow 
                  after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
                  after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 
                  after:pointer-events-none after:transition-all peer-disabled:after:border-transparent 
                  peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 
                  peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Your name
              </label>
            </div>
            <div className=" relative w-full min-w-[200px] h-12 mb-4">
              <input
                className="shadow peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                  peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                  peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm 
                  text-[11px] peer-focus:text-[11px] before:content[' '] 
                  before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                  peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t 
                  peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                  before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow 
                  after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
                  after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 
                  after:pointer-events-none after:transition-all peer-disabled:after:border-transparent 
                  peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 
                  peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Your email
              </label>
            </div>
            <div className=" relative w-full min-w-[200px] h-12 mb-4">
              <input
                className="shadow peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                  peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                  peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm 
                  text-[11px] peer-focus:text-[11px] before:content[' '] 
                  before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                  peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t 
                  peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                  before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow 
                  after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
                  after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 
                  after:pointer-events-none after:transition-all peer-disabled:after:border-transparent 
                  peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 
                  peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Subject
              </label>
            </div>
            <div className="mb-6">
              <div className="relative w-full min-w-[200px]">
                <textarea
                  className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "></textarea>
                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Message
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button style={{ backgroundColor: '#10B981' }} className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send Message
              </button>

            </div>
          </form>
        </div>
        <div className='mx-5 mt-5 mb-10' >
          <div style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} className=''>
            <h1 className='h-5 bg-gray-100 px-8 py-5 flex flex-row items-center text-xl text-semibold'>Our contact details</h1>
            <span className='h-5  px-8 py-5 flex flex-row items-center gap-2'>
              <p className='text-lg text-semibold'>Email: </p>
              <p>example@gmail.com</p>
            </span>
            <span className='h-5  px-8 py-5 flex flex-row items-center gap-2'>
              <p className='text-lg text-semibold'>Phone:</p>
              <p>+88011111111111</p>
            </span>
            <span>

            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

ConctactPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default ConctactPage