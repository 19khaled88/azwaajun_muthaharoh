import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

const MaritalPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const { data: session, status } = useSession();
  const [maritalInfo, setMaritalInfo] = useState({
    guardian_agree: "",
    marriage_veil: "",
    study_after_marriage: "",
    job_after_marriage: "",
    resite_after_marriage: "",
    gift_from_brides_family: "",
    marriage_thoughts: ""
  });


  const handleMaritalInfoChange = (event) => {
    const { name, value } = event.target;
    setMaritalInfo({
      ...maritalInfo,
      [name]: value,
    });
  };


  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in maritalInfo) {
        if (maritalInfo[key].trim() === "") {
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
        maritalInfo
      }));
      setIsApi('/marital/create')
    }

  }, [maritalInfo, setData,setIsApi,setIsEmpty]);


  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);

      axios.get(`/marital/getSingle/${decoded.id}`)
        .then(response => {
          let maritalRes = response.data.data
          if(maritalRes === undefined){
            console.log(maritalRes)
          }else{
            setMaritalInfo(maritalRes)
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
            htmlFor="guardian_agree"
          >
            Do your guardians agree to your marriage?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="guardian_agree"
            type="text"
            placeholder=""
            value={maritalInfo.guardian_agree}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="marriage_veil"
          >
            Will you be able to keep your wife in veil after marriage?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="marriage_veil"
            type="text"
            placeholder=""
            value={maritalInfo.marriage_veil}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="study_after_marriage"
          >
            Would you like to allow your wife to study after marriage?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="study_after_marriage"
            type="text"
            placeholder=""
            value={maritalInfo.study_after_marriage}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="job_after_marriage"
          >
            Would you like to allow your wife to do any job after marriage?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="job_after_marriage"
            type="text"
            placeholder=""
            value={maritalInfo.job_after_marriage}
            onChange={handleMaritalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="resite_after_marriage"
          >
            where will you reside/live with your wife after marriage?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="resite_after_marriage"
            type="text"
            placeholder=""
            value={maritalInfo.resite_after_marriage}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="gift_from_brides_family"
          >
            Would you or your family expect any gifts from the bride&apos;s family?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="gift_from_brides_family"
            type="text"
            placeholder=""
            value={maritalInfo.gift_from_brides_family}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
            Why are you getting married? give your thoughts.
          </label>
          <textarea
            name="marriage_thoughts"
            onChange={handleMaritalInfoChange}
            value={maritalInfo.marriage_thoughts}
            className="textarea textarea-bordered w-full max-w-md"
            placeholder=""
          ></textarea>
        </div>
      </div>
    </form>
  );
};


export default MaritalPage;
