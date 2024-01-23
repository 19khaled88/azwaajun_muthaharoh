import React, { useEffect, useState } from "react";

const PartnerPage = (props) => {
  const { data, setData } = props;
  const [partnerInfo, setPartnerInfo] = useState({});

  const handlePartnerInfoChange = (event) => {
    const { name, value } = event.target;
    setPartnerInfo({
      ...partnerInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    // setData({
    //   ...data,
    //   partnerInfo,
    // });

    setData((prevData) => ({
      ...prevData,
      partnerInfo
    }));
  }, [partnerInfo, setData]);

  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="complexion"
          >
            Complexion
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="complexion"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePartnerInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="height"
          >
            Height
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="height"
            type="text"
            placeholder="5' - 5'.10''"
            // value={educationalInfo.SSC}
            onChange={handlePartnerInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="edu_qualification"
          >
            Education Qualification
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="edu_qualification"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePartnerInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="district"
          >
            District
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="district"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePartnerInfoChange}
          />
        </div>

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
            // value={educationalInfo.SSC}
            onChange={handlePartnerInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="profession"
          >
            profession
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="profession"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePartnerInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="financial_condition"
          >
            Financial Condition
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="financial_condition"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePartnerInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
            
            Expected qualities of your futur life partner
          </label>
          <textarea
            name="expected_Qualities"
            onChange={handlePartnerInfoChange}
            className="textarea textarea-bordered w-full max-w-md"
            placeholder=""
          ></textarea>
        </div>

      </div>
    </form>
  );
};

export default PartnerPage;
