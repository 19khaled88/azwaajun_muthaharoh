// General.jsx
import { useState, useEffect } from "react";
import axios from '../../axios/axiosInstance'
// import "jalaali-react-date-picker/lib/styles/index.css";
// import { DatePicker } from "jalaali-react-date-picker";
import { jwtDecode } from "jwt-decode";
import { useSession } from 'next-auth/react'
// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';


const GeneralInfoPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const { data: session, status } = useSession();
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [selected, setSelected] = useState();
  // const [isOpen, setIsOpen] = useState(false)
  // const [value, onChange] = useState(new Date())
  const [singleGeneralInfo, setSingleGeneralInfo] = useState('')

  const [generalInfo, setGeneralInfo] = useState({
    bio_type: "",
    marital_status: "",
    birth_date: "",
    height: "",
    complexion: "",
    weight: "",
    blood_group: "",
    nationality: "",
  });

  const handleGeneralInfoChange = (event) => {
    const { name, value } = event.target;
    setGeneralInfo((prevGeneralInfo) => (
      {
        ...prevGeneralInfo,
        [name]: value,

      }
    ))
  };

  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in generalInfo) {
        if (generalInfo[key].trim() === "") {
          return true; // At least one property is empty
        }
      }
      return false; // All properties have values
    };
    
    if (isDataEmpty() || generalInfo === undefined) {
      // setData((prevData) => ({
      //   ...prevData,
      //   generalInfo: generalInfo,
      // }));

      setIsEmpty(true)

    } else if (!isDataEmpty()) {

      setIsEmpty(false)
      setData((prevData) => ({
        ...prevData,
        generalInfo: generalInfo,
      }));
      setIsApi('/general/create')

    }
  }, [generalInfo, setData,setIsApi,setIsEmpty]);

  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);

      axios.get(`/general/getSingle/${decoded.id}`)
        .then(response => {
          // Handle successful response
          // setSingleGeneralInfo(response.data.data);
          let resInfo = response.data.data
          if(resInfo === undefined){
            
          }else{
           
            setGeneralInfo(resInfo)
          }
        })
        .catch(error => {
          // Handle error
          if (error.response) {
            // The request was made, but the server responded with a status code
            // outside of the 2xx range
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
            console.log('Response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made, but no response was received
            console.log('No response received from the server');
          } else {
            // Something happened in setting up the request that triggered the error
            console.log('Error:', error.message);
          }
        });
    }



  }, [session])


  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
        <div className="px-1 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="bio_type"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Bio Type
            
          </label>
          <select
            defaultValue={generalInfo?.bio_type != undefined | generalInfo?.bio_type != null ? generalInfo.bio_type : "Selected_none"}
            required
            name="bio_type"
            onChange={handleGeneralInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full"
          >
            <option value={generalInfo?.bio_type != undefined | generalInfo?.bio_type != null ? generalInfo.bio_type : "Selected_none"}>{generalInfo?.bio_type != undefined | generalInfo?.bio_type != null ? generalInfo.bio_type : "Selected_none"}</option>
            <option value="Bride">Bride</option>
            <option value="Groom">Groom</option>
          </select>
        </div>

        <div className="px-1 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="marital_status"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Marital Status
            
          </label>
          <select
            required
            defaultValue={generalInfo?.marital_status != undefined | generalInfo?.marital_status != null ? generalInfo.marital_status : "Selected_none"}
            name="marital_status"
            onChange={handleGeneralInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full"
          >
            <option value={generalInfo?.marital_status != undefined | generalInfo?.marital_status != null ? generalInfo.marital_status : "Selected_none"}>{generalInfo?.marital_status != undefined | generalInfo?.marital_status != null ? generalInfo.marital_status : "Selected_none"}</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
            <option value="Widow">Widow</option>
            <option value="Widower">Widower</option>
          </select>
        </div>

        <div className=" px-1 flex flex-col md:flex-row mb-3">
          <label
            className=" w-44 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="birth_date"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Birth Date
          </label>
          <div className="block w-full h-auto bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <DatePicker
              required
              onChange={(event) => event != null ? setGeneralInfo({ ...generalInfo, birth_date: event.toString() }) : setGeneralInfo({ ...generalInfo, birth_date: "" })}
              value={generalInfo.birth_date}
            />
          </div>
        </div>

        <div className=" px-1  flex flex-col md:flex-row mb-3">
          <label
            className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="height"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Height
          </label>
          <input
            required
            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="height"
            type="text"
            placeholder="Your height, example: 5 feet, 4 inches"
            value={generalInfo.height}
            onChange={handleGeneralInfoChange}
          />
        </div>

        <div className="  px-1  flex flex-col md:flex-row mb-3">
          <label
            className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="zip"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Complexion
          </label>
          <input
            required
            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="complexion"
            type="text"
            placeholder="Your complexion"
            value={generalInfo.complexion}
            onChange={handleGeneralInfoChange}
          />
        </div>

        <div className=" px-1  flex flex-col md:flex-row mb-3">
          <label
            className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="weight"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Weight
          </label>
          <input
            required
            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="weight"
            type="text"
            placeholder="Your weight, example: 50 kg"
            value={generalInfo.weight}
            onChange={handleGeneralInfoChange}
          />
        </div>

        <div className="  px-1  flex flex-col md:flex-row mb-3">
          <label
            className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="zip"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Blood Group
          </label>
          <input
            required
            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="blood_group"
            type="text"
            placeholder="Your blood group, example: O+"
            value={generalInfo.blood_group}
            onChange={handleGeneralInfoChange}
          />
        </div>

        <div className="  px-1  flex flex-col md:flex-row mb-3">
          <label
            className="block w-44  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="zip"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Nationality
          </label>
          <input
            required
            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="nationality"
            type="text"
            placeholder="Your nationality, example: Bangladeshi"
            value={generalInfo.nationality}
            onChange={handleGeneralInfoChange}
          />
        </div>
      </div>
    </form>
  );
};

export default GeneralInfoPage;
