// General.jsx
import { useState, useEffect } from 'react'

const GeneralInfoPage = (props) => {
  const { data, setData } = props

  const [generalInfo, setGeneralInfo] = useState({
    bio_type:"",
    Marital_Status:"",
    Birth_Date:"",
    Height:"",
    Complexion:"",
    Weight:"",
    Blood_Group:"",
    Nationality:""

  })

  const handleAddressChange = (event) => {
    const { name, value } = event.target
    setGeneralInfo({
      ...generalInfo,
      [name]: value
    })
  }

  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in generalInfo) {
        if (generalInfo[key].trim() === "") {
          return true; // At least one property is empty
        }
      }
      return false; // All properties have values
    };
    if (!isDataEmpty()) {
      setData({
        ...data,
        geenral: generalInfo
      })
    }
  }, [generalInfo,data,setData])
  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
        <div className="  px-3 flex flex-col md:flex-row mb-3">
          <label className=" uppercase w-44 text-gray-700 text-xs font-bold mb-2" htmlFor="house-no">
            Bio Type
          </label>
          <input 
          className="w-full bg-gray-200 text-gray-700 border rounded p-2 px-4  leading-tight focus:outline-none focus:bg-white" 
          name="bio_type" type="text" placeholder="Bio data type" value={generalInfo.bio_type} onChange={handleAddressChange} />
        </div>
        <div className=" px-3  flex flex-col md:flex-row mb-3">
          <label className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold " htmlFor="locality">
            Marital Status
          </label>
          <input 
          className=" block w-full bg-gray-200 text-gray-700 border rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white" 
          name="marital_status" type="text" placeholder="Your marital status" value={generalInfo.Marital_Status} onChange={handleAddressChange} />
        </div>
        <div className=" px-3   flex flex-col md:flex-row mb-3">
          <label className=" w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
            Birth Date
          </label>
          <input 
          className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          name="birth_date" type="text" placeholder="Your actual birth date" value={generalInfo.Birth_Date} onChange={handleAddressChange} />
        </div>
        <div className=" px-3  flex flex-col md:flex-row mb-3">
          <label className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
            Height
          </label>
          <input 
          className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          name="height" type="text" placeholder="Your height" value={generalInfo.Height} onChange={handleAddressChange} />
        </div>
        <div className="  px-3  flex flex-col md:flex-row mb-3">
          <label className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
            Complexion
          </label>
          <input 
          className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          name="complexion" type="text" placeholder="Your complexion" value={generalInfo.Complexion} onChange={handleAddressChange} />
        </div>
        <div className=" px-3  flex flex-col md:flex-row mb-3">
          <label className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
            Weight
          </label>
          <input 
          className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          name="weight" type="text" placeholder="Your weight" value={generalInfo.Weight} onChange={handleAddressChange} />
        </div>
        <div className="  px-3  flex flex-col md:flex-row mb-3">
          <label className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
            Blood Group
          </label>
          <input 
          className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          name="blood group" type="text" placeholder="Your blood group" value={generalInfo.Blood_Group} onChange={handleAddressChange} />
        </div>
        <div className="  px-3  flex flex-col md:flex-row mb-3">
          <label className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
            Nationality
          </label>
          <input 
          className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          name="nationality" type="text" placeholder="Your nationality" value={generalInfo.Nationality} onChange={handleAddressChange} />
        </div>
      </div>
    </form>
  )
}

export default GeneralInfoPage