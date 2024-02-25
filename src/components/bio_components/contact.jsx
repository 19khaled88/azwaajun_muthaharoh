// contact.js
import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

const ContactPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const { data: session, status } = useSession();
  const [contactInfo, setContactInfo] = useState({
    candidate_name:'',
    gurdian_mobile:'',
    guardian_relationship:'',
    email_address:''
  });

  const handleContactInfoChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in contactInfo) {
        if (contactInfo[key].trim() === "") {
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
        contactInfo,
      }));
      setIsApi('/contact/create')
    }
  }, [contactInfo, setData,setIsApi,setIsEmpty]);


  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);
      axios.get(`/contact/getSingle/${decoded.id}`)
        .then(response => {
          let resInfo = response.data.data
          if(resInfo === undefined){
            
          }else{
            setContactInfo(resInfo)
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
            htmlFor="candidate_name"
          >
            Candidate &apos;s full name
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="candidate_name"
            type="text"
            placeholder=""
            value={contactInfo.candidate_name}
            onChange={handleContactInfoChange}
          />
        </div>

        <div className="px-3 flex flex- gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="gurdian_mobile"
          >
            Gardian &apos;s mobile number
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="gurdian_mobile"
            type="number"
            placeholder=""
            value={contactInfo.gurdian_mobile}
            onChange={handleContactInfoChange}
          />
        </div>

        <div className="px-3 flex flex- gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="guardian_relationship"
          >
            Relationship with guradian
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="guardian_relationship"
            type="text"
            placeholder=""
            value={contactInfo.guardian_relationship}
            onChange={handleContactInfoChange}
          />
        </div>
        <div className="px-3 flex flex- gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="email_address"
          >
            Email address to communicate
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="email_address"
            type="text"
            placeholder=""
            value={contactInfo.email_address}
            onChange={handleContactInfoChange}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactPage;
