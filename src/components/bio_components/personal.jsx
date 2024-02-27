import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

const PersonalPage = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const { data: session, status } = useSession();
  const [personalInfo, setPersonalInfo] = useState({
    above_ankles: "",
    beard: "",
    contact_number: "",
    deen_work: "",
    diseases: "",
    dress_outside: "",
    fique: "",
    hobbies: "",
    islamic_books: "",
    islamic_schoolars: "",
    mahram_non_mahram: "",
    pray_five_time: "",
    recite_quran: "",
    song_drama_movie: ""
  });


  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in personalInfo) {
        if (personalInfo[key].trim() === "") {
          return true; // At least one property is empty
        }
      }
      return false;
    }

    if (isDataEmpty()) {

      setIsEmpty(true)
    } else if (!isDataEmpty()) {

      setIsEmpty(false)
      setData((prevData) => ({
        ...prevData,
        personalInfo
      }));
      setIsApi('/personal/create')
    }

  }, [personalInfo, setData,setIsApi,setIsEmpty]);

  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);
      axios.get(`/personal/getSingle/${decoded.id}`)
        .then(response => {
          let resInfo = response.data.data
          if (resInfo === undefined) {
            console.log(resInfo)
          } else {
            setPersonalInfo(resInfo)
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
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="dress_outside"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Dress you wear outside normally
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="dress_outside"
            type="text"
            placeholder="your dressing habit when go outside"
            value={personalInfo?.dress_outside}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="beard"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            have beard to follow sunnah? when you maintaining it from?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="beard"
            type="text"
            placeholder="like: Yes, from age 10, or 12"
            value={personalInfo.beard}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="above_ankles"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Do you wear cloths above the ankles?
          </label>
          <input
            className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="above_ankles"
            type="text"
            placeholder="like: Yes "
            value={personalInfo.above_ankles}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="pray_five_time"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Do you pray five times a day? since when?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="pray_five_time"
            type="text"
            placeholder="like: Yes, or no, since age 10 or 12"
            value={personalInfo.pray_five_time}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="mahram_non_mahram"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Do you follow mahram / non-mahram concept?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="mahram_non_mahram"
            type="text"
            placeholder="like: Yes / No"
            value={personalInfo.mahram_non_mahram}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="recite_quran"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Are you able to recite quran correctly?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="recite_quran"
            type="text"
            placeholder="like: Yes / No"
            value={personalInfo.recite_quran}
            onChange={handlePersonalInfoChange}
          />
        </div>


        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="fique"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Which fique do you follow?
          </label>
          <select
            defaultValue={personalInfo?.fique != undefined | personalInfo?.fique != null ? personalInfo.fique : "Selected_none"}
            name="fique"
            onChange={handlePersonalInfoChange}
            className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full max-w-md"
          >
            <option value={personalInfo?.fique != undefined | personalInfo?.fique != null ? personalInfo.fique : "Selected_none"}>{personalInfo?.fique != undefined | personalInfo?.fique != null ? personalInfo.fique : "Selected_none"}</option>
            <option value="none">None of this</option>
            <option value="Hanafi">Hanafi</option>
            <option value="Maliki">Maliki</option>
            <option value="Shafi'i">Shafi&apos;i</option>
            <option value="Hanbali">Hanbali</option>
            <option value="Salafi">Salafi</option>
          </select>
        </div>


        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="song_drama_movie"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Do you watch or listen songs / drama / movies?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="song_drama_movie"
            type="text"
            placeholder="like: Yes / No"
            value={personalInfo.song_drama_movie}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="diseases"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Do you have mental or physical diseases?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="diseases"
            type="text"
            placeholder="like: Yes / No, if yes then write hints, diabetes"
            value={personalInfo.diseases}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="deen_work"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            Do you involved with any deen work?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="deen_work"
            type="text"
            placeholder="like: tablig"
            value={personalInfo.deen_work}
            onChange={handlePersonalInfoChange}
          />
        </div>


        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="islamic_books"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            write three islamic books you have read?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="islamic_books"
            type="text"
            placeholder=""
            value={personalInfo.islamic_books}
            onChange={handlePersonalInfoChange}
          />
        </div>
        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="islamic_schoolars"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            write three islamic schoolars name you choose or tend to follow?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="islamic_schoolars"
            type="text"
            placeholder=""
            value={personalInfo.islamic_schoolars}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
          <label
            className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
            htmlFor="hobbies"
          >
            <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
            write your hobies, tastes, likes, dislikes, dreams etc?
          </label>
          <input
            className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
            name="hobbies"
            type="text"
            placeholder=""
            value={personalInfo.hobbies}
            onChange={handlePersonalInfoChange}
          />
        </div>

        <div className="border border-gray-300 py-2 my-2">
          <div className="px-3 flex flex-col gap-3 md:flex-row mb-3">
            <label
              className="uppercase w-44 text-gray-700 text-xs font-bold mb-2"
              htmlFor="contact_number"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Your whatsapp number, messenger?
            </label>
            <div>
              <input
                className="appearance-none block bg-gray-200  border rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white w-full max-w-md"
                name="contact_number"
                type="number"
                placeholder=""
                value={personalInfo.contact_number}
                onChange={handlePersonalInfoChange}
              />
              <p>Number will not be disclosed, only for further communication(Only digit allowed)</p>
            </div>
          </div>


        </div>
      </div>
    </form>
  );
};

export default PersonalPage;
