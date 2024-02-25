// import axios from 'axios'
// import config from '../config/index'
// import { getSession } from 'next-auth/react';
// const axiosInterceptorInstance = axios.create({
//     baseURL: config.API_HOST,
//     timeout: 40000,
//     headers: {
//         Accept: 'application/json, text/plain, */*',
//         'Content-Type': 'application/json; charset=utf-8'
//     },
//     withCredentials:true // to send cookie
// })


// // Request interceptor
// axiosInterceptorInstance.interceptors.request.use(
//    async (config) => {
//     const session = await getSession()
//         // Modify the request config here (add headers, authentication tokens)

//     //first way

//     // if(session){
//     //     config.headers.common = {
//     //         Authorization: `${session.accessToken}`
//     //     }
//     // }

//     //alternative way
//     if(session){
//         config.headers.Authorization = session.user.email
//     }
//         // const accessToken = JSON.parse(localStorage.getItem("token"));
//         // config.headers.Authorization = `Bearer sometoken`

//         // If token is present add it to request's Authorization Header

//         // if (accessToken) {
//         //     if (config.headers) config.headers.token = accessToken;
//         // }
//         return config;
//     },
//     (error) => {
//         // Handle request errors here

//         return Promise.reject(error);
//     }
// );
// // End of Request interceptor


// // Response interceptor
// axiosInterceptorInstance.interceptors.response.use(
//     (response) => {
//         // Modify the response data here

//         return response;
//     },
//     (error) => {
//         // Handle response errors here

//         return Promise.reject(error);
//     }
// );
// // End of Response interceptor


// // create fetcher 
// const fetcher = async (url) => {
//     return axiosInterceptorInstance.get(url).then((res) => {
//         if (!res.data) {
//             throw Error(res.data.message);
//         }

//         return res.data;
//     });
// };

// export default {
//     axiosInterceptorInstance,
//     fetcher
// };