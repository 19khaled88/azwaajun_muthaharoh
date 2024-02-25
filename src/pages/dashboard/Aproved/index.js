// import RootLayout from "@/components/Layout";

import DashboardLayout from "@/components/DashboardLayout";
import { useEffect, useState } from "react";
import axios from '../../../axios/axiosInstance';
import { RotatingLines } from 'react-loader-spinner';

const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  // timeZoneName: "short"
};

const Account = () => {
  const [bio, setBio] = useState([])
  const [updated, setUpdated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`/bioData/getApproved`)
      .then(response => {
        let resInfo = response.data.data
        if (resInfo === undefined || resInfo === null) {

        } else {
          setLoading(false)
          setBio(resInfo)
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
  }, [updated]);

  const allStatus = [
    "REJECT",
    "APPROVED",
    "PENDING"
  ]

  const handleStatus = async (e, id) => {
    try {
      const res = await axios.patch(`/bioData/update/${id}`, {
        status: e.target.value
      })
      if (res.data.statusCode === 200 && res.data.success === true) {
        toast.success(res.data.message)
      }

    } catch (error) {
      console.log(error)
    }
  }
  const selectedStatus = (status) => {
    const array = []
    const res = allStatus.filter((filterItem) => filterItem != status)
    res.map((item) => {
      array.push(
        <option className="bg-gray-100" value={item}>{item}</option>
      )
    })
    return array
  }

  const showData = (data) => {
    let array = []
    data.map((item) => {
      array.push(
        <tbody>
          <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
            <td>
              <div class="ml-5">
                <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                  <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                    <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </td>
            <td className="px-1" >
              <div class="flex items-center pl-5">
                <p class="text-base font-medium leading-none text-gray-700 mr-2">{item.user.contactInfo[0].candidate_name}</p>

              </div>
            </td>
            <td className="px-1" >
              <div class="flex items-center">

                <p class="text-sm leading-none text-gray-600 ml-2">{item.user.general_Info[0].bio_type}</p>
              </div>
            </td>
            <td className="px-1" >
              <div class="flex items-center">

                <p class="text-sm leading-none text-gray-600 ml-2">{item.user.personal_Info[0].contact_number}</p>
              </div>
            </td>
            <td className="px-1" >
              <div class="flex items-center">
                <p class="text-sm leading-none text-gray-600 ml-2">{item.user.contactInfo[0].gurdian_mobile}</p>
              </div>
            </td>
            <td className="px-1" >
              <p class="py-3 text-sm focus:outline-none text-center leading-none text-red-700  bg-red-100 rounded">
                {
                  new Date(item.createAt).toLocaleString("en-US", options)
                }
              </p>
            </td>
            <td className="px-1" >
              <p class="py-3 text-sm focus:outline-none text-center leading-none text-red-700  bg-red-100 rounded">
                {
                  new Date(item.updatedAt).toLocaleString("en-US", options)
                }
              </p>
            </td>
            <td className="px-1" >
              <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
            </td>
            <td className="px-1">
              {/* <div class=" grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                <button class="">{item.status}</button>
              </div> */}
              <div class="relative inline-flex">
                <select onChange={(e) => handleStatus(e, item.id)} class={`rounded-full text-gray-600 h-8 pl-3 pr-5 text-sm  ${item.status === 'APPROVED' ? 'bg-green-100' : item.status === 'PENDING' ? 'bg-red-100' : 'bg-green-100'} hover:border-gray-400 focus:outline-none appearance-none`}>
                  <option value={item.status}>{item.status}</option>
                  {
                    selectedStatus(item.status)
                  }
                </select>
                <svg class="w-2 h-8 absolute top-0 right-2  pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
              </div>
            </td>
          </tr>
        </tbody>
      )
    })
    return array
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-2 bg-white pl-2 rounded-md">
        <div className="flex flex-row justify-between pr-5">
          <p className="font-bold text-gray-700">Admin panel </p>
          <button disabled>Profile</button>
        </div>
      </header>
      <div className="py-2 pl-2 text-sm text-gray-600">Admin panel / Aproved </div>
      <div>
        <div class="w-full">

          <div class="px-2 py-4">
            <div class="flex items-center justify-between">
              <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Approved Bio Data({bio.length})</p>
              <div class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                  <option class="text-sm text-indigo-800">Latest</option>
                  <option class="text-sm text-indigo-800">Oldest</option>
                  <option class="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 md:py-7 px-2">
            {/* <div class="sm:flex items-center justify-between">
              <div class="flex items-center">
                <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
                  <div class="py-2 px-8  text-indigo-700 rounded-full">
                    <p>All</p>
                  </div>
                </a>
                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                  <div class="py-2 px-8 text-gray-600 bg-indigo-100 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                    <p>Aproved</p>
                  </div>
                </a>
                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                  <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                    <p>Pending</p>
                  </div>
                </a>
              </div>

            </div> */}
            <div class="mt-7 overflow-x-auto">
              {
                loading ?
                  <div className="flex flex-row justify-center items-center h-96">
                    <RotatingLines
                      visible={true}
                      // height="96"
                      // width="96"
                      color="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                  :
                  <table class="w-full whitespace-nowrap">
                    <thead>
                      <tr>
                        <td className="px-1">Serial</td>
                        <td className="px-1">name</td>
                        <td className="px-1">type</td>
                        <td className="px-1">mobile</td>
                        <td className="px-1">guardian_mobile</td>
                        <td className="px-1">Created Time</td>
                        <td className="px-1">Update Time</td>
                        <td className="px-1">Full View</td>
                        <td className="px-1">Status</td>
                      </tr>
                    </thead>
                    {
                      showData(bio)
                    }

                  </table>
              }


            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>

);

export default Account;