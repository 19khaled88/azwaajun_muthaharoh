// //Education.jsx
// import { useState, useEffect } from "react";
// import Select, { Props } from "react-select";

// const sampleOptions = [
//   {
//     label: "Finland",
//     options: [
//       {
//         label: "hafej",
//         name: "",
//         value: "hafej",
//       },
//       {
//         label: "maowlana",
//         name: "",
//         value: "maowlana",
//       },
//       {
//         label: "mufti",
//         name: "",
//         value: "mufti",
//       },
//       {
//         label: "mufassir",
//         name: "",
//         value: "mufassir",
//       },
//     ],
//   },
// ];

// const EducationPage = (prop) => {
//   const { data, setData } = prop;
//   const [selectedOption, setSelectedOption] = useState("");
//   const [heightSelected, setHeightSelected] = useState("");
//   const [educationalInfo, setEducationalInfo] = useState({
//     // education_medium: "",
//     // Top_taken_degree: "",
//     // SSC:""
//   });

//   const handleEducationalInfoChange = (event) => {
//     const { name, value } = event.target;
//     // if(name === 'Top_taken_degree' && value === ''){
//     //   console.log(educationalInfo)
//     //   setEducationalInfo({
//     //     education_medium:value,
//     //     Top_taken_degree:value,
//     //     [name]:""
//     //   })
//     // }
//     if (name === 'education_medium' && value === '') {
//       setEducationalInfo({
//         education_medium: value,
//         [name]: ""
//         // Top_taken_degree: "",
//         // SSC: "",
//         // ssc_department: "",
//         // ... reset other fields as needed
//       });

//     } else if (name === 'Top_taken_degree' && name === 'S.S.C' && value === '') {
//       setEducationalInfo({
//         ...educationalInfo,
//         Top_taken_degree: value,
//         ssc_department: "",
//         ssc_year:"",
//         ssc_result:"",
//         [name]: ""
//         // ssc_department: "", // Reset 'ssc_department'

//       });

//     } else if (name === 'Top_taken_degree' && name === 'H.S.C' && value === '') {
//       setEducationalInfo({
//         ...educationalInfo,
//         Top_taken_degree: value,
//         hsc_department: "",
//         hsc_year:"",
//         hsc_result:"",
//         [name]: ""
//         // ssc_department: "", // Reset 'ssc_department'

//       });

//     } else if (name === 'Top_taken_degree' && name === 'S.S.C' && value != '' && value != educationalInfo.Top_taken_degree) {
//       setEducationalInfo({
//         ...educationalInfo,
//         Top_taken_degree: value,
//         ssc_department: "",
//         ssc_result:"",
//         ssc_year: "",
//         [name]:""
//       });

//     }else if (name === 'Top_taken_degree' && name === 'H.S.C' && value != '' && value != educationalInfo.Top_taken_degree) {
//       setEducationalInfo({
//         ...educationalInfo,
//         Top_taken_degree: value,
//         hsc_department: "",
//         hsc_result:"",
//         hsc_year: "",
//         [name]:""
//       });

//     } else {
//       setEducationalInfo({
//         ...educationalInfo,
//         [name]: value,
//       });

//     }
//   };

//   useEffect(() => {
//     // const isDataEmpty = () => {
//     //   for (const key in generalInfo) {
//     //     if (generalInfo[key].trim() === "") {
//     //       return true; // At least one property is empty
//     //     }
//     //   }
//     //   return false; // All properties have values
//     // };
//     // if (!isDataEmpty()) {
//     //   setData({
//     //     ...data,
//     //     generalInfo: generalInfo,
//     //   });
//     // }
//   }, [educationalInfo, setData]);

  

//   return (
//     <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
//       <div className="flex flex-col -mx-3 mb-6">
//         <div className="px-3 flex flex-col md:flex-row mb-3">
//           <label
//             className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//             htmlFor="education_medium"
//           >
//             Education medium
//           </label>
//           <select
//             defaultValue="Selected_none"
//             name="education_medium"
//             onChange={handleEducationalInfoChange}
//             className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
//           >
//             <option value="">Selected none</option>
//             <option value="general">General</option>
//             <option value="kowmi">Kowmi</option>
//             <option value="alia">Alia</option>
//           </select>
//         </div>

//         {educationalInfo.education_medium &&
//           educationalInfo.education_medium != "" ? (
//           <>
//             <div className="px-3 flex flex-col md:flex-row mb-3">
//               <label
//                 className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="Top_taken_degree"
//               >
//                 Top taken degree
//               </label>
//               <select
//                 defaultValue="Selected none"
//                 name="Top_taken_degree"
//                 onChange={handleEducationalInfoChange}
//                 className="border rounded-md border-teal-600 hover:border-pink-500 h-9 shadow-xl input input-bordered w-full max-w-md"
//               >
//                 <option value="">Selected none</option>
//                 <option value="doctorate_degree">doctorate degree</option>
//                 <option value="Post_graduation">Post graduation</option>
//                 <option value="Graduation">Graduation</option>
//                 <option value="H.S.C">H.S.C</option>
//                 <option value="Diploma">Diploma</option>
//                 <option value="S.S.C">S.S.C</option>
//                 <option value="Bellow_S.S.C">Bellow S.S.C</option>
//               </select>
//             </div>



