import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { HiBell } from 'react-icons/hi';
import { AiFillPlusCircle, AiFillCreditCard } from 'react-icons/ai';
import { ImCart, ImUnlocked } from 'react-icons/im';
import { FaMoneyBillAlt } from 'react-icons/fa';
function OrderOverview() {
  return (
    <div className='w-[36.5%] bg-white p-5 rounded-xl shadow-lg '>
      <div className='w-full'>
        <h1 className='font-semibold'>Oder Overview</h1>
        <div className='flex gap-2 my-3'>
          <AiOutlineArrowUp size={15} color='green' />
          <p className='text-gray-700 text-xs'>
            {' '}
            <span className='font-semibold text-gray-700'>24%</span> this month
          </p>
        </div>
      </div>
      {/* Overlay */}
      <div className='my-10 max-h-[300px]'>
        {/* First */}
        <div className='flex gap-5 my-8'>
          <HiBell size={20} color='#4CAF50' />
          <div className='text-[14px]'>
            <h1 className='font-medium'>$2400, Design changes</h1>
            <p className='text-xs text-gray-600'>22 DEC 7:20 PM</p>
          </div>
        </div>
        {/* First */}
        <div className='flex gap-5 my-8'>
          <AiFillPlusCircle size={20} color='red' />
          <div className='text-[14px]'>
            <h1 className='font-medium'>New order #1832412</h1>
            <p className='text-xs text-gray-600'>21 DEC 11 PM</p>
          </div>
        </div>
        {/* First */}
        <div className='flex gap-5 my-8'>
          <ImCart size={20} color='#2196F3' />
          <div className='text-[14px]'>
            <h1 className='font-medium'>Server payments for April</h1>
            <p className='text-xs text-gray-600'>21 DEC 9:34 PM</p>
          </div>
        </div>
        {/* First */}
        <div className='flex gap-5 my-8'>
          <AiFillCreditCard size={20} color='#FF9800' />
          <div className='text-[14px]'>
            <h1 className='font-medium'>New card added for order #4395133</h1>
            <p className='text-xs text-gray-600'>20 DEC 2:20 AM</p>
          </div>
        </div>
        {/* First */}
        <div className='flex gap-5 my-8'>
          <ImUnlocked size={20} color='#E91E63' />
          <div className='text-[14px]'>
            <h1 className='font-medium'>Unlock packages for development</h1>
            <p className='text-xs text-gray-600'>18 DEC 4:54 AM</p>
          </div>
        </div>
        {/* First */}
        <div className='flex gap-5 my-8'>
          <FaMoneyBillAlt size={20} color='#263238' />
          <div className='text-[14px]'>
            <h1 className='font-medium'>New order #9583120</h1>
            <p className='text-xs text-gray-600'>17 DEC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderOverview;
