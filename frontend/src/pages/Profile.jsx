import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Profile = () => {
  const { user, updateUserProfile } = useContext(ShopContext); 
  const [profileData, setProfileData] = useState({
    name: user.name || '',
    email: user.email || '',
    password: '',
    shippingAddress: user.shippingAddress || '',
    paymentMethod: user.paymentMethod || '',
  });

  // handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(profileData); // Update user profile data in context or send it to the backend
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Manage Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        
        {/* email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        
        {/* password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={profileData.password}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        
        {/* shipping address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
          <input
            type="text"
            name="shippingAddress"
            value={profileData.shippingAddress}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        
        {/* payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <input
            type="text"
            name="paymentMethod"
            value={profileData.paymentMethod}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        
        {/* submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
