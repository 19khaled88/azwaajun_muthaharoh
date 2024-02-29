"use client";
import RootLayout from "@/components/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { RotatingLines, ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react'
import * as yup from 'yup';
import { useRouter, usePathname } from "next/navigation";
import { useSession } from 'next-auth/react'
// import decodedToken from "../../../utils/decodeToken";
// let validationSchema = yup.object({
//   email: yup.string().required(),
//   password: yup.string().required().min(6).max(32),
// });

const validationSchema = yup
  .object()
  .shape({
    email: yup.string().required().email().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address"),
    password: yup.string().required('Password is required').min(6).max(32),
  })
  .required()


const Login = () => {
  const router = useRouter()
  const [message, setMessage] = useState(null)
  const [currentRole, setCurrentRole] = useState('')
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false)



  // const fetchData = async (session) => {
  //   try {
  //     const res = await decodedToken(session)
  //     setCurrentRole(res.role)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    if (session && session.role !== undefined) {
      // console.log(session?.role)
      // fetchData(session)
      setCurrentRole(session.role)
    }
  }, [session])

  const {
    setError,
    register,

    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const handleFormSubmits = async (data) => {
  //   setMessage(null)
  //   const url = process.env.NEXT_PUBLIC_API_URL + '/auth/login'
  //   const res = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       "Accept": "application/josn",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   })

  //   if (res.ok) {
  //     console.log(res)
  //     // setMessage('User logged in successfully');
  //     toast.success('Successfully logged In');
  //     reset();
  //   } else {
  //     const response = await res.json();
  //     toast.error(response.message)
  //     // setError('email',{message:response?.detail ?? response.message, type:'error'})
  //   }
  // };

  const handleFormSubmit = async (data) => {
    setLoading(true)
    signIn('credentials', {
      email: data.email,
      password: data.password,

      redirect: false,
      callbackUrl: '/'
    }).then((res) => {
      if (res?.error && !res.ok) {
        setError('email', { message: 'Somthing went wrong', type: 'error' })
        toast.error('Email or Password wrong')
        setLoading(false)
      } else {
        setLoading(false)
        toast.success('Welcome, login successful')
        // router.push('/profile/user')
      }
    })
  }


  // console.log(session, status)

  if (status === "loading") {
    return (
      <div className="flex flex-row justify-center items-center h-screen">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }

  if (status === 'authenticated' && currentRole && currentRole === 'ADMIN') {
    // router.push('/')
    router.push('/dashboard')
  } else if (status === 'authenticated' && currentRole && currentRole !== 'ADMIN') {
    router.push('/ui/profile/user')
  } else {
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
              {errors['email'] ? (<div className="text-sm text-red-500">{errors['email'].message}</div>) : null}
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
              {errors['password'] ? (<div className="text-sm text-red-500">{errors['password'].message}</div>) : null}
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
              {
                loading ? (
                  <div className="relative h-12 ">
                    <div className="absolute inset-y-0 left-5 w-16">
                      <ColorRing
                        visible={true}
                        height="45"
                        width="40"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                      />
                    </div>
                    <input type="submit" name="" value="Continue" />

                  </div>
                ) :
                  <input type="submit" name="" value="Continue" />
              }

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
  }
};


Login.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Login;
