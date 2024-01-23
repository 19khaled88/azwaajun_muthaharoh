// contact.js
import { useEffect, useState } from "react";

const ContactPage = (props) => {
  const { data, setData } = props;
  const [contactInfo, setContactInfo] = useState({});

  const handleContactInfoChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    // setData({
    //   ...data,
    //   contactInfo,
    // });

    setData((prevData) => ({
      ...prevData,
      contactInfo,
    }));

  }, [contactInfo, setData]);

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
          
            onChange={handleContactInfoChange}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactPage;
