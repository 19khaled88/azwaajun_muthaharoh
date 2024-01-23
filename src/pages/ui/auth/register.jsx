
import RootLayout from '@/components/Layout';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


const validationSchema=yup 
  .object()
  .shape({
    email: yup.string().required().email().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address"),
    password: yup.string().required('Password is required').min(6).max(32),
  })
  .required()



const Register = () => {

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
    const url = process.env.NEXT_PUBLIC_API_URL + '/auth/register'
    const res = await fetch(url,{
      method:'POST',
      headers:{
        "Accept":"application/josn",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })

    if(res.ok){
      // setMessage('User registered successfully');
      console.log(res)
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
      <form action="#"  onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="login_title">Register</div>
        <div className="login_input-box login_underline">
          <input 
          type="text" 
          id="email"
          placeholder="Enter Your Email" 
          required 
          {...register('email')}
          />
          <div className="login_underline"></div>
          {errors['email'] ? (<div className="text-sm text-red-500">{errors['email'].message}</div>):null}
        </div>
        <div className="login_input-box mb-3">
          <input 
          type="password" 
          id="password"
          placeholder="Enter Your Password" 
          required 
          {...register('password')}
          />
          <div className="login_underline"></div>
          {errors['password'] ? (<div className="text-sm text-red-500">{errors['password'].message}</div>):null}
        </div>
       
        <div className="login_input-box login_button">
          <input type="submit" name="" value="Continue" />
        </div>
      </form>
      
    </div>
  </div>
  )
}


Register.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Register