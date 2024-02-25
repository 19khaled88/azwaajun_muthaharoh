import axiosInterceptorInstance from './axiosInterceptorInstance';
import axiosInstance from './axiosInterceptorInstance'

function inceptorExample() {
  const getData = async () => {
    try {
      const response = await axiosInterceptorInstance.get('/api/data'); // Replace with your API endpoint

      // Handle the response data here
      console.log(response.data);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  return (
    <div>
      <h1> Inceptor Example </h1>
      <button onClick={getData}>Fetch Data</button>
    </div>
  );
}

export default inceptorExample;