import React, { useEffect, useState } from "react";

const ProfessionalPage = (props) => {
  const { data, setData } = props;
  const [professionalInfo, setProfessionalInfo] = useState({});

  const handleProfessionalInfoChange = (event) => {
    const { name, value } = event.target;
    setProfessionalInfo({
      ...professionalInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    setData({
      ...data,
      professionalInfo,
    });
  }, [professionalInfo, setData]);

  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="occupation"
          >
            Occupation
          </label>
          <select
            defaultValue=""
            name="occupation"
            onChange={handleProfessionalInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value="">Selected none</option>
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
            Please describe you profession
          </label>
          <textarea
            name="occupation description"
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
            Monthly Income
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="income"
            type="text"
            placeholder="Like: 20000 taka"
            // value={educationalInfo.SSC}
            onChange={handleProfessionalInfoChange}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfessionalPage;
