'use client'
import axios, { AxiosError } from 'axios'
import config from '../config/index'
import { getSession, useSession } from 'next-auth/react';
// const { data: sessions, status } = useSession();


type SessionType = {
  accessToken: string
  email: string
  expires: string
  refreshToken: string
  role: string
  user: { email: string }
}

const axiosInterceptorInstance = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: true // to send cookie


})

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  async (config) => {
    //  const session = await getSession()
    const session =await getSession()
    // Modify the request config here (add headers, authentication tokens)

    //first way

    // if(session){
    //     config.headers.common = {
    //         Authorization: `${session.accessToken}`
    //     }
    // }

    //alternative way
    if (session != undefined && (session as SessionType).accessToken) {

      //  config.headers.Authorization = session.user.email 
      config.headers['Authorization'] = (session as SessionType).accessToken
    }
    // const accessToken = JSON.parse(localStorage.getItem("token"));
    // config.headers.Authorization = `Bearer sometoken`

    // If token is present add it to request's Authorization Header

    // if (accessToken) {
    //     if (config.headers) config.headers.token = accessToken;
    // }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor


// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error: AxiosError) => {
    // Handle response errors here


    // if(error.response?.status === 401 && !error.response.config?.url?.includes('auth/refresh') && !error.response?.config?.url?.includes('signin')){
    //     return refreshToken(error);
    // }
    return Promise.reject(error);
  }
);
// End of Response interceptor



let fetchingToken = false;
let subscribers: ((token: string) => any)[] = [];

const refreshToken = async (oError: AxiosError) => {

  try {
    const { response } = oError;

    // create new Promise to retry original request
    const retryOriginalRequest = new Promise((resolve) => {
      ((token: string) => {
        response!.config.headers['Authorization'] = `Bearer ${token}`
        resolve(axios(response!.config))
      })
    })

    // check whether refreshing token or not
    if (!fetchingToken) {

      fetchingToken = true;

      // refresh token
      const { data } = await axiosInterceptorInstance.post('/api/v1/auth/refresh')

      if (data && data.accessToken) {
        subscribers.forEach((callback) => callback(data.accessToken));
        subscribers = [];
      }
    }
    return retryOriginalRequest
  } catch (error) {


    return Promise.reject(oError);
  } finally {
    fetchingToken = false;
  }
}


export default axiosInterceptorInstance