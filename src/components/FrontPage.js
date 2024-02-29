import Image from 'next/image'
import { useState } from 'react'
import rightBd from '../../public/bg-1.jpg'
import dot from '../../public/dots-removebg-preview.png'
import axios from '../axios/axiosInstance'
import styles from '../styles/frontPage.module.css'
import {useRouter} from 'next/router'
import toast from 'react-hot-toast'

const FrontPage = () => {
    const router = useRouter()
    const [searchForm, setSearchForm] = useState({
        // pre_district:'',
        // per_district:'',
        // candidate:'',
        // age:'',
        // marital_status:'',
        // special:''
    })

    const queryString = new URLSearchParams(searchForm).toString()
    const requestURL = `${'/bioData/frontEndShow'}?${queryString}`

    async function onSubmit(event) {
        event.preventDefault()
       
        // axios.get(`/bioData/frontEndShow`,{ searchForm })
        axios.get(requestURL)
            .then(response => {
                // Handle successful response
                // setSingleGeneralInfo(response.data.data);

                if (response === undefined) {

                } else if(response?.data?.data) {
                    if(response.status === 200 && response.statusText=== 'OK'  ){
                        
                        router.push({pathname:'/ui/candidates',query: { myData:JSON.stringify(response.data.data)}})
                    } else{

                        toast.error('Please, Try again')
                    }
                    // setGeneralInfo(resInfo)
                }else{
                    toast.error('Something unusual wrong!')
                }
            })
            .catch(error => {
                // // Handle error
                // if (error.response) {
                //     // The request was made, but the server responded with a status code
                //     // outside of the 2xx range
                //     console.log('Response data:', error.response.data);
                //     console.log('Response status:', error.response.status);
                //     console.log('Response headers:', error.response.headers);
                // } else if (error.request) {
                //     // The request was made, but no response was received
                //     console.log('No response received from the server');
                // } else {
                //     // Something happened in setting up the request that triggered the error
                //     console.log('Error:', error.message);
                // }
                if(error.response.status === 500){
                   toast.error('Internal Server Error, Please try again') 
                }
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearchForm((prevGeneralInfo) => (
            {
                ...prevGeneralInfo,
                [name]: value,
            }
        ))
    }
//    console.log('loaded')

    return (
        <div className='relative '>
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

                    <figure><Image src={rightBd} alt='No Image' className='sm:h-56' width={500} height={500} /></figure>
                    <div className="card-body pl-3 pr-3 pt-2">
                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className=''>
                                    <label htmlFor="pre_district" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">District(present)</label>
                                    <select
                                        onChange={handleChange}
                                        defaultValue="Select district"
                                        name='pre_district'
                                        className="border rounded-md border-teal-600 hover:border-pink-500 w-full max-w-xs h-8 shadow-xl">
                                        <option disabled>Select district</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="barisal">Barisal</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Mymanshing">Mymanshing</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Comilla">Comilla</option>

                                    </select>
                                </div>
                                <div className=''>
                                    <label htmlFor="per_district" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">District(permanent)</label>
                                    <select
                                        onChange={handleChange}
                                        defaultValue="Select district"
                                        name='per_district'
                                        className="border rounded-md border-teal-600 hover:border-pink-500 w-full max-w-xs h-8 shadow-xl">
                                        <option disabled>Select district</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="barisal">Barisal</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Mymanshing">Mymanshing</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Comilla">Comilla</option>

                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-5">
                                <div className=''>
                                    <label htmlFor="age" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Age range</label>
                                    <select
                                        onChange={handleChange}
                                        defaultValue="Select All"
                                        name='age'
                                        className="border rounded-md border-teal-600 hover:border-pink-500  w-full max-w-xs h-8 shadow-xl">
                                        <option disabled>Select All</option>
                                        <option value="15-20"> 15-20</option>
                                        <option value="20-25"> 20-25</option>
                                        <option value="20-30"> 20-30</option>
                                        <option value="30-35"> 30-35</option>
                                        <option value="35-above"> 35-above</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="candidate" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Candidate</label>
                                    <select
                                        defaultValue="Select Candidate"
                                        onChange={handleChange}
                                        name='candidate'
                                        className="border rounded-md border-teal-600 hover:border-pink-500 w-full max-w-xs h-8 shadow-xl">
                                        <option disabled>Select Candidate</option>
                                        <option value="Groom">Groom</option>
                                        <option value="Bride">Bride</option>
                                    </select>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-5">
                                <div className=''>
                                    <label htmlFor="special" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Special</label>
                                    <select
                                        onChange={handleChange}
                                        defaultValue="Select All"
                                        name='special'
                                        className="border rounded-md border-teal-600 hover:border-pink-500 w-full max-w-xs h-8 shadow-xl">
                                        <option disabled >Select All</option>
                                        <option value="Masna">Masna</option>
                                        <option value="Sulasa">Sulasa</option>
                                        <option value="Rubaya">Rubaya</option>

                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="marital status" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Marital status</label>
                                    <select
                                        onChange={handleChange}
                                        defaultValue="Select All"
                                        name='marital_status'
                                        className="border rounded-md border-teal-600 hover:border-pink-500  w-full max-w-xs h-8 shadow-xl">
                                        <option disabled >Select All</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="devorced">devorced</option>
                                        <option value="widow">widow</option>
                                        <option value="widower">widower</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="text-white bg-emerald-400 hover:bg-emerald-500 font-medium rounded-lg text-md w-full px-6 py-1.5 text-center">Search</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FrontPage