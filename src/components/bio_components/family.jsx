import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

const FamilyPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const [brothers, setBrothers] = useState(false);
  const [sisters, setsisters] = useState(false);
  const { data: session, status } = useSession();
  const [familyInfo, setFamilyInfo] = useState({
    father_name: '',
    father_profession_details: '',
    if_father_died: '',
    mother_name: '',
    if_mother_died: '',
    mother_profession_details: '',
    // brothers: '',
    // brothers_details: '',
    // sisters: '',
    // sisters_details: '',
    economy_short_brief: '',
    economy_status: '',
    deen_practice_in_house: ''
  });

  // const handleFamilyInfoChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === "brothers") {

  //     if (value === "") {
  //       setBrothers(false);
  //       const { brothers_details, ...updatedFamilyInfo } = familyInfo;

  //       setFamilyInfo({
  //         // ...updatedFamilyInfo,
  //         // delete brother_details field
  //         ...updatedFamilyInfo,

  //         [name]: value,
  //       });
  //     } else {
  //       setBrothers(true);
  //       setFamilyInfo((prevFamilyInfo) => ({
  //         ...prevFamilyInfo,
  //         brothers_details: "", // Empty brothers_details when "brothers" is not empty
  //         [name]: value,
  //       }));
  //     }
  //   } else if (name === "sisters") {
  //     if (value === "") {
  //       setsisters(false);
  //       const { sisters_details, ...updatedFamilyInfo } = familyInfo;

  //       setFamilyInfo({
  //         // ...updatedFamilyInfo,
  //         // delete sisters_details field
  //         ...updatedFamilyInfo,

  //         [name]: value,
  //       });
  //     } else {
  //       setsisters(true);
  //       setFamilyInfo((prevFamilyInfo) => ({
  //         ...prevFamilyInfo,
  //         sisters_details: "", // Empty sisters_details when "sisters" is not empty
  //         [name]: value,
  //       }));
  //     }
  //   } else {
  //     setFamilyInfo({
  //       ...familyInfo,
  //       [name]: value,

  //     });
  //   }

  // };


  const handleFamilyInfoChange = (event) => {
    const { name, value } = event.target;

    // if (name === "brothers") {
    //   if (value === "") {
    //     setBrothers(false);
    //   }else {
    //     setBrothers(true);
    //   }
    // }else if(name === 'sisters'){
    //   if (value === "") {
    //     setsisters(false);
    //   }else {
    //     setsisters(true);
    //   }
    // }


    setFamilyInfo({
      ...familyInfo,
      [name]: value
    })
  };


  useEffect(() => {
    // setData({
    //   ...data,
    //   familyInfo:{
    //     ...familyInfo,
    //     brothers_details: brothers ? familyInfo.brothers_details : '',
    //   },
    // });

    // const isDataEmpty = () => {

    //   // const allEmpty = Object.values(familyInfo).every(value => value.trim() === "");

    //   // const brothersNotEmpty = familyInfo.brothers.trim() !== "";
    //   // const sistersNotEmpty = familyInfo.sisters.trim() !== "";
    //   // const brothersDetailsEmpty = familyInfo.brothers_details.trim() === "";
    //   // const sistersDetailsEmpty = familyInfo.sisters_details.trim() === "";

    //   // return allEmpty || (brothersNotEmpty && sistersNotEmpty && brothersDetailsEmpty && sistersDetailsEmpty);


    //   //   for (const key in familyInfo) {
    //   //     if (key === "brothers" && familyInfo[key] !== "" && key === 'brothers_details' && !sistersExist) {
    //   //       // brothersOrSistersEmpty = true;
    //   //       console.log(key, typeof key)
    //   //       return true
    //   //     }
    //   //      else if (familyInfo[key].trim() === "") {
    //   //       console.log(key, typeof key)
    //   //       return true
    //   //     }
    //   //   }
    //   // return false


    //   const brothersExist = familyInfo.brothers.trim() !== "" && familyInfo.brothers_details && familyInfo.brothers_details !== "";
    //   const sistersExist = familyInfo.sisters.trim() !== "" && familyInfo.sisters_details && familyInfo.sisters_details !== "";

    //   for (const key in familyInfo) {
    //     if (key === "brothers" && !brothersExist || key === 'sisters' && !sistersExist) {
    //       return true;
    //     }  else if (familyInfo[key].trim() === "") {
    //       return true;
    //     }
    //   }

    //   return false;

    // };


    const isDataEmpty = () => {
      for (const key in familyInfo) {
        // Convert the value to a string before calling trim()
        // const value = String(familyInfo[key]);
        // if (value.trim() === "") {
        //   return true;
        // }
        if (familyInfo[key].trim() === "") {
          return true; // At least one property is empty
        }
      }
      return false;
    };

    if (isDataEmpty() || familyInfo === undefined) {

      setIsEmpty(true)
    } else if (!isDataEmpty()) {

      setIsEmpty(false)
      setData((prevData) => ({
        ...prevData,
        familyInfo:  familyInfo,
          // brothers_details: brothers ? familyInfo.brothers_details : '',
        
      }));
      setIsApi('/family/create')
    }
  }, [familyInfo, setData,setIsApi,setIsEmpty]);

  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);
      axios.get(`/family/getSingle/${decoded.id}`)
        .then(response => {       
          let resInfo = response.data.data
          if(resInfo === undefined){
            
          }else{
            setFamilyInfo(resInfo)
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
        {/* Father segment starts*/}

        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Father</h1>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
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
              placeholder="Father full name"
              value={familyInfo.father_name}
              onChange={handleFamilyInfoChange}
            />
          </div>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="if_father_died"
            >
              If father died or not
            </label>
            <select
              defaultValue={familyInfo?.if_father_died != undefined | familyInfo?.if_father_died != null ? familyInfo.if_father_died : "Selected_none"}
              name="if_father_died"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value={familyInfo?.if_father_died != undefined | familyInfo?.if_father_died != null ? familyInfo.if_father_died : "Selected_none"}>{familyInfo?.if_father_died != undefined | familyInfo?.if_father_died != null ? familyInfo.if_father_died : "Selected_none"}</option>
              <option value="Alive">Alive</option>
              <option value="died">died</option>
            </select>
          </div>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Father &apos;s profession details
            </label>
            <textarea
              name="father_profession_details"
              onChange={handleFamilyInfoChange}
              value={familyInfo.father_profession_details}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like: profession name, designation, or business type"
            ></textarea>
          </div>
        </div>

        {/* Father segment ends*/}

        {/* Mother segment starts*/}

        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Mother</h1>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
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
              placeholder="Mother s full name"
              value={familyInfo.mother_name}
              onChange={handleFamilyInfoChange}
            />
          </div>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="if_mother_died"
            >
              If mother died or not
            </label>
            <select
              defaultValue={familyInfo?.if_mother_died != undefined | familyInfo?.if_mother_died != null ? familyInfo.if_mother_died : "Selected_none"}
              name="if_mother_died"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value={familyInfo?.if_mother_died != undefined | familyInfo?.if_mother_died != null ? familyInfo.if_mother_died : "Selected_none"}>{familyInfo?.if_mother_died != undefined | familyInfo?.if_mother_died != null ? familyInfo.if_mother_died : "Selected_none"}</option>
              <option value="Alive">Alive</option>
              <option value="died">died</option>
            </select>
          </div>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Mother&apos;s profession details
            </label>
            <textarea
              name="mother_profession_details"
              onChange={handleFamilyInfoChange}
              value={familyInfo.mother_profession_details}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like: profession name, designation, or business type"
            ></textarea>
          </div>
        </div>

        {/* Mother segment ends*/}

        {/* Sibling segment starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Siblings Details</h1>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="brothers"
            >
              Number of brothers if any
            </label>
            <select
              defaultValue={familyInfo?.brothers != undefined | familyInfo?.brothers != null ? familyInfo.brothers : "Selected_none"}
              name="brothers"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value={familyInfo?.brothers != undefined | familyInfo?.brothers != null ? familyInfo.brothers : "Selected_none"}>{familyInfo?.brothers != undefined | familyInfo?.brothers != null ? familyInfo.brothers : "Selected_none"}</option>
              <option value="">No</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Brothers&apos; details
            </label>
            <textarea
              name="brothers_details"
              onChange={handleFamilyInfoChange}
              value={familyInfo.brothers_details}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like, Brothers' education, marital status or profession"
            ></textarea>
          </div>

          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="sisters"
            >
              Number of sisters if any
            </label>
            <select
              defaultValue={familyInfo?.sisters != undefined | familyInfo?.sisters != null ? familyInfo.sisters : "Selected_none"}
              name="sisters"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value={familyInfo?.sisters != undefined | familyInfo?.sisters != null ? familyInfo.sisters : "Selected_none"}>{familyInfo?.sisters != undefined | familyInfo?.sisters != null ? familyInfo.sisters : "Selected_none"}</option>
              <option value="">No</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Sisters&apos; details
            </label>
            <textarea
              name="sisters_details"
              onChange={handleFamilyInfoChange}
              value={familyInfo.sisters_details}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like, Sisters' education, marital status or profession"
            ></textarea>
          </div>
        </div>

        {/* Sibling segment ends*/}

        {/* paternal & maternal uncles starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              Paternal & maternal uncles details
            </label>
            <textarea
              name="paternal_maternal_uncles_details"
              onChange={handleFamilyInfoChange}
              value={familyInfo.paternal_maternal_uncles_details}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like:Name, profession, designation, or business type"
            ></textarea>
          </div>
        </div>
        {/* paternal & maternal uncles endss*/}

        {/* Economy status starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <h1 className="pl-3 text-lg font-bold">Financial condition</h1>
          <div className="px-3 flex flex-col gap-3  md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="economy_status"
            >
              Economy status
            </label>
            <select
              defaultValue={familyInfo?.economy_status != undefined | familyInfo?.economy_status != null ? familyInfo.economy_status : "Selected_none"}
              name="economy_status"
              onChange={handleFamilyInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value={familyInfo?.economy_status != undefined | familyInfo?.economy_status != null ? familyInfo.economy_status : "Selected_none"}>{familyInfo?.economy_status != undefined | familyInfo?.economy_status != null ? familyInfo.economy_status : "Selected_none"}</option>
              <option value="upper_class">upper class</option>
              <option value="upper_middle_class">upper middle class</option>
              <option value="middle_class">middle class</option>
              <option value="lower_middle_class">lower middle class</option>
            </select>
          </div>
          <div className="px-3 flex flex-col gap-3  md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              short brief
            </label>
            <textarea
              name="economy_short_brief"
              onChange={handleFamilyInfoChange}
              value={familyInfo.economy_short_brief}
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="Like: own or rental house, property, family business etc"
            ></textarea>
          </div>
        </div>
        {/* Economy status endss*/}

        {/* Deen practice in family starts*/}
        <div className="border border-gray-300 py-2 my-2">
          <div className="px-3 flex flex-col  gap-3 md:flex-row mb-3">
            <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">
              How about deen practice in house
            </label>
            <textarea
              name="deen_practice_in_house"
              onChange={handleFamilyInfoChange}
              value={familyInfo.deen_practice_in_house}
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
