import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

const AgreementPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const { data: session, status } = useSession();
  const [agreementInfo, setAgreementInfo] = useState({
    parents_aware:'',
    information_truth:'',
    candidate_responsibility:'',
  });

  const handleAgreementInfoChange = (event) => {
    const { name, value } = event.target;
    setAgreementInfo({
      ...agreementInfo,
      [name]: value,
    });
  };

  useEffect(() => {

    const isDataEmpty = () => {
      for (const key in agreementInfo) {
        if (agreementInfo[key].trim() === "") {
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
        agreementInfo,
      }));
      setIsApi('/agreement/create')
    }

  }, [agreementInfo, setData,setIsEmpty,setIsApi]);

  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);
      axios.get(`/agreement/getSingle/${decoded.id}`)
        .then(response => {
          let resInfo = response.data.data
          if(resInfo === undefined){
           
          }else{
            setAgreementInfo(resInfo)
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
            htmlFor="parents_aware"
          >
            Do your parents aware of submitting biodata to our website
          </label>
          <select
            defaultValue={agreementInfo?.parents_aware != undefined | agreementInfo?.parents_aware != null ? agreementInfo.parents_aware : "Selected_none"}
            name="parents_aware"
            onChange={handleAgreementInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value={agreementInfo?.parents_aware != undefined | agreementInfo?.parents_aware != null ? agreementInfo.parents_aware : "Selected_none"}>{agreementInfo?.parents_aware != undefined | agreementInfo?.parents_aware != null ? agreementInfo.parents_aware : "Selected_none"}</option>
            <option value="yes">yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="information_truth"
          >
            By Allah, testify that all the information you provided is true
          </label>
          <select
            defaultValue={agreementInfo?.information_truth != undefined | agreementInfo?.information_truth != null ? agreementInfo.information_truth : "Selected_none"}
            name="information_truth"
            onChange={handleAgreementInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value={agreementInfo?.information_truth != undefined | agreementInfo?.information_truth != null ? agreementInfo.information_truth : "Selected_none"}>{agreementInfo?.information_truth != undefined | agreementInfo?.information_truth != null ? agreementInfo.information_truth : "Selected_none"}</option>
            <option value="yes">yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="candidate_responsibility"
          >
            Do you agree that for your any wrongly provided info we are not responsible?
          </label>
          <select
            defaultValue={agreementInfo?.candidate_responsibility != undefined | agreementInfo?.candidate_responsibility != null ? agreementInfo.candidate_responsibility : "Selected_none"}
            name="candidate_responsibility"
            onChange={handleAgreementInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value={agreementInfo?.candidate_responsibility != undefined | agreementInfo?.candidate_responsibility != null ? agreementInfo.candidate_responsibility : "Selected_none"}>{agreementInfo?.candidate_responsibility != undefined | agreementInfo?.candidate_responsibility != null ? agreementInfo.candidate_responsibility : "Selected_none"}</option>
            <option value="yes">yes</option>
            <option value="No">No</option> 
          </select>
        </div>
      </div>
    </form>
  );
};

export default AgreementPage;
