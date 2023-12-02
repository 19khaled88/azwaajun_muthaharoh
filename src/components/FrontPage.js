import Image from 'next/image'
import rightBd from '../../public/bg-1.jpg'
import dot from '../../public/dots-removebg-preview.png'
import styles from '../styles/frontPage.module.css'
const FrontPage = () => {
    return (
        <div className='relative'>
            <div className={`bg-gradient-to-r from-emerald-200 from-10% to-emerald-500 to-90% h-screen relative ${styles.right_site_shape}`} >
                <Image src={dot} alt='No Image' width={150} height={150} className='absolute bottom-16' />
            </div>
            <div className=' flex flex-col-reverse md:grid md:grid-cols-2 5 gap-5 absolute top-10 right-0 left-0 '>
                <div className='hidden md:flex md:flex-col md:gap-5 md:pl-10 '>
                    <div>
                        <h1 className='md:text-4xl lg:text-5xl text-white font-bold'>Muslim matrimony</h1>
                        <h2 className='md:text-4xl lg:text-5xl text-white font-bold'>Site</h2>
                    </div>
                    <div>
                        <h1 className='text-stone-500 md:text-2xl lg:text-3xl font-semibold'>We are working since, 2019</h1>
                    </div>
                    <div>
                        <p>We try to help you get best matched partner</p>
                    </div>
                    <div><h2 className='md:text-2xl lg:text-3xl font-semibold text-gray-700'>{`Complete your "Ordek Din"`}</h2></div>
                </div>
                <div className=" card w-96  sm:w-2/3 md:w-4/5 lg:w-2/3 mx-auto bg-base-100 shadow-2xl ">
                  
                        <figure><Image src={rightBd} alt='No Image' className='sm:h-56' width={500} height={500}/></figure>
                        <div className="card-body pl-3 pr-3 pt-2">
                            <form>
                                <div class="grid grid-cols-2 gap-3 mb-3">
                                    <div className=''>
                                        <label htmlFor="district" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">District</label>
                                        <select defaultValue="Select district" className="border rounded-md border-teal-600 hover:border-pink-500 h-10 w-full max-w-xs h-8 shadow-xl">
                                            <option disabled>Select district</option>
                                            <option>Chittagong</option>
                                            <option>Dhaka</option>
                                            <option>Sylhet</option>
                                            <option>Rajshahi</option>
                                            <option>Mymanshing</option>
                                            <option>Khulna</option>
                                            <option>Comilla</option>

                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="candidate" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Candidate</label>
                                        <select defaultValue="Select Candidate" className="border rounded-md border-teal-600 hover:border-pink-500 h-10 w-full max-w-xs h-8 shadow-xl">
                                            <option disabled>Select Candidate</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-3 mb-5">
                                    <div className=''>
                                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Age range</label>
                                        <select defaultValue="Select All" className="border rounded-md border-teal-600 hover:border-pink-500 h-10 w-full max-w-xs h-8 shadow-xl">
                                            <option disabled>Select All</option>
                                            <option>15-20</option>
                                            <option>20-25</option>
                                            <option>20-30</option>
                                            <option>30-35</option>
                                            <option>35-above</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Marital status</label>
                                        <select defaultValue="Select All" className="border rounded-md border-teal-600 hover:border-pink-500 h-10 w-full max-w-xs h-8 shadow-xl">
                                            <option disabled >Select All</option>
                                            <option>Never married</option>
                                            <option>Married</option>
                                            <option>devorced</option>
                                            <option>widow</option>
                                            <option>widower</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-3 mb-5">
                                    <div className=''>
                                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Marital status</label>
                                        <select defaultValue="Select All" className="border rounded-md border-teal-600 hover:border-pink-500 h-10 w-full max-w-xs h-8 shadow-xl">
                                            <option disabled >Select All</option>
                                            <option>Never married</option>
                                            <option>Married</option>
                                            <option>devorced</option>
                                            <option>widow</option>
                                            <option>widower</option>
                                        </select>
                                    </div>
                                    <div className=''>
                                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Special</label>
                                        <select defaultValue="Select All" className="border rounded-md border-teal-600 hover:border-pink-500 h-10 w-full max-w-xs h-8 shadow-xl">
                                            <option disabled >Select All</option>
                                            <option>Masna</option>
                                            <option>Sulasa</option>
                                            <option>rubaya</option>

                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="text-white bg-emerald-400 hover:bg-emerald-500 font-medium rounded-lg text-md w-full px-6 py-1.5 text-center">Search</button>
                            </form>
                        </div>
                    
                </div>
            </div>

        </div>
    )
}

export default FrontPage