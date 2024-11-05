import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {

    const SidebarLink = ({ to, icon, label }) => (
        <NavLink
            className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'
            to={to}
        >
            <img className='w-5 h-5' src={icon} alt={label} />
            <p className='hidden md:block'>{label}</p>
        </NavLink>
    );

    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                <SidebarLink to="/add" icon={assets.add_icon} label="Add Items" />
                <SidebarLink to="/list" icon={assets.order_icon} label="List Items" />
                <SidebarLink to="/orders" icon={assets.order_icon} label="Orders" />
            </div>
        </div>
    );
}

export default Sidebar;
