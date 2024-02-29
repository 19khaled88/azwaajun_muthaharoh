// Address.jsx
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useSession } from 'next-auth/react'
import axios from '../../axios/axiosInstance'

import { location } from "../../utils/db";

const Address = (props) => {
  const { data, setData, setIsEmpty, setIsApi } = props;
  const [presentSelectedDivision, setPresentSelectedDivision] = useState('')
  const [checked, setChecked] = useState(false)
  const { data: session, status } = useSession();


  const [fullAddress, setFullAddress] = useState({
    present_address: {
      division: "",
      district: "",
      sub_district: "",
      post_office: "",
      village: "",

    },
    permanent_address: {
      division: "",
      district: "",
      sub_district: "",
      post_office: "",
      village: "",
    },
  });

  const handlePresentAddressChange = (event) => {
    const { name, value } = event.target;
    if (name === 'division' && value === '') {
      setFullAddress({
        ...fullAddress,
        present_address: {
          ...fullAddress.present_address,
          division: '',
          district: ''
        }
      })
    }
    else if (name === 'division') {
      if (value != '' && value != fullAddress.present_address.division) {

        setFullAddress({
          ...fullAddress,
          present_address: {
            ...fullAddress.present_address,
            [name]: value,
            district: ''
          }
        })
      } else {
        setFullAddress({
          ...fullAddress,
          present_address: {
            ...fullAddress.present_address,
            [name]: value,
          },
        });
      }
    }
    else {
      setFullAddress({
        ...fullAddress,
        present_address: {
          ...fullAddress.present_address,
          [name]: value,
        },
      });
    }

  };

  const handlePermanentAddressChange = (event) => {
    const { name, value } = event.target;


    if (name === 'division' && value === '') {
      setFullAddress({
        ...fullAddress,
        permanent_address: {
          ...fullAddress.permanent_address,
          division: '',
          district: ''
        },
      });
    } else if (name === 'division') {
      if (value != '' && value != fullAddress.permanent_address.division) {
        setFullAddress({
          ...fullAddress,
          permanent_address: {
            ...fullAddress.permanent_address,
            [name]: value,
            district: ''
          }
        })
      } else {
        setFullAddress({
          ...fullAddress,
          permanent_address: {
            ...fullAddress.permanent_address,
            [name]: value,
          },
        });
      }
    }
    else {
      setFullAddress({
        ...fullAddress,
        permanent_address: {
          ...fullAddress.permanent_address,
          [name]: value,
        },
      });
    }
  };

  useEffect(() => {
    const presentAddress = fullAddress.present_address;
    const permanentAddress = checked ? presentAddress : fullAddress.permanent_address;
    const isDataEmpty = () => {
      let status = false

      if (checked) {
        for (const key in fullAddress.present_address) {
          if (fullAddress.present_address[key].trim() === "") {
            status = true;
          }
        }
      } else {
        for (const key in fullAddress) {

          for (const innserKey in fullAddress[key]) {
            if (fullAddress[key][innserKey].trim() === "") {
              status = true
            }
          }
        }
      }
      return status
    };

    if (isDataEmpty()) {
      setIsEmpty(true)
    }

    if (!isDataEmpty()) {
      setIsEmpty(false)
      setData((prevData) => ({
        ...prevData,
        address: {
          present_address: presentAddress,
          permanent_address: permanentAddress,
        },

      }));
      setIsApi('/address/create')
    }

  }, [fullAddress, checked, setData, setIsApi, setIsEmpty]);

  useEffect(() => {
    if (session && session.accessToken) {
      const decoded = jwtDecode(session.accessToken);

      axios.get(`/address/getSingle/${decoded.id}`)
        .then(response => {
          // Handle successful response
          // setSingleGeneralInfo(response.data.data);
          let resInfo = response.data.data
          if (resInfo === undefined) {

          } else {
            setFullAddress(resInfo)
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


  const clickhandler = ({ target }) => {
    const { checked } = target;
    setChecked(checked)
    // setList(prev => {
    //   const clickedItem = prev.find(item => item.id.toString() === id);
    //   clickedItem["checked"] = checked;
    //   return [...prev];
    // });
  }

 

  return (
    <form className="w-full h-full mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-col -mx-3 mb-6">
        <h1>Present Address</h1>
        <span>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="division"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Division.
            </label>
            {/* <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="division"
              type="text"
              placeholder="Division."
              value={fullAddress?.present_address?.division}
              onChange={handlePresentAddressChange}
            /> */}
            <select
              value={fullAddress?.present_address?.division === undefined ? "Selected none" : fullAddress?.present_address?.division === null ? "Selected none" : fullAddress?.present_address?.division === '' ? "Selected none" : fullAddress?.present_address?.division}
              required
              name="division"

              onChange={handlePresentAddressChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full"
            >

              <option value="">Selected none</option>
              {Object.keys(location).map(division => (
                <option key={division} value={division}>{division}</option>
              ))}

            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="district"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              District
            </label>
            {/* <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="district"
              type="text"
              placeholder="district"
              value={fullAddress?.present_address?.district}
              onChange={handlePresentAddressChange}
            /> */}
            <select
              value={fullAddress?.present_address?.district === undefined ? "Selected none" : fullAddress?.present_address?.district === null ? "Selected none" : fullAddress?.present_address?.district === '' ? "Selected none" : fullAddress?.present_address?.district}
              required
              name="district"

              onChange={handlePresentAddressChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full"
            >

              <option value="">Selected none</option>
              {fullAddress.present_address?.division && location[fullAddress?.present_address?.division].map(district => (
                <option key={district} value={district}>{district}</option>
              ))}

            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sub_district"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Sub-district
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="sub_district"
              type="text"
              placeholder="sub-district"
              value={fullAddress?.present_address?.sub_district}
              onChange={handlePresentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_office"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Post-office
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="post_office"
              type="text"
              placeholder="post-office"
              value={fullAddress?.present_address?.post_office}
              onChange={handlePresentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="village"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Village
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="village"
              type="text"
              placeholder="village"
              value={fullAddress?.present_address?.village}
              onChange={handlePresentAddressChange}
            />
          </div>
        </span>
      </div>

      <div className="block">
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="w-6 h-6 rounded" onClick={clickhandler} />
            <span className="ml-2">Present & permanent address are same</span>
          </label>
        </div>
      </div>


      <div className="flex flex-col -mx-3 mb-2">
        <h1>Permanent Address</h1>
        <span>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="division"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Division.
            </label>
            {/* <input
              disabled={checked ? true : false}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="division"
              type="text"
              placeholder="Division."
              value={checked ? "" : fullAddress.permanent_address.division}
              // value={fullAddress.permanent_address.division}
              onChange={handlePermanentAddressChange}
            /> */}
            <select
              disabled={checked ? true : false}
              value={fullAddress?.permanent_address?.division === undefined ? "Selected none" : fullAddress?.permanent_address?.division === null ? "Selected none" : fullAddress?.permanent_address?.division === '' ? "Selected none" : fullAddress?.permanent_address?.division}

              // defaultValue={checked ? "" : fullAddress.permanent_address.division}
              required
              name="division"

              onChange={handlePermanentAddressChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full"
            >

              <option value="">Selected none</option>
              {Object.keys(location).map(division => (
                <option key={division} value={division}>{division}</option>
              ))}

            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="district"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              District
            </label>
            {/* <input
              disabled={checked ? true : false}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="district"
              type="text"
              placeholder="district"
              value={checked ? "" : fullAddress.permanent_address.district}
              // value={fullAddress.permanent_address.district}
              onChange={handlePermanentAddressChange}
            /> */}
            <select
              value={fullAddress?.permanent_address?.district === undefined ? "Selected none" : fullAddress?.permanent_address?.district === null ? "Selected none" : fullAddress?.permanent_address?.district === '' ? "Selected none" : fullAddress?.permanent_address?.district}
              required
              disabled={checked ? true : false}
              name="district"

              onChange={handlePermanentAddressChange}
              className="border rounded-md border-teal-600 hover:border-pink-500 h-9 pl-1 shadow-xl input input-bordered w-full"
            >

              <option value="">Selected none</option>
              {fullAddress.permanent_address?.division && location[fullAddress?.permanent_address?.division].map(district => (
                <option key={district} value={district}>{district}</option>
              ))}

            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sub_district"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Sub-district
            </label>
            <input
              disabled={checked ? true : false}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="sub_district"
              type="text"
              placeholder="sub-district"
              value={checked ? "" : fullAddress.permanent_address.sub_district}
              // value={fullAddress.permanent_address.sub_district}
              onChange={handlePermanentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_office"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Post-office
            </label>
            <input
              disabled={checked ? true : false}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="post_office"
              type="text"
              placeholder="post-office"
              value={checked ? "" : fullAddress.permanent_address.post_office}
              // value={fullAddress.permanent_address.post_office}
              onChange={handlePermanentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="village"
            >
              <abbr class="text-red-500 text-lg pr-1" title="required">*</abbr>
              Village
            </label>
            <input
              disabled={checked ? true : false}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="village"
              type="text"
              placeholder="village"
              value={checked ? "" : fullAddress.permanent_address.village}
              // value={fullAddress.permanent_address.village}
              onChange={handlePermanentAddressChange}
            />
          </div>
        </span>
      </div>
    </form>
  );
};

export default Address;
