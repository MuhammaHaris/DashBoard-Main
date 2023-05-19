import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { HiBell } from 'react-icons/hi';
function Navbar() {
  return (
    <div className='flex pl-6 py-2 items-center xl:min-w-[1030px] '>
      {/* Home */}
      <div className=''>
        <p className='cursor-pointer text-[15px]'>
          <span className='text-gray-400 hover:text-blue-700 '>
            {' '}
            Dashboard{' '}
          </span>{' '}
          / Home
        </p>
        <h1 className='font-semibold text-[16px]'>Home</h1>
      </div>
      {/* Search and Logins */}
      <div className='flex gap-7 px-3  ml-auto'>
        <input
          className='border border-gray-400 text-gray-500 py-2 px-8 rounded-lg bg-transparent text-xs'
          type='text'
          placeholder='Type Here'
        />
        <div className='flex gap-1 my-auto'>
          <BsPersonCircle size={20} color='#607D8B' />
          <p className='uppercase text-xs text-[#607D8B] font-semibold mt-[1px]'>
            Sign In
          </p>
        </div>
        <div className='flex gap-5 my-auto'>
          <AiFillSetting size={20} color='#607D8B' />
          <HiBell size={20} color='#607D8B' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
