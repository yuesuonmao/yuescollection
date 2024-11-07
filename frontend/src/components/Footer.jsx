import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Yue's Collection Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Yue's Collection—where fashion meets affordability. Explore our eclectic mix of contemporary styles and timeless classics, all crafted with the utmost care. We're committed to providing you with exceptional wardrobe pieces that are perfect for every occasion. Shop with us and experience the passion behind every product.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">BROWSE</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/shop" className="hover:text-black">Shop</a></li>
            <li><a href="/about" className="hover:text-black">About us</a></li>
            <li><a href="/contact" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information with Social Media Icons */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 mb-3">
            <li>(267) 255-9819</li>
            <li>yuesuonmao@gmail.com</li>
          </ul>
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={assets.facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            {/* Instagram Icon */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={assets.instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">&copy; 2024 Yue's Collection - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
