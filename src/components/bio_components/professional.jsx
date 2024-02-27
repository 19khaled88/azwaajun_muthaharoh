import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

const ProfessionalPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const { data: session, status } = useSession();
  const [professionalInfo, setProfessionalInfo] = useState({
    income: "",
    occupation: "",
    occupation_description: ""
  });

  const handleProfessionalInfoChange = (event) => {
    const { name, value } = event.target;
    setProfessionalInfo({
      ...professionalInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in professionalInfo) {
        if (professionalInfo[key].trim() === "") {
          return true; // At least one property is empty
        }
      }
      return false;
    }

    if (isDataEmpty()) {
      setIsEmpty(true)
    } else if (!isDataEmpty()) {
      setIsEmpty(false)
      setData((prevData) => ({
        ...prevData,
        professionalInfo
      }));
      setIsApi('/professional/create')
    }

  }, [professionalInfo, setData,setIsApi,setIsEmpty]);

  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);
      axios.get(`/professional/getSingle/${decoded.id}`)
        .then(response => {
          let resInfo = response.data.data
          if (resInfo === undefined) {
            console.log(resInfo)
          } else {
            setProfessionalInfo(resInfo)
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
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="occupation"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Occupation
          </label>
          <select
            defaultValue={professionalInfo?.occupation != undefined | professionalInfo?.occupation != null ? professionalInfo.occupation : "Selected_none"}
            name="occupation"
            onChange={handleProfessionalInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value={professionalInfo?.occupation != undefined | professionalInfo?.occupation != null ? professionalInfo.occupation : "Selected_none"}>{professionalInfo?.occupation != undefined | professionalInfo?.occupation != null ? professionalInfo.occupation : "Selected_none"}</option>
            <option value="Imam">Imam</option>
            <option value="Businessman">Businessman</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Govt. Job">Govt. Job</option>
            <option value="Private Job">Private Job</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Freelencer">Freelencer</option>
            <option value="Expatriate">Expatriate</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
          <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Please describe you profession
          </label>
          <textarea
            value={professionalInfo.occupation_description}
            name="occupation_description"
            onChange={handleProfessionalInfoChange}
            className="textarea textarea-bordered w-full max-w-md"
            placeholder="Like: Place/location, designation, institution name, institution work, halal profession? etc"
          ></textarea>
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="income"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Monthly Income
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="income"
            type="text"
            placeholder="Like: 20000 taka"
            value={professionalInfo.income}
            onChange={handleProfessionalInfoChange}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfessionalPage;
