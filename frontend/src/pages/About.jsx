import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  const navigate = useNavigate(); // Initialize navigate function for button click

  // Function to handle navigation to the collections page
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly

    navigate('/shop');
  };

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-lg' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <b className='text-gray-800'>Welcome to Yue's Collection!</b>
          <p>Founded on the belief that everyone deserves to look their best without breaking the bank, Yue's Collection is your premier destination for fashionable attire that bridges the gap between timeless style and contemporary trends. Our mission is to provide a diverse array of high-quality, stylish garments and accessories that cater to every taste and occasion, ensuring that our customers step out in style every day.</p>
          <b className='text-gray-800'>Our Journey</b>
          <p>From humble beginnings as a small online boutique, Yue's Collection has grown into a beloved brand known for its unique blend of classic elegance and modern edge. Each piece in our collection is carefully selected to ensure it meets our high standards of craftsmanship and style. We believe that fashion should be fun, inspiring, and reflective of one’s personal style, which is why we offer a diverse range of pieces suited to all occasions.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our commitment extends beyond fashion—we aim to foster a community of style-conscious individuals who value expression as much as they do responsible consumption. By choosing Yue's Collection, our customers become part of a movement that celebrates diversity in style and champions the creation of a more sustainable fashion future.</p>
          <button className='mt-4 border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-lg' onClick={handleNavigate}>
            Shop Now
          </button>
        </div>
      </div>

      <div className='text-xl py-4'>
  <Title text1={'WHY'} text2={'CHOOSE US'} />
</div>


<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-l-lg'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>Every piece is meticulously inspected to guarantee top-notch quality, ensuring you receive nothing but the best from Yue's Collection.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Our Promise:</b>
    <p className='text-gray-600'>We promise to deliver exceptional products and unparalleled customer service. Your satisfaction drives our innovation, ensuring every shopping experience with us is nothing short of extraordinary.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-r-lg'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>At Yue's Collection, we pride ourselves on providing exceptional customer service, ensuring every visit is a delightful and seamless experience. Your satisfaction is our priority.</p>
  </div>
</div>



      <NewsletterBox />
    </div>
  );
};

export default About;
