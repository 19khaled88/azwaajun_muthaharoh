import React, { useState, useEffect } from "react";

const FamilyPage = (props) => {
  const { data, setData } = props;
  const [brothers, setBrothers] = useState(false);
  const [sisters, setsisters] = useState(false);
  const [familyInfo, setFamilyInfo] = useState({});

  const handleFamilyInfoChange = (event) => {
    const { name, value } = event.target;
   
    if (name === "brothers") {
      
      if (value === "") {
        setBrothers(false);
        setFamilyInfo({
          ...familyInfo,
          brothers_details: "", // Empty brothers_details when "brothers" is empty
          [name]: value,
        });
      } else {
        setBrothers(true);
        setFamilyInfo({
          ...familyInfo,
         
          [name]: value,
        });
      }
    } else if (name === "sisters") {
      if (value === "") {
        setsisters(false);
        setFamilyInfo({
          ...familyInfo,
          sisters_details: "", // Empty brothers_details when "brothers" is empty
          [name]: value,
        });
      } else {
        setsisters(true);
        setFamilyInfo({
          ...familyInfo,
          [name]: value,
        });
      }
    }else{
      setFamilyInfo({
        ...familyInfo,
        [name]: value,
        
      });
    }
   
  };

  useEffect(() => {
    setData({
      ...data,
      familyInfo:{
        ...familyInfo,
        brothers_details: brothers ? familyInfo.brothers_details : '',
      },
    });

  }, [familyInfo, setData]);


  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
        {/* Father segment starts*/}

        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Father</h1>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="father_name"
            >
              Father Name
            </label>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
              name="father_name"
              type="text"
              placeholder="Father's full name"
              // value={educationalInfo.SSC}
              onChange={handleFamilyInfoChange}
            />
          </div>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="if_father_died"
            >
              If father died or not
            </label>
            <select
              defaultValue=""
              name="if_father_died"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value="">Selected none</option>
              <option value="Alive">Alive</option>
              <option value="died">died</option>
            </select>
          </div>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Father's profession details
            </label>
            <textarea
              name="father_profession_details"
              onChange={handleFamilyInfoChange}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like: profession name, designation, or business type"
            ></textarea>
          </div>
        </div>

        {/* Father segment ends*/}

        {/* Mother segment starts*/}

        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Mother</h1>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="mother_name"
            >
              Mother name
            </label>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
              name="mother_name"
              type="text"
              placeholder="Mother's full name"
              // value={educationalInfo.SSC}
              onChange={handleFamilyInfoChange}
            />
          </div>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="if_mother_died"
            >
              If mother died or not
            </label>
            <select
              defaultValue=""
              name="if_mother_died"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value="">Selected none</option>
              <option value="Alive">Alive</option>
              <option value="died">died</option>
            </select>
          </div>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Mother's profession details
            </label>
            <textarea
              name="mother_profession_details"
              onChange={handleFamilyInfoChange}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like: profession name, designation, or business type"
            ></textarea>
          </div>
        </div>

        {/* Mother segment ends*/}

        {/* Sibling segment starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Siblings Details</h1>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="brothers"
            >
              Number of brothers if any
            </label>
            <select
              defaultValue=""
              name="brothers"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value="">Selected none</option>
              <option value="">No</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          {brothers === true ? (
            <div className="px-3 flex flex-col md:flex-row mb-3">
              <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
                Brothers' details
              </label>
              <textarea
                name="brothers_details"
                onChange={handleFamilyInfoChange}
                className="textarea textarea-bordered w-full max-w-md"
                placeholder="Like, Brothers' education, marital status or profession"
              ></textarea>
            </div>
          ) : (
            ""
          )}

          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="sisters"
            >
              Number of sisters if any
            </label>
            <select
              defaultValue=""
              name="sisters"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value="">Selected none</option>
              <option value="">No</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          {sisters === true ? (
            <div className="px-3 flex flex-col md:flex-row mb-3">
              <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
                Sisters' details
              </label>
              <textarea
                name="sisters_details"
                onChange={handleFamilyInfoChange}
                className="textarea textarea-bordered w-full max-w-md"
                placeholder="Like, Sisters' education, marital status or profession"
              ></textarea>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Sibling segment ends*/}

        {/* paternal & maternal uncles starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Paternal & maternal uncles details
            </label>
            <textarea
              name="paternal_maternal_uncles_details"
              onChange={handleFamilyInfoChange}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like:Name, profession, designation, or business type"
            ></textarea>
          </div>
        </div>
        {/* paternal & maternal uncles endss*/}

        {/* Economy status starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Financial condition</h1>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="economy_status"
            >
              Economy status
            </label>
            <select
              defaultValue=""
              name="economy_status"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value="">Selected none</option>
              <option value="upper_class">upper class</option>
              <option value="upper_middle_class">upper middle class</option>
              <option value="middle_class">middle class</option>
              <option value="lower_middle_class">lower middle class</option>
            </select>
          </div>
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              short brief
            </label>
            <textarea
              name="economy_short_brief"
              onChange={handleFamilyInfoChange}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like: own or rental house, property, family business etc"
            ></textarea>
          </div>
        </div>
        {/* Economy status endss*/}

        {/* Deen practice in family starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              How about deen practice in house
            </label>
            <textarea
              name="deen_practice_in_house"
              onChange={handleFamilyInfoChange}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like: if family members follow mahram or non-mahram in family arena"
            ></textarea>
          </div>
        </div>
        {/* Deen practice in family endss*/}
      </div>
    </form>
  );
};

export default FamilyPage;
