import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

const PartnerPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const { data: session, status } = useSession();
  const [partnerInfo, setPartnerInfo] = useState({
    complexion:"",
    height:"",
    edu_qualification:"",
    district:"",
    marital_status:"",
    profession:"",
    financial_condition:"",
    expected_Qualities:"",
  });

  const handlePartnerInfoChange = (event) => {
    const { name, value } = event.target;
    setPartnerInfo({
      ...partnerInfo,
      [name]: value,
    });
  };

  useEffect(() => {
   
    const isDataEmpty = () => {
      for (const key in partnerInfo) {
        if (partnerInfo[key].trim() === "") {
          return true; // At least one property is empty
        }
      }
      return false;
    };
    if (isDataEmpty()) {
      setIsEmpty(true)
    } else if (!isDataEmpty()) {
      setIsEmpty(false)
      setData((prevData) => ({
        ...prevData,
        partnerInfo
      }));
      setIsApi('/partner/create')
    }

  }, [partnerInfo, setData,setIsApi,setIsEmpty]);

  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);
      axios.get(`/partner/getSingle/${decoded.id}`)
        .then(response => {
          let resInfo = response.data.data
          if(resInfo === undefined){
            console.log(resInfo)
          }else{
            setPartnerInfo(resInfo)
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

  console.log(partnerInfo)
  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="complexion"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Complexion
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="complexion"
            type="text"
            placeholder=""
            value={partnerInfo.complexion}
            onChange={handlePartnerInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="height"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Height
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="height"
            type="text"
            placeholder="5' - 5'.10''"
            value={partnerInfo.height}
            onChange={handlePartnerInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="edu_qualification"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Education Qualification
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="edu_qualification"
            type="text"
            placeholder=""
            value={partnerInfo.edu_qualification}
            onChange={handlePartnerInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="district"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            District
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="district"
            type="text"
            placeholder=""
            value={partnerInfo.district}
            onChange={handlePartnerInfoChange}
          />
        </div>
{/* 
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="marital_status"
          >
            Marital status
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="marital_status"
            type="text"
            placeholder=""
            value={partnerInfo.marital_status}
            onChange={handlePartnerInfoChange}
          />
        </div> */}

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="marital_status"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Marital status
          </label>
          <select
            value={partnerInfo?.marital_status === undefined ? "Selected_none" : partnerInfo?.marital_status === null ? "Selected_none" : partnerInfo.marital_status }
            name="marital_status"
            onChange={handlePartnerInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value={partnerInfo?.marital_status === undefined ? "" : partnerInfo?.marital_status === null ? "" : partnerInfo.marital_status}>{partnerInfo?.marital_status === undefined ? "Selected_none" : partnerInfo?.marital_status === null ? "Selected_none" : partnerInfo.marital_status}</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
            <option value="Widow">Widow</option>
            <option value="Widower">Widower</option>
           
          </select>
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="profession"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            profession
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="profession"
            type="text"
            placeholder=""
            value={partnerInfo.profession}
            onChange={handlePartnerInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="financial_condition"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Financial Condition
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="financial_condition"
            type="text"
            placeholder=""
            value={partnerInfo.financial_condition}
            onChange={handlePartnerInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
          <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Expected qualities of your futur life partner
          </label>
          <textarea
            name="expected_Qualities"
            onChange={handlePartnerInfoChange}
            className="textarea textarea-bordered w-full max-w-md"
            placeholder=""
            value={partnerInfo.expected_Qualities}
          ></textarea>
        </div>

      </div>
    </form>
  );
};

export default PartnerPage;