//             {educationalInfo.Top_taken_degree === "S.S.C" ? (
//               <>
//                 <div className="px-3 flex flex-col md:flex-row mb-3">
//                   <label
//                     className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//                     htmlFor="ssc_year"
//                   >
//                     S.S.C / Dakhil / same evaluation pass year
//                   </label>
//                   <input
//                     className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
//                     name="ssc_year"
//                     type="number"
//                     placeholder="Like: 2024"
//                     // value={educationalInfo.SSC}
//                     onChange={handleEducationalInfoChange}
//                   />
//                 </div>

//                 <div className="px-3 flex flex-col md:flex-row mb-3">
//                   <label
//                     className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//                     htmlFor="ssc_department"
//                   >
//                     Department
//                   </label>
//                   <select
//                     defaultValue="Select department"
//                     name="ssc_department"
//                     onChange={handleEducationalInfoChange}
//                     className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
//                   >
//                     <option value="">Select department</option>
//                     <option value="Science">Science</option>
//                     <option value="Business_studies">Business studies</option>
//                     <option value="arts">arts</option>
//                     <option value="vocational">vocational</option>
//                   </select>
//                 </div>

                
//                 <div className="px-3 flex flex-col md:flex-row mb-3">
//                   <label
//                     className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//                     htmlFor="ssc_result"
//                   >
//                     Result
//                   </label>
//                   <select
//                     defaultValue="Select result"
//                     name="ssc_result"
//                     onChange={handleEducationalInfoChange}
//                     className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
//                   >
//                     <option value="">Select result</option>

//                     <option value="A+">A+</option>
//                     <option value="A">A</option>
//                     <option value="A-">A-</option>
//                     <option value="B">B</option>
//                     <option value="C">C</option>
//                     <option value="D">D</option>
//                   </select>
//                 </div>
//               </>
//             ) : educationalInfo.Top_taken_degree === "Bellow_S.S.C" ? (
//               ""
//             ) : educationalInfo.Top_taken_degree === "H.S.C" ? (
//               <>
//               <div className="px-3 flex flex-col md:flex-row mb-3">
//                 <label
//                   className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="hsc_year"
//                 >
//                   H.S.C / Alim / same evaluation pass year
//                 </label>
//                 <input
//                   className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
//                   name="hsc_year"
//                   type="number"
//                   placeholder="Like: 2024"
//                   // value={educationalInfo.SSC}
//                   onChange={handleEducationalInfoChange}
//                 />
//               </div>

//               <div className="px-3 flex flex-col md:flex-row mb-3">
//                 <label
//                   className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="hsc_department"
//                 >
//                   Department
//                 </label>
//                 <select
//                   defaultValue="Select department"
//                   name="hsc_department"
//                   onChange={handleEducationalInfoChange}
//                   className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
//                 >
//                   <option value="">Select department</option>
//                   <option value="Science">Science</option>
//                   <option value="Business_studies">Business studies</option>
//                   <option value="arts">arts</option>
//                   <option value="vocational">vocational</option>
//                 </select>
//               </div>

              
//               <div className="px-3 flex flex-col md:flex-row mb-3">
//                 <label
//                   className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="hsc_result"
//                 >
//                   Result
//                 </label>
//                 <select
//                   defaultValue="Select result"
//                   name="hsc_result"
//                   onChange={handleEducationalInfoChange}
//                   className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
//                 >
//                   <option value="">Select result</option>

//                   <option value="A+">A+</option>
//                   <option value="A">A</option>
//                   <option value="A-">A-</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                 </select>
//               </div>
//             </>
//             ) : (
//               ""
//             )}
//           </>
//         ) : (
//           ""
//         )}

//         {/* {
//           educationalInfo.Top_taken_degree === 'S.S.C' ? 

//           <>          
//           <div className="px-3 flex flex-col md:flex-row mb-3">
//             <label
//               className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//               htmlFor="SSC"
//             >
//               S.S.C / Dakhil / same evaluation pass year
//             </label>
//             <input
//               className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
//               name="SSC"
//               type="number"
//               placeholder="Like: 2024"
//               // value={educationalInfo.SSC}
//               onChange={handleEducationalInfoChange}
//             />
//           </div> 

//           <div className="px-3 flex flex-col md:flex-row mb-3">
//           <label
//             className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//             htmlFor="ssc_department"
//           >
//             Department
//           </label>
//           <select
//             defaultValue="Select department"
//             name="ssc_department"
//             onChange={handleEducationalInfoChange}
//             className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
//           >
//             <option value="">Select department</option>
//             <option value="Science">Science</option>
//             <option value="Business_studies">Business studies</option>
//             <option value="arts">arts</option>
//             <option value="vocational">vocational</option>
//           </select>
//         </div>
//           </>
//            :  
//           educationalInfo.Top_taken_degree === 'Bellow_S.S.C' ?
//            "" :
//           educationalInfo.Top_taken_degree === "" ?
//           "" :
//           ""
//         } */}

//         <div className="px-3 flex flex-col md:flex-row mb-3">
//           <label
//             className=" uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//             htmlFor=""
//           >
//             Other educational qualification
//           </label>
//           <textarea
//             className="textarea textarea-bordered w-full max-w-md"
//             placeholder=""
//           ></textarea>
//         </div>

//         <div className="px-3 flex flex-col md:flex-row mb-3">
//           <label
//             className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
//             htmlFor="entitlement"
//           >
//             Any achieved entitlement
//           </label>

//           <Select
//             defaultInputValue={selectedOption}
//             onChange={setSelectedOption}
//             options={sampleOptions}
//             isMulti
//             closeMenuOnSelect={false}
//             hideSelectedOptions={false}
//             className="input-bordered w-full max-w-md"
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EducationPage;
