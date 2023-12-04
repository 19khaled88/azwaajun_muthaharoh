// general.js
import React from 'react'

const ContactPage = (props) => {
    const {data,handleChange} = props

    return (
        <div className="w-full h-full mx-auto">
            <form className="bg-white h-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Username
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Username..." value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="Email..." value={data.email} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default ContactPage