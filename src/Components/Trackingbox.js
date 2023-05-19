import React from 'react';
import { IoCash } from 'react-icons/io5';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';

function Trackingbox() {
  return (
    <div className='grid grid-cols-4 my-10'>
      {/* box */}
      <div className='bg-white rounded-2xl p-3 shadow-xl w-60'>
        {/* Header */}
        <div className='flex '>
          <div className=' bg-gradient-to-bl from-[#5ab1f8] to-[#2a96ee] my-auto p-5 shadow-md shadow-[#72b6ee] rounded-lg -mt-10'>
            {' '}
            <IoCash size={25} color='white' />{' '}
          </div>
          <div className=' w-full'>
            <p className='text-gray-600 text-right text-sm'>Today's Money</p>
            <h1 className='text-right font-semibold text-2xl text-gray-900 my-2'>
              $53k
            </h1>
          </div>
        </div>
        {/* division */}
        <div className='bg-gray-200 h-[1px] w-full my-3 '></div>
        {/* footer */}
        <div>
          <h1 className='text-gray-500 my-4 '>
            <span className='text-[#4CAF50] font-semibold'>+55%</span> then last
            week
          </h1>
        </div>
      </div>
      {/* box2 */}
      <div className='bg-white rounded-2xl p-3 shadow-xl w-60'>
        {/* Header */}
        <div className='flex'>
          <div className=' bg-[#E63472] my-auto p-5 shadow-md shadow-[#E63472] rounded-lg -mt-10'>
            {' '}
            <FaUserAlt size={25} color='white' />{' '}
          </div>
          <div className=' ml-7 w-full'>
            <p className='text-gray-600 text-right text-sm justify-end ml-5'>
              Today's User
            </p>
            <h1 className='text-right font-semibold text-2xl text-gray-900 my-2'>
              2300
            </h1>
          </div>
        </div>
        {/* division */}
        <div className='bg-gray-200 h-[1px] w-full my-3 '></div>
        {/* footer */}
        <div>
          <h1 className='text-gray-500 my-4 '>
            <span className='text-[#4CAF50] font-semibold'>+3%</span> then last
            week
          </h1>
        </div>
      </div>
      {/* bos 3 */}
      <div className='bg-white rounded-2xl p-3 shadow-xl w-60'>
        {/* Header */}
        <div className='flex'>
          <div className=' bg-[#5EB562] my-auto p-5 shadow-md shadow-[#5EB562] rounded-lg -mt-10'>
            {' '}
            <FaUserPlus size={25} color='white' />{' '}
          </div>
          <div className=' ml-7  w-full'>
            <p className='text-gray-600 text-right text-sm'>New Client</p>
            <h1 className='text-right font-semibold text-2xl text-gray-900 my-2'>
              3,462
            </h1>
          </div>
        </div>
        {/* division */}
        <div className='bg-gray-200 h-[1px] w-full my-3 '></div>
        {/* footer */}
        <div>
          <h1 className='text-gray-500 my-4 '>
            <span className='text-red-600 font-semibold'>-2%</span> then
            Yesterday
          </h1>
        </div>
      </div>
      {/* box 4 */}
      <div className='bg-white rounded-2xl p-3 shadow-xl w-60'>
        {/* Header */}
        <div className='flex'>
          <div className=' bg-[#FE9C17] m-auto p-5 shadow-md shadow-[#FE9C17] rounded-lg -mt-10'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden='true'
              class='w-7 h-6 text-white'
            >
              <path d='M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z'></path>
            </svg>
          </div>
          <div className=' ml-7'>
            <p className='text-gray-600 text-right text-sm'>Sales</p>
            <h1 className='text-right font-semibold text-2xl text-gray-900 my-2'>
              $103,430
            </h1>
          </div>
        </div>
        {/* division */}
        <div className='bg-gray-200 h-[1px] w-full my-3 '></div>
        {/* footer */}
        <div>
          <h1 className='text-gray-500 my-4 '>
            <span className='text-[#4CAF50] font-semibold'>+5%</span> then
            yesterday
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Trackingbox;
