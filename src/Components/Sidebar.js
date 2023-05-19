import React from 'react';
import Logo from '../img/logo-ct.png';
import { HiHome } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineTable, AiFillBell } from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
import { BsPersonAdd, BsPersonCheckFill } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
function Sidebar() {
  // const navigate = useNavigate();
  return (
    <div className='bg-[#303E45] h-[640px] min-w-[22%] rounded-2xl p-1 sticky top-3'>
      {/* Header */}
      <div className='flex m-5 items-center'>
        <img className='h-[35px]  ' src={Logo} alt='' />
        <h1 className='text-white font-bold flex mx-auto shadow-white whadow-xl right-2 '>
          Material Tailwind React
        </h1>
      </div>
      {/* Underline */}
      <div className='h-[0.5px] bg-gray-500 w-full'></div>
      {/* Pages */}
      <div>
        <div
          // onClick={() => navigate('/')}
          className='px-4 py-3 rounded-lg flex gap-5 items-center bg-blue-500 m-3 hover:bg-gray-50/10'
        >
          <HiHome size={25} className='text-white' />
          <h1 className='text-white text-md font-semibold'>Dashboard</h1>
        </div>

        <a href='/Profile'>
          <div className='px-4 py-3 rounded-lg flex gap-5 items-center m-3 hover:bg-gray-50/10 '>
            <CgProfile size={25} className='text-white' />
            <h1 className='text-white text-md font-semibold'>Profile</h1>
          </div>
        </a>
        <a href='/Tables'>
          <div className='px-4 py-3 rounded-lg flex gap-5 items-center m-3 hover:bg-gray-50/10'>
            <AiOutlineTable size={25} className='text-white' />
            <h1 className='text-white text-md font-semibold'>Tables</h1>
          </div>
        </a>
        <a href='/Notification'>
          <div className='px-4 py-3 rounded-lg flex gap-5 items-center m-3 hover:bg-gray-50/10 '>
            <AiFillBell size={25} className='text-white' />
            <h1 className='text-white text-md font-semibold'>Notification</h1>
          </div>
        </a>
      </div>
      {/* Auth Pages */}
      <div>
        <h1
          className='font-extrabold text-md text-gray-300 uppercase px-3 py-4
'
        >
          Auth Pages
        </h1>
        <a href='/sign-in'>
          <div className='px-4 py-3 rounded-lg flex gap-5 items-center m-3 hover:bg-gray-50/10'>
            <BsPersonCheckFill size={25} className='text-white' />
            <h1 className='text-white text-md font-semibold'>Sign In</h1>
          </div>
        </a>
        <a href='/sign-up'>
          <div className='px-4 py-3 rounded-lg flex gap-5 items-center m-3 hover:bg-gray-50/10'>
            <BsPersonAdd size={25} className='text-white' />
            <h1 className='text-white text-md font-semibold'>Sign Up</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
