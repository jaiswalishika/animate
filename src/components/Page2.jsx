import React from 'react'

const Page2 = () => {
  return (
    <div className='w-full py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src="/gif-image.gif" alt="" />
            <div className='flex flex-col justify-center'>
                <p className='md:text-4xl md:m-2 sm:text-3xl text-2xl font-bold py-2'>LEARNING DASHBOARD</p>
                <h1 className='md:m-2'>Get Ready to Explore</h1>
               <p className='md:m-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, rerum repudiandae omnis at ad id incidunt ex, commodi facilis, necessitatibus corporis a ea enim libero doloribus dicta consectetur natus aut.
                </p> 
                <button className="bg-blue-950 text-white rounded-md w-40 font-medium my-6 mx-auto  md:mx-5 p-5 hover:underline hover:font-bold">LET'S START</button>
            </div>

        </div>

    </div>
  )
}

export default Page2