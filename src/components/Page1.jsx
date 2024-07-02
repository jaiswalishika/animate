import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Page2 from './Page2';
import Page3 from './Page3';
import Tools from './Tools';
import Reviews from './Reviews';

const Page1 = () => {

  const Navigate = useNavigate()

  function goToLogin(){
      
   Navigate('/log')
  }
 
  
  return (
    <div className='flex flex-col '>
    <div className='text-blue-950'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-blue-950 m-3 font-semibold'>STAY FOCUSED</p>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md-py-6'>Grow With Right Guidance</h1>
            <p className="md:text-4xl sm:text-4xl text-xl font-bold m-3 text-blue-900">Fast, Flexible, Featured for <span className='animate-shake animate-infinite'>Free</span></p>
           
            <button className='bg-blue-950 text-white rounded-md w-40 font-medium my-6 mx-auto p-5 hover:underline hover:font-bold' onClick={() => goToLogin()}>Get Started</button>
         
        </div>

    </div>
    <Page2 />
    <Reviews/>
    <Page3 />

    </div>
  )
}

export default Page1