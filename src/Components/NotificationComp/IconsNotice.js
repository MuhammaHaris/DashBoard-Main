import React from 'react';
import { IoClose, IoInformationCircleOutline } from 'react-icons/io5';

function IconsNotice() {
  return (
    <div className=''>
      <div className='bg-[#2196F3] w-full h-[60px] rounded-xl py-[17px] px-3 my-2 text-white flex'>
        <IoInformationCircleOutline size={23} className='mr-2' />A simple blue
        alert with an example link. Give it a click if you like.{' '}
        <IoClose className='ml-auto right-1  ' color='#FFFFFF' size={23} />
      </div>
      <div className='bg-[#4CAF50] w-full h-[60px] rounded-xl py-[17px] px-3 my-2 text-white flex'>
        <IoInformationCircleOutline size={23} className='mr-2' />A simple blue
        alert with an example link. Give it a click if you like.{' '}
        <IoClose className='ml-auto right-1  ' color='#FFFFFF' size={23} />
      </div>
      <div className='bg-[#FF9800] w-full h-[60px] rounded-xl py-[17px] px-3 my-2 text-white flex'>
        <IoInformationCircleOutline size={23} className='mr-2' />A simple blue
        alert with an example link. Give it a click if you like.{' '}
        <IoClose className='ml-auto right-1  ' color='#FFFFFF' size={23} />
      </div>
      <div className='bg-[#F44336] w-full h-[60px] rounded-xl py-[17px] px-3 my-2 text-white flex'>
        <IoInformationCircleOutline size={23} className='mr-2' />A simple blue
        alert with an example link. Give it a click if you like.{' '}
        <IoClose className='ml-auto right-1  ' color='#FFFFFF' size={23} />
      </div>
    </div>
  );
}
export default IconsNotice;
