import React, { useEffect, useState } from "react";

const AggrementPage = (props) => {
  const { data, setData } = props;
  const [agreeementInfo, setAgreementInfo] = useState({});

  const handleAgreementInfoChange = (event) => {
    const { name, value } = event.target;
    setAgreementInfo({
      ...agreeementInfo,
      [name]: value,
    });

    
  };

  useEffect(() => {
    // setData({
    //   ...data,
    //   agreeementInfo,
    // });

    setData((prevData) => ({
      ...prevData,
      agreeementInfo,
    }));
  }, [agreeementInfo, setData]);

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
            defaultValue=""
            name="parents_aware"
            onChange={handleAgreementInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value="">Selected none</option>
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
            defaultValue=""
            name="information_truth"
            onChange={handleAgreementInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value="">Selected none</option>
            <option value="yes">yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="cadidate_responsibility"
          >
            Do you agree that for your any wrongly provided info we are not responsible?
          </label>
          <select
            defaultValue=""
            name="cadidate_responsibility"
            onChange={handleAgreementInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value="">Selected none</option>
            <option value="yes">yes</option>
            <option value="No">No</option> 
          </select>
        </div>
      </div>
    </form>
  );
};

export default AggrementPage;
