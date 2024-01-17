import React, { useEffect, useState } from "react";

const MaritalPage = (props) => {
  const { data, setData } = props;
  const [maritalInfo, setMaritalInfo] = useState({});

  const handleMaritalInfoChange = (event) => {
    const { name, value } = event.target;
    setMaritalInfo({
      ...maritalInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    setData({
      ...data,
      maritalInfo,
    });
  }, [maritalInfo, setData]);

  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
      <div className="px-3 flex flex-col md:flex-row mb-3">
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
            // value={educationalInfo.SSC}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
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
            // value={educationalInfo.SSC}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
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
            // value={educationalInfo.SSC}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
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
            // value={educationalInfo.SSC}
            onChange={handleMaritalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col md:flex-row mb-3">
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
            // value={educationalInfo.SSC}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="gift_from_bride's_family"
          >
           Would you or your family expect any gifts from the bride's family?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="gift_from_bride's_family"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handleMaritalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
            
            Why are you getting married? give your thoughts.
          </label>
          <textarea
            name="marriage_thoughts"
            onChange={handleMaritalInfoChange}
            className="textarea textarea-bordered w-full max-w-md"
            placeholder=""
          ></textarea>
        </div>

      
      </div>
    </form>
  );
};

export default MaritalPage;
