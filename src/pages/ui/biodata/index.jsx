import RootLayout from '@/components/Layout'
import ContactPage from '@/components/bio_components/contact'
import EducationPage from '@/components/bio_components/educational'
import FamilyPage from '@/components/bio_components/family'
import GeneralInfoPage from '@/components/bio_components/general'
import MaritalPage from '@/components/bio_components/marital'
import PartnerPage from '@/components/bio_components/partner'
import PersonalPage from '@/components/bio_components/personal'
import ProfessionalPage from '@/components/bio_components/professional'
import Address from '../../../components/bio_components/address'
import AgreementPage from '../../../components/bio_components/agreement'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

// import Address from '@/components/bio_components/addresses'
import { jwtDecode } from "jwt-decode"
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from '../../../axios/axiosInstance'

import Swal from 'sweetalert2'

const BiodataPage = () => {
    const [data, setData] = useState({
        // generalInfo: {
        //     bio_type: "",
        //     marital_status: "",
        //     birth_date: "",
        //     height: "",
        //     complexion: "",
        //     weight: "",
        //     blood_group: "",
        //     nationality: "",
        // },
        // address: {
        //     present_address: {
        //         division: "",
        //         district: "",
        //         sub_district: "",
        //         post_office: "",
        //         village: "",

        //     },
        //     permenant_address: {
        //         division: "",
        //         district: "",
        //         sub_district: "",
        //         post_office: "",
        //         village: "",
        //     },
        // },
        // educationalInfo: {
        //     education_medium: '',
        //     ssc_institute: '',
        //     ssc_department: '',
        //     ssc_year: '',
        //     ssc_result: '',


        //     // education_medium:"",
        //     // entitlement:"",
        //     // highest_degree_institute:"",
        //     // other_education_qualification:"",
        //     // ssc_department:"",
        //     // ssc_institute:"",
        //     // ssc_other_info:"",
        //     // ssc_result:"",
        //     // ssc_year:"",
        //     // top_degree_name:"",
        //     // top_degree_other_info:"",
        //     // top_degree_pass_year:"",
        //     // top_degree_result:"",
        //     // top_degree_subject_department:""
        // },
        // familyInfo: {
        //     father_name: "",
        //     father_profession_details: "",
        //     if_father_died: "",
        //     mother_name: "",
        //     if_mother_died: "",
        //     mother_profession_details: "",
        //     brothers: "",
        //     sisters: "",
        //     economy_short_brief: "",
        //     economy_status: "",
        //     deen_practice_in_house: "",
        // },
        // personalInfo: {
        //     above_ankles: "",
        //     bear: "",
        //     contact_number: "",
        //     deen_work: "",
        //     diseases: "",
        //     dress_outside: "",
        //     fique: "",
        //     hobbies: "",
        //     islamic_books: "",
        //     islamic_schoolars: "",
        //     mahram_non_mahram: "",
        //     pray_five_time: "",
        //     recite_quran: "",
        //     song_drama_movie: ""
        // },
        // professionalInfo: {
        //     income: '',
        //     occupation: '',
        //     occupation_description: ''
        // },
        // maritalInfo: {
        //     gift_from_brides_family: '',
        //     guardian_agree: '',
        //     job_after_marriage: '',
        //     marriage_thoughts: '',
        //     marriage_veil: '',
        //     resite_after_marriage: '',
        //     study_after_marriage: ''
        // },
        // partnerInfo: {
        //     complexion: "",
        //     district: "",
        //     edu_qualification: "",
        //     expected_Qualities: "",
        //     financial_condition: "",
        //     height: "",
        //     marital_status: "",
        //     profession: ""
        // },
        // agreementInfo: {
        //     cadidate_responsibility: "",
        //     information_truth: "",
        //     parents_aware: ""
        // },
        // contactInfo: {
        //     candidate_name: "",
        //     email_address: "",
        //     guardian_relationship: "",
        //     gurdian_mobile: ""
        // }


    })

    const [isEmpty, setIsEmpty] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isApi, setIsApi] = useState('')
    const { data: session, status } = useSession();

    const router = useRouter()


    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const [activeTab, setActiveTab] = useState(0)


    const sideBarItem = [

        {
            id: 1,
            title: 'General Info'
        },
        {
            id: 2,
            title: 'Address'
        },
        {
            id: 3,
            title: 'Educational Info'
        },
        {
            id: 4,
            title: 'Family Info'
        },
        {
            id: 5,
            title: 'Personal Info'
        },
        {
            id: 6,
            title: 'Professional Info'
        },
        {
            id: 7,
            title: 'Marital Status'
        },
        {
            id: 8,
            title: 'Partner Quality'
        },
        {
            id: 9,
            title: 'Agreement'
        },
        {
            id: 10,
            title: 'Contact Info'

        }
    ]

    const formElements = [
        <GeneralInfoPage key={1} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <Address key={2} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <EducationPage key={3} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <FamilyPage key={4} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <PersonalPage key={5} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <ProfessionalPage key={6} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <MaritalPage key={7} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <PartnerPage key={8} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <AgreementPage key={9} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />,
        <ContactPage key={10} data={data} setData={setData} setIsApi={setIsApi} setIsEmpty={setIsEmpty} handleChange={handleChange} />
    ]

    const showSideBarItem = (data) => {
        let array = []
        data.map((items, index) => {
            array.push(
                <div key={items.id} className='grid grid-cols-4'>
                    <span className={`${index === activeTab ? 'rounded-full w-9 h-9 bg-emerald-600 text-white p-1 flex flex-row justify-center items-center' : 'p-1 w-9 h-9 rounded-full bg-white'} flex flex-row justify-center items-center`}>{index + 1}</span>
                    <p className='col-span-3'>{items.title}</p>
                </div>
            )
        })
        return array
    }

    const showContent = (data) => {

        const response = data.find((item, index) => index === activeTab)
        return response
    }

    const tabNavigationWithValidation = async (term) => {
        if (term === 'back') {
            // setData({})
            setActiveTab((prev) => prev - 1)
        } else if (term === 'forward' && isEmpty === true) {
            toast.error('You must input all the red marked fields')
        } else if (term === 'forward' && isEmpty === false) {
            const decoded = jwtDecode(session?.accessToken);

            try {
                const response = await axios.post(isApi, { data, user_id: decoded.id })
                    .then((response) => {
                        // Handle successful response
                        // console.log('POST Request Successful:', response.data);

                        if (response.data.statusCode === 200 && response.data.success === true) {
                            toast.success(response.data.message)
                            // setIsEmpty(true)
                            setData({})
                            setActiveTab((prev) => prev + 1)
                        }
                    })
                    .catch((error) => {
                        // Handle error
                        // console.error('POST Request Error:', error); 
                        toast.error(error)
                    });

            } catch (error) {
                // console.error(error);
                toast.error(error)
            }

            // setActiveTab((prev) => prev + 1)
        }
    }

    const finalSubmit = async (term) => {
        if (term === 'submit') {
            const decoded = jwtDecode(session?.accessToken);
            try {
                const response = await axios.post(isApi, { data, user_id: decoded.id })
                    .then((response) => {
                        // Handle successful response
                        // console.log('POST Request Successful:', response.data);

                        if (response.data.statusCode === 200 && response.data.success === true) {
                            toast.success(response.data.message)
                            // setIsEmpty(true)
                            Swal.fire({
                                icon: "success",
                                title: "Biodata created successfully",
                                showConfirmButton: false,
                                timer: 2500
                            });
                            router.push('/')
                            // setData({})
                            // setActiveTab((prev) => prev + 1)
                        }
                    })
                    .catch((error) => {
                        // Handle error
                        // console.error('POST Request Error:', error); 
                        toast.error(error)
                    });
            } catch (error) {
                toast.error(error)
            }

        }
    }

    // console.log(data, isEmpty,isApi)


    if (status === "loading") {
        <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        router.push('/ui/auth/login')
    } else {
        return (
            <div className=' flex flex-col justify-center bg-gray-300 pt-10 pb-10'>
                <div className='flex flex-row  mx-auto w-5/6 pb-10'>
                    <div className='bg-blue-400 rounded-tl-md w-80 p-2 rounded-bl-md flex flex-col gap-2 '>
                        {
                            showSideBarItem(sideBarItem)
                        }
                    </div>
                    <div className='w-full'>
                        {
                            // // formElements[activeTab]
                            // formElements.map((item,index)=>index === activeTab ? item : '')
                            showContent(formElements)
                        }
                    </div>
                </div>
                <div className='flex flex-wrap gap-x-6 mx-auto'>
                    <button
                        disabled={activeTab === 0 ? "disabled" : ""}
                        // onClick={() => setActiveTab(prev => prev - 1)}
                        onClick={() => tabNavigationWithValidation('back')}
                        className={`px-5 sm:px-16 py-2 rounded-xl bg-blue-600 text-white ${activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>
                        Back
                    </button>
                    <button
                        disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
                        // onClick={() => setActiveTab(prev => prev + 1)}
                        onClick={() => tabNavigationWithValidation('forward')}
                        className={`px-5 sm:px-16 py-2 rounded-xl bg-blue-600 text-white ${activeTab === formElements.length - 1 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>
                        Next
                    </button>
                    {
                        activeTab === formElements.length - 1 ? <button className='px-5 sm:px-16 py-2 rounded-xl bg-blue-600 text-white' onClick={() => finalSubmit('submit')}>Submit</button> : null
                    }
                </div>
            </div>
        );
    }
}

BiodataPage.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>
}

export default BiodataPage