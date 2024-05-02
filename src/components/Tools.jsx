import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx'

const Tools = () => {

  const slides = [
    {
      url: 'https://images.app.goo.gl/8Z9CaMscrc8fuqWL6',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (

    <div className='hiiden lg:grid lg:max-w-full lg:h-[600px] lg:w-2/5 m-auto py-16 px-4 relative'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-[500px] h-[500px] flex items-center rounded-2xl bg-center bg-cover duration-500'>

          {/* <img src={{backgroundImage:`url(${slides[currentIndex].url})`}} alt="" /> */}

        {/* Left Arrow */}
        <div className='top-[50%] rounded-full p-2 text-black cursor-pointer flex justify-between'>
          <BsChevronCompactLeft onClick={prevSlide} className="left-0 h-5 w-5 bg-white rounded-full" />
          <BsChevronCompactRight onClick={nextSlide} className="right-0 h-5 w-5 bg-white rounded-full"/>
        </div>
        {/* Right Arrow */}

      </div>

      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );

}

export default Tools;