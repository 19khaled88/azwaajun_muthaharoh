//Education.jsx
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from '../../axios/axiosInstance'
import Select, { Props } from "react-select";

const sampleOptions = [
    {
        label: "Select multiple",
        options: [
            {
                label: "hafej",
                name: "hafej",
                value: "hafej",
            },
            {
                label: "maowlana",
                name: "maowlana",
                value: "maowlana",
            },
            {
                label: "mufti",
                name: "mufti",
                value: "mufti",
            },
            {
                label: "mufassir",
                name: "mufassir",
                value: "mufassir",
            },
        ],
    },
];

const EducationPage = (prop) => {
    const { data, setData, setIsEmpty, setIsApi } = prop;
    const [selectedOption, setSelectedOption] = useState([]);
    const { data: session, status } = useSession();

    const [educationalInfo, setEducationalInfo] = useState({
        education_medium: "",
        ssc_institute: "",
        ssc_year: "",
        ssc_department: "",
        ssc_result: "",
    });

    const handleEducationalInfoChange = (event) => {
        const { name, value } = event.target;
        setEducationalInfo({
            ...educationalInfo,
            [name]: value,
        })
    };

    useEffect(() => {
        const isDataEmpty = () => {
            for (const key in educationalInfo) {
                // Convert the value to a string before calling trim()
                const value = String(educationalInfo[key]);
                if (value.trim() === "") {
                    return true;
                }
            }
            return false;
        };

        if (isDataEmpty() || educationalInfo === undefined) {
            setIsEmpty(true)
        }

        if (!isDataEmpty()) {
            setIsEmpty(false)
            if (selectedOption.length === 0) {
                setData((prevData) => ({
                    ...prevData,
                    educationalInfo: {
                        ...educationalInfo

                    },
                }));

            } else {
                const entitlementValues = selectedOption?.map(option => option.value); // Extracting values from selected options
                setData((prevData) => ({
                    ...prevData,
                    educationalInfo: {
                        ...educationalInfo,
                        entitlement: entitlementValues, // Assigning array of values to the entitlement property
                    },
                }));
            }
            setIsApi('/edu/create')
        }


    }, [educationalInfo, setData, selectedOption,setIsApi,setIsEmpty]);

    useEffect(() => {
        if (session && session.accessToken) {
            const decoded = jwtDecode(session.accessToken);

            axios.get(`/edu/getSingle/${decoded.id}`)
                .then(response => {
                    let resInfo = response.data.data
                    if(resInfo === undefined){
            
                    }else{
                        
                        delete resInfo.createAt
                        delete resInfo.updatedAt
                        delete resInfo.user_id
                        delete resInfo.id
                        
                        const transformedOptions = resInfo.entitlement.map(item=> ({
                            label: item, // Assuming your database query result has a 'name' field
                            value: item // Assuming your database query result has an 'id' field
                          }));
                          setSelectedOption(transformedOptions)
                          delete resInfo.entitlement
                         for(let item in resInfo){
                            if(resInfo[item] !== null){
                                setEducationalInfo(prevState=>({
                                    ...prevState,
                                    [item]:resInfo[item]
                                }))
                                
                            }
                         }
                          
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

                <div className="px-3 flex flex-col md:flex-row mb-3">
                    <label
                        className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                        htmlFor="education_medium"
                    >
                        <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
                        Education medium
                    </label>
                    <select
                        defaultValue={educationalInfo?.education_medium != undefined | educationalInfo?.education_medium != null ? educationalInfo.education_medium : "Selected_none"}
                        name="education_medium"
                        onChange={handleEducationalInfoChange}
                        className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                    >
                        <option value={educationalInfo?.education_medium != undefined | educationalInfo?.education_medium != null ? educationalInfo.education_medium : ""}>{educationalInfo?.education_medium != undefined | educationalInfo?.education_medium != null ? educationalInfo.education_medium : "Selected_none"}</option>
                        <option value="general">General</option>
                        <option value="kowmi">Kowmi</option>
                        <option value="alia">Alia</option>
                    </select>
                </div>

                {/* S.S.C or equivalent education information starts*/}

                <div className="border border-gray-300 py-2 my-2">
                    <h1 className="pl-3 text-lg font-bold">S.S.C / Equivalent Evaluation</h1>
                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="ssc_institute"
                        >
                            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
                            Institution Name
                        </label>
                        <input
                            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                            name="ssc_institute"
                            type="text"
                            placeholder="Institution name you studied in"
                            value={educationalInfo.ssc_institute}
                            onChange={handleEducationalInfoChange}
                        />
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="ssc_year"
                        >
                            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
                            passing year
                        </label>
                        <input
                            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                            name="ssc_year"
                            type="number"
                            placeholder="Like: 2024"
                            value={educationalInfo.ssc_year}
                            onChange={handleEducationalInfoChange}
                        />
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="ssc_department"
                        >
                            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
                            Department
                        </label>
                        <select
                            defaultValue={educationalInfo?.ssc_department != undefined | educationalInfo?.ssc_department != null ? educationalInfo.ssc_department : "Selected_none"}
                            name="ssc_department"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value={educationalInfo?.ssc_department != undefined | educationalInfo?.ssc_department != null ? educationalInfo.ssc_department : ""}>{educationalInfo?.ssc_department != undefined | educationalInfo?.ssc_department != null ? educationalInfo.ssc_department : "Selected_none"}</option>
                            <option value="Science">Science</option>
                            <option value="Business_studies">Business studies</option>
                            <option value="arts">arts</option>
                            <option value="vocational">vocational</option>
                        </select>
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="ssc_result"
                        >
                            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
                            Result
                        </label>
                        <select
                            defaultValue={educationalInfo?.ssc_result != undefined | educationalInfo?.ssc_result != null ? educationalInfo.ssc_result : "Selected_none"}
                            name="ssc_result"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value={educationalInfo?.ssc_result != undefined | educationalInfo?.ssc_result != null ? educationalInfo.ssc_result : ""}>{educationalInfo?.ssc_result != undefined | educationalInfo?.ssc_result != null ? educationalInfo.ssc_result : "Selected_none"}</option>

                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">Further infomation</label>
                        <textarea
                            name="ssc_other_info"
                            onChange={handleEducationalInfoChange}
                            className="textarea textarea-bordered w-full max-w-md"
                            placeholder=""
                            value={educationalInfo.ssc_other_info}
                        ></textarea>
                    </div>
                </div>

                {/* S.S.C or equivalent education information ends*/}


                {/* Highest degree information starts*/}

                <div className="border border-gray-300 py-2 my-2">
                    <h1 className="pl-3 text-lg font-bold">Highest Degree</h1>
                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="top_degree_name"
                        >
                            Degree
                        </label>
                        <select
                            defaultValue={educationalInfo?.top_degree_name != undefined | educationalInfo?.top_degree_name != null ? educationalInfo.top_degree_name : "Selected None"}
                            name="top_degree_name"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value={educationalInfo?.top_degree_name != undefined | educationalInfo?.top_degree_name != null ? educationalInfo.top_degree_name : ""}>{educationalInfo?.top_degree_name != undefined | educationalInfo?.top_degree_name != null ? educationalInfo.top_degree_name : "Selected None"}</option>
                            <option value="Doctorte_degree">Doctorte degree</option>
                            <option value="post_gradution">Post_gradution</option>
                            <option value="Graduation">Graduation</option>
                            <option value="H.S.C">H.S.C</option>

                        </select>
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="highest_degree_institute"
                        >
                            Institution Name
                        </label>
                        <input
                            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                            name="highest_degree_institute"
                            type="text"
                            placeholder="Institution name you studied in"
                            value={educationalInfo.highest_degree_institute}
                            onChange={handleEducationalInfoChange}
                        />
                    </div>
                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="top_degree_pass_year"
                        >
                            passing year
                        </label>
                        <input
                            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                            name="top_degree_pass_year"
                            type="number"
                            placeholder="Like: 2024"
                            value={educationalInfo.top_degree_pass_year}
                            onChange={handleEducationalInfoChange}
                        />
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="top_degree_subject_department"
                        >
                            Department / Subject
                        </label>
                        <input
                            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                            name="top_degree_subject_department"
                            type="text"
                            placeholder="Like: Accounting, Management, Physics etc"
                            value={educationalInfo.top_degree_subject_department}
                            onChange={handleEducationalInfoChange}
                        />
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="top_degree_result"
                        >
                            Result
                        </label>
                        <select
                            defaultValue={educationalInfo?.top_degree_result != undefined | educationalInfo?.top_degree_result != null ? educationalInfo.top_degree_result : "Selected None"}
                            name="top_degree_result"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value={educationalInfo?.top_degree_result != undefined | educationalInfo?.top_degree_result != null ? educationalInfo.top_degree_result : ""}>{educationalInfo?.top_degree_result != undefined | educationalInfo?.top_degree_result != null ? educationalInfo.top_degree_result : "Selected None"}</option>

                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label className="uppercase w-44 text-gray-700 text-xs font-bold mb-2">Further infomation</label>
                        <textarea
                            name="top_degree_other_info"
                            onChange={handleEducationalInfoChange}
                            className="textarea textarea-bordered w-full max-w-md"
                            placeholder=""
                            value={educationalInfo.top_degree_other_info}
                        ></textarea>
                    </div>
                </div>

                {/* Highest degree information starts*/}

                <div className="px-3 flex flex-col md:flex-row mb-3">
                    <label
                        className=" uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                        htmlFor="other_education_qualification"
                    >
                        Other educational qualification
                    </label>
                    <textarea
                        name="other_education_qualification"
                        onChange={handleEducationalInfoChange}
                        className="textarea textarea-bordered w-full max-w-md"
                        placeholder=""
                        value={educationalInfo.other_education_qualification}
                    ></textarea>
                </div>

                <div className="px-3 flex flex-col md:flex-row mb-3">
                    <label
                        className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                        htmlFor="entitlement"
                    >
                        Any achieved entitlement
                    </label>

                    <Select
                        value={selectedOption}
                        onChange={setSelectedOption}
                        options={sampleOptions}

                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        className="input-bordered w-full max-w-md"
                    />
                        {/* {
                            selectedOption.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)
                        }
                    </Select> */}
                </div>
            </div>
        </form>
    );
};

export default EducationPage;
