import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate(); 

  // handle navigation
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top 

    navigate('/shop'); // navigate to the Collections page
  };

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-lg' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>1234 Fake Street <br /> Philadelphia, PA 19148</p>
          <p className='text-gray-500'>Tel: (267) 255 9819 <br /> Email: yuesuonmao@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Ready to Elevate Your Style?</p>
          <p className='text-gray-500'>
            Discover the latest trends and timeless pieces from Yue's Collection.
            Dive into our diverse range of high-quality, stylish garments and accessories,
            and find the perfect additions to your wardrobe.
          </p>
          <button
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-lg'
            onClick={handleNavigate} 
          >
            Shop Now
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}

export default Contact;
