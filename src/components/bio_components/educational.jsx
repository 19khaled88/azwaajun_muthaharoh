//Education.jsx
import { useState, useEffect } from "react";
import Select, { Props } from "react-select";

const sampleOptions = [
    {
        label: "Finland",
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
    const { data, setData } = prop;
    const [selectedOption, setSelectedOption] = useState("");
   
    const [educationalInfo, setEducationalInfo] = useState({});

    const handleEducationalInfoChange = (event) => {
        const { name, value } = event.target;
        setEducationalInfo({
            ...educationalInfo,
            [name]: value,
        });
    };

    useEffect(() => {
        
          setData({
            ...data,
            educationalInfo:{
                ...educationalInfo,
                entitlement:{...selectedOption}
            },
          });
        

    }, [educationalInfo, setData,selectedOption,data]);

   

    return (
        <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
            <div className="flex flex-col -mx-3 mb-6">

                <div className="px-3 flex flex-col md:flex-row mb-3">
                    <label
                        className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                        htmlFor="education_medium"
                    >
                        Education medium
                    </label>
                    <select
                        defaultValue="Selected_none"
                        name="education_medium"
                        onChange={handleEducationalInfoChange}
                        className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                    >
                        <option value="">Selected none</option>
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
                            Institution Name
                        </label>
                        <input
                            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                            name="ssc_institute"
                            type="text"
                            placeholder="Institution name you studied in"
                            // value={educationalInfo.SSC}
                            onChange={handleEducationalInfoChange}
                        />
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="ssc_year"
                        >
                            passing year
                        </label>
                        <input
                            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                            name="ssc_year"
                            type="number"
                            placeholder="Like: 2024"
                            // value={educationalInfo.SSC}
                            onChange={handleEducationalInfoChange}
                        />
                    </div>

                    <div className="px-3 flex flex-col md:flex-row mb-3">
                        <label
                            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
                            htmlFor="ssc_department"
                        >
                            Department
                        </label>
                        <select
                            defaultValue="Select department"
                            name="ssc_department"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value="">Selected none</option>
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
                            Result
                        </label>
                        <select
                            defaultValue="Select result"
                            name="ssc_result"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value="">Selected none</option>

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
                            defaultValue="Select degree"
                            name="top_degree_name"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value="">Selected none</option>
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
                            // value={educationalInfo.SSC}
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
                            // value={educationalInfo.SSC}
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
                            // value={educationalInfo.SSC}
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
                            defaultValue="Select result"
                            name="top_degree_result"
                            onChange={handleEducationalInfoChange}
                            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
                        >
                            <option value="">Selected none</option>

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
                        defaultInputValue={selectedOption}
                        onChange={setSelectedOption}
                        options={sampleOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        className="input-bordered w-full max-w-md"
                    />
                </div>
            </div>
        </form>
    );
};

export default EducationPage;
