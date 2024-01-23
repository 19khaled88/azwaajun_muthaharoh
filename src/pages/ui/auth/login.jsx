"use client";
import RootLayout from "@/components/Layout";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// let validationSchema = yup.object({
//   email: yup.string().required(),
//   password: yup.string().required().min(6).max(32),
// });



const validationSchema=yup 
  .object()
  .shape({
    email: yup.string().required().email().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address"),
    password: yup.string().required('Password is required').min(6).max(32),
  })
  .required()


  

const Login = () => {
  const [message, setMessage] = useState(null)
  const {
    setError,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = async(data) => {
    setMessage(null)
    const url = process.env.NEXT_PUBLIC_API_URL + '/auth/login'
    const res = await fetch(url,{
      method:'POST',
      headers:{
        "Accept":"application/josn",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })

    if(res.ok){
      console.log(res)
      // setMessage('User logged in successfully');
      toast.success('Successfully logged In');
      reset();
    }else{
      const response = await res.json();
      toast.error(response.message)
      // setError('email',{message:response?.detail ?? response.message, type:'error'})
    }
  };
  
  return (
    <div className="w-full flex content-center justify-center py-4">
      <div className="login_container">
        <form
          action="#"
          onSubmit={handleSubmit(handleFormSubmit)}
          autoComplete="off"
        >
          {message && (
            <div className="text-sm text-green-500">{message}</div>
          )}
          <div className="login_title">Login</div>
          <div className="login_input-box login_underline">
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email"
              {...register("email")}
              // required
            />
            <div className="login_underline"></div>
            {errors['email'] ? (<div className="text-sm text-red-500">{errors['email'].message}</div>):null}
          </div>
          <div className="login_input-box mb-3">
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              {...register("password")}
              // required
            />
            <div className="login_underline"></div>
            {errors['password'] ? (<div className="text-sm text-red-500">{errors['password'].message}</div>):null}
          </div>
          <Link
            // href="/forget"
            href="#"
            disabled
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>

          <div className="login_input-box login_button">
            <input type="submit" name="" value="Continue" />
          </div>
        </form>
        <div className="login_option">or Connect With Social Media</div>
        <div className="login_twitter">
          <a
            href="#"
            className="flex flex-row justify-start gap-5 items-center"
          >
            <FcGoogle />
            Sign in With Google
          </a>
        </div>
        <div className="login_facebook">
          <a
            href="#"
            className="flex flex-row justify-start gap-5 items-center"
          >
            <ImFacebook />
            Sign in With Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

Login.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Login;
