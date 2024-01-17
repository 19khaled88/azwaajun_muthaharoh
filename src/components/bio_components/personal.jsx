import React, { useEffect, useState } from "react";

const PersonalPage = (props) => {
  const { data, setData } = props;
  const [personalInfo, setPersonalInfo] = useState({});


  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    setData({
      ...data,
      personalInfo
    });

  }, [personalInfo, setData]);


  return (
    <form className="w-full h-full  mx-auto bg-white shadow-md rounded-tr-md rounded-br-md px-8 pt-6 pb-8 ">
      <div className="flex flex-col -mx-3 mb-6">
        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="dress_outside"
          >
            Dress you wear outside normally
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="dress_outside"
            type="text"
            placeholder="your dressing habit when go outside"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="beard"
          >
            have beard to follow sunnah? when you maintaining it from?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="beard"
            type="text"
            placeholder="like: Yes, from age 10, or 12"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="avobe_ankles"
          >
            Do you wear cloths above the ankles?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="avobe_ankles"
            type="text"
            placeholder="like: Yes "
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="pray_five_time"
          >
            Do you pray five times a day? since when?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="pray_five_time"
            type="text"
            placeholder="like: Yes, or no, since age 10 or 12"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="mahram_non-mahram"
          >
            Do you follow mahram / non-mahram concept?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="mahram_non-mahram"
            type="text"
            placeholder="like: Yes / No"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="recite_quran"
          >
            Are you able to recite quran correctly?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="recite_quran"
            type="text"
            placeholder="like: Yes / No"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>


        <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="fique"
            >
              Which fique do you follow?
            </label>
            <select
              defaultValue=""
              name="fique"
              onChange={handlePersonalInfoChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
            >
              <option value="">Selected none</option>
              <option value="Hanafi">Hanafi</option>
              <option value="Maliki">Maliki</option>
              <option value="Shafi'i">Shafi'i</option>
              <option value="Hanbali">Hanbali</option>
              <option value="Salafi">Salafi</option>
            </select>
          </div>




        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="song_drama_movie"
          >
            Do you watch or listen songs / drama / movies?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="song_drama_movie"
            type="text"
            placeholder="like: Yes / No"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="diseases"
          >
            Do you have metal or physical diseases?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="diseases"
            type="text"
            placeholder="like: Yes / No, if yes then write hints, diabetes"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="deen_work"
          >
            Do you involved with any deen work?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="deen_work"
            type="text"
            placeholder="like: tablig"
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>


        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="islamic_books"
          >
            write three islamic books you have read?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="islamic_books"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="islamic_schoolars"
          >
            write three islamic schoolars name you choose or tend to follow?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="islamic_schoolars"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="hobbies"
          >
            write your hobies, tastes, likes, dislikes, dreams etc?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="hobbies"
            type="text"
            placeholder=""
            // value={educationalInfo.SSC}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="border border-gray-300 py-2 my-2">
          <div className="px-3 flex flex-col md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="contact_number"
            >
              Your whatsapp number, messenger?
            </label>
        <div>
        <input
              className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
              name="contact_number"
              type="number"
              placeholder=""
              // value={educationalInfo.SSC}
              onChange={handlePersonalInfoChange}
            />
            <p>This number will not be disclosed, only for further communication</p>
        </div>
          </div>
          
          
        </div>
      </div>
    </form>
  );
};

export default PersonalPage;
