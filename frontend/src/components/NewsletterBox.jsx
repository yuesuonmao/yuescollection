import React, { useState } from 'react';

const NewsletterBox = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true); // Set the submission status to true
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Join our community today and enjoy exclusive savings on your first order!
      </p>
      {isSubmitted ? (
        <p className='text-green-600 mt-4'>Thank you for subscribing! Check your email for a 20% discount code.</p>
      ) : (
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-lg'>
          <input className='w-full sm:flex-1 outline-none rounded-l-lg' type="email" placeholder='Enter your email' required />
          <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded-r-lg'>SUBSCRIBE</button>
        </form>
      )}
    </div>
  );
};

export default NewsletterBox;
