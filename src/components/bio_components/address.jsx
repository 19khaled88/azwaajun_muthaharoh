// Address.jsx
import { useState, useEffect } from "react";

const Address = (props) => {
  const { data, setData } = props;
  const [checked, setChecked] = useState(false)
  //   const [fullAddress, setFullAddress] = useState({
  //     division: "",
  //     district: "",
  //     sub_district: "",
  //     post_office: "",
  //   });

  const [fullAddress, setFullAddress] = useState({
    present_address: {
      division: "",
      district: "",
      sub_district: "",
      post_office: "",
      village: "",
    },
    permenant_address: {
      division: "",
      district: "",
      sub_district: "",
      post_office: "",
      village: "",
    },
  });

  const handlePresentAddressChange = (event) => {
    const { name, value } = event.target;
    setFullAddress({
      ...fullAddress,
      present_address: {
        ...fullAddress.present_address,
        [name]: value,
      },
    });
  };

  const handlePermanentAddressChange = (event) => {
    const { name, value } = event.target;
    setFullAddress({
      ...fullAddress,
      permenant_address: {
        ...fullAddress.permenant_address,
        [name]: value,
      },
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {

        // for (const key in fullAddress) {
        //   if (fullAddress[key].trim() === "") {
        //     return true; // At least one property is empty
        //   }
        // }
        // return false; // All properties have values





      // if(checked === true){
      //   for(const key in {...fullAddress}){
      //     if(fullAddress[key] === ""){
      //       return true
      //     }
      //   }
      // }else if(checked === false){
      //   for (const key in fullAddress) {
          
      //     for (const newKey in fullAddress[key]) {
           
      //       if (fullAddress[key][newKey].trim() === "") {
      //         return true; // At least one property is empty
      //       }
      //     }
      //   }
      // }else{
      //   return false; // All properties have values
      // }

     
      
    };

    if (!isDataEmpty()) {
      // setData({
      //   ...data,
      //   present_address: fullAddress.present_address,
      //   permenant_address: fullAddress.permenant_address,
      // });

      setData((prevData) => ({
        ...prevData,
        present_address: fullAddress.present_address,
        permenant_address: fullAddress.permenant_address,
      }));

    }
  }, [fullAddress, setData]);


  const clickhandler = ({target}) => {
    const {checked} = target;
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
              Division.
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="division"
              type="text"
              placeholder="Division."
              value={fullAddress.division}
              onChange={handlePresentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="district"
            >
              District
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="district"
              type="text"
              placeholder="district"
              value={fullAddress.district}
              onChange={handlePresentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sub_district"
            >
              Sub-district
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="sub_district"
              type="text"
              placeholder="sub-district"
              value={fullAddress.sub_district}
              onChange={handlePresentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_office"
            >
              Post-office
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="post_office"
              type="text"
              placeholder="post-office"
              value={fullAddress.post_office}
              onChange={handlePresentAddressChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="village"
            >
              Village
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="village"
              type="text"
              placeholder="village"
              value={fullAddress.village}
              onChange={handlePresentAddressChange}
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
            htmlFor="division"
          >
            Division.
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="division"
            type="text"
            placeholder="Division."
            value={fullAddress.division}
            onChange={handlePermanentAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="district"
          >
            District
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="district"
            type="text"
            placeholder="district"
            value={fullAddress.district}
            onChange={handlePermanentAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="sub_district"
          >
            Sub-district
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="sub_district"
            type="text"
            placeholder="sub-district"
            value={fullAddress.sub_district}
            onChange={handlePermanentAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="post_office"
          >
            Post-office
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="post_office"
            type="text"
            placeholder="post-office"
            value={fullAddress.post_office}
            onChange={handlePermanentAddressChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="village"
          >
            Village
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="village"
            type="text"
            placeholder="village"
            value={fullAddress.village}
            onChange={handlePresentAddressChange}
          />
        </div>
      </span>
    </div> : ""
     }
    </form>
  );
};

export default Address;
