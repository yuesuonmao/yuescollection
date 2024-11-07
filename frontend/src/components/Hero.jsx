import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate(); // initialize navigate function

  // function to handle scroll to top and navigation
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to the top
    navigate('/shop'); // navigate to the Shop page
  };

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 rounded-lg overflow-hidden'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>THE PERFECT FIT FOR</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Every Occasion</h1>
          <div className='flex items-center gap-2'>
            <button 
              onClick={handleNavigate} 
              className='bg-black text-white py-2 px-4 text-sm md:text-base font-semibold uppercase hover:bg-gray-800 transition-colors duration-300 rounded-full'
            >
              SHOP NOW
            </button>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
