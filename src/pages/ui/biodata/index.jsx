import RootLayout from '@/components/Layout'
import Address from '@/components/bio_components/address'
import AggrementPage from '@/components/bio_components/aggrement'
import EducationPage from '@/components/bio_components/education'
import FamilyPage from '@/components/bio_components/family'
import GeneralInfoPage from '@/components/bio_components/general'
import MaritalPage from '@/components/bio_components/marital'
import PartnerPage from '@/components/bio_components/partner'
import PersonalPage from '@/components/bio_components/personal'
import ProfessionalPage from '@/components/bio_components/professional'
import { Icon } from 'react-icons-kit'
import { u0030 } from 'react-icons-kit/noto_emoji_regular/u0030'
import { u0031 } from 'react-icons-kit/noto_emoji_regular/u0031'
import { u0032 } from 'react-icons-kit/noto_emoji_regular/u0032'
import { u0033 } from 'react-icons-kit/noto_emoji_regular/u0033'
import { u0034 } from 'react-icons-kit/noto_emoji_regular/u0034'
import { u0035 } from 'react-icons-kit/noto_emoji_regular/u0035'
import { u0036 } from 'react-icons-kit/noto_emoji_regular/u0036'
import { u0037 } from 'react-icons-kit/noto_emoji_regular/u0037'
import { u0038 } from 'react-icons-kit/noto_emoji_regular/u0038'
import { u0039 } from 'react-icons-kit/noto_emoji_regular/u0039'
import { play3 } from 'react-icons-kit/icomoon/play3'
import React, { useState } from 'react'
import ContactPage from '@/components/bio_components/contact'

const BiodataPage = () => {
    const [data, setData] = useState({

    })
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
            id:1,
            icon: <Icon className='' icon={u0031} />,
            title: 'General Info'
        },
        {
            id:2,
            icon: <Icon className='' icon={u0032} />,
            title: 'Address'
        },
        {
            id:3,
            icon: <Icon className='' icon={u0033} />,
            title: 'Education Info'
        },
        {
            id:4,
            icon: <Icon className='' icon={u0034} />,
            title: 'Family Info'
        },
        {
            id:5,
            icon: <Icon className='' icon={u0035} />,
            title: 'Personal Info'
        },
        {
            id:6,
            icon: <Icon className='' icon={u0036} />,
            title: 'Professional Info'
        },
        {
            id:7,
            icon: <Icon className='' icon={u0037} />,
            title: 'Marital Status'
        },
        {
            id:8,
            icon: <Icon className='' icon={u0038} />,
            title: 'Partner Qality'
        },
        {
            id:9,
            icon: <Icon className='' icon={u0039} />,
            title: 'Aggrement'
        },
        {
            id:10,
            icon: <Icon className='' icon={u0030} />,
            title: 'Contact Info'

        }
    ]

    const formElements = [
        <GeneralInfoPage key={1} data={data} handleChange={handleChange} />,
        <Address key={2} data={data} handleChange={handleChange} />,
        <EducationPage key={3} data={data} handleChange={handleChange} />,
        <FamilyPage key={4} data={data} handleChange={handleChange} />,
        <PersonalPage key={5} data={data} handleChange={handleChange} />,
        <ProfessionalPage key={6} data={data} handleChange={handleChange} />,
        <MaritalPage key={7} data={data} handleChange={handleChange} />,
        <PartnerPage key={8} data={data} handleChange={handleChange} />,
        <AggrementPage key={9} data={data} handleChange={handleChange} />,
        <ContactPage key={10} data={data} handleChange={handleChange} />
    ]

    const showSideBarItem = (data) => {
        let array = []
        data.map((items, index) => {
            array.push(
                <div key={items.id} className='grid grid-cols-4'>
                    <span className={`${index === activeTab ? 'rounded-full bg-emerald-600 text-white p-1 w-fit' : 'p-1 rounded-full bg-white w-fit'} flex flex-row`}>{items.icon}</span>
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
                    onClick={() => setActiveTab(prev => prev - 1)}
                    className={`px-5 sm:px-16 py-2 rounded-xl bg-blue-600 text-white ${activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>
                    Back
                </button>
                <button
                    disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
                    onClick={() => setActiveTab(prev => prev + 1)}
                    className={`px-5 sm:px-16 py-2 rounded-xl bg-blue-600 text-white ${activeTab === formElements.length - 1 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>Next</button>
                {
                    activeTab === formElements.length - 1 ? <button className='px-5 sm:px-16 py-2 rounded-xl bg-blue-600 text-white' onClick={() => console.log(data)}>Submit</button> : null
                }
            </div>
        </div>
    )
}

BiodataPage.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>
}

export default BiodataPage