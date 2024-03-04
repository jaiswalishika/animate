import React from 'react'

const Page3 = () => {
  return (
    <div className="w-full py-16 text-white bg-black">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='m-3 lg:col-span-2  text-white bg-black'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow? </h1>

                <p>Sign Up our workshop and stay up to date.</p>
            </div>
            <div className="m-3 my-4">
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                
                    <input className='p-3 w-full flex rounded-md text-slate-900 mx-3' type="email"  placeholder='Enter Email'/> 
                    <button className="bg-blue-300 text-black rounded-md w-[200px] font-medium my-6   md:mx-5 px-6 py-3 ml-4 hover:underline hover:font-bold">Notify Me</button>
                </div>
                <p className='m-3'>We care about your data.Read our <span className='text-blue-500'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Page3