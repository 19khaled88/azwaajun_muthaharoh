// Address.jsx
import { useState, useEffect } from "react";

const Address = (props) => {
  const { data, setData } = props;
  const [checked, setChecked] = useState(false)
  const [fullAddress, setFullAddress] = useState({ });


const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFullAddress({
      ...fullAddress,
        [name]: value,
      
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {
        for (const key in fullAddress) {
          if (fullAddress[key].trim() === "") {
            return true; // At least one property is empty
          }
        }
        return false; // All properties have values
    };

    if ( !isDataEmpty() && checked === true) {
        setData({
            ...data,
            fullAddress: {
              ...fullAddress,
              both_address_same: true,
            },
          });
    } else if(!isDataEmpty() && checked === false){
        setData({
            ...data,
            fullAddress:fullAddress
        })
    }
  }, [fullAddress, setData,data]);


  const clickhandler = ({target}) => {
    const {checked} = target;
    setChecked(checked)
 }
 
  return (
    <form className="w-full h-full mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-col -mx-3 mb-6">
        <h1>Present Address</h1>
        <span>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ssc_division"
            >
              Division.
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="ssc_division"
              type="text"
              placeholder="Division."
            //   value={fullAddress.division}
              onChange={handleAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ssc_district"
            >
              District
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="ssc_district"
              type="text"
              placeholder="district"
            //   value={fullAddress.district}
              onChange={handleAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ssc_sub_district"
            >
              Sub-district
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="ssc_sub_district"
              type="text"
              placeholder="sub-district"
            //   value={fullAddress.sub_district}
              onChange={handleAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ssc_post_office"
            >
              Post-office
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="ssc_post_office"
              type="text"
              placeholder="post-office"
            //   value={fullAddress.post_office}
              onChange={handleAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ssc_village"
            >
              Village
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="ssc_village"
              type="text"
              placeholder="village"
            //   value={fullAddress.village}
              onChange={handleAddressChange}
            />
          </div>
        </span>
      </div>

      <div class="block">
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input type="checkbox" class="w-6 h-6 rounded" onClick={clickhandler}/>
            <span class="ml-2">Present & permanent address are same</span>
          </label>
        </div>
      </div>

     {
      checked === false ? 
      <div className="flex flex-col -mx-3 mb-2">
      <h1>Permanent Address</h1>
      <span>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="hsc_division"
          >
            Division.
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="hsc_division"
            type="text"
            placeholder="Division."
            // value={fullAddress.division}
            onChange={handleAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="hsc_district"
          >
            District
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="hsc_district"
            type="text"
            placeholder="district"
            // value={fullAddress.district}
            onChange={handleAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="hsc_sub_district"
          >
            Sub-district
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="hsc_sub_district"
            type="text"
            placeholder="sub-district"
            // value={fullAddress.sub_district}
            onChange={handleAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="hsc_post_office"
          >
            Post-office
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="hsc_post_office"
            type="text"
            placeholder="post-office"
            // value={fullAddress.post_office}
            onChange={handleAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="hsc_village"
          >
            Village
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="hsc_village"
            type="text"
            placeholder="village"
            // value={fullAddress.village}
            onChange={handleAddressChange}
          />
        </div>
      </span>
    </div> : ""
     }
    </form>
  );
};

export default Address;
