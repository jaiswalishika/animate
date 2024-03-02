import React from 'react';

const Reviews = () => {


    return (
        <div className='w-full py-[10rem] px-4 bg-blue-200'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='font-bold text-4xl text-center py-8'>50+</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 mx-8 mt-8'>Mentors with</p>
                        <p className='py-2 mx-8'>5+ Years of Industry Experience.</p>
                    </div>
                    <button className='bg-blue-950 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Now</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='font-bold text-center text-4xl py-8'>30+</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 mx-8 mt-8'>Monthly Events.</p>
                        <p className='py-2 mx-8'>For better engagement.</p>
                    </div>
                    <button className='bg-blue-950 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get a Trial</button>
                </div>
                <div className='w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-4xl font-bold text-center py-8'>86%</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 mx-8 mt-8'>Highest Student Course</p>
                        <p className='py-2 mx-8'>Start to Job Success Rat</p>
                    </div>
                    <button className='bg-blue-950 text-white rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Now</button>
                </div>
            </div>
        </div>
    )


}

export default Reviews