import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (email, password) => {
        try {
            const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code that falls out of the range of 2xx
                toast.error(error.response.data.message);
            } else if (error.request) {
                // The request was made but no response was received
                toast.error("No response from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                toast.error("Error setting up your request");
            }
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input
                            aria-label="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                            type="email"
                            placeholder='your@email.com'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input
                            aria-label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                            type="password"
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
