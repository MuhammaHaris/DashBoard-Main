import React from 'react';
import ChartI from '../img/chart1.png';
import ChartII from '../img/ChartII.png';
import ChartIII from '../img/ChartIII.png';
import { BsClockHistory } from 'react-icons/bs';
function Charts() {
  return (
    <div className='grid grid-cols-3 my-10 gap-5  '>
      {/* ChartI */}
      <div className='bg-white rounded-xl w-full h-[360px] p-5 shadow-lg'>
        <img
          className='justify-center mx-auto rounded-xl -mt-8 shadow-lg shadow-blue-400/50'
          src={ChartI}
          alt='chart'
        />
        <div className='my-5 leading-7 '>
          <h2 className='font-semibold text-gray-800'>Website View</h2>
          <p className='text-sm text-gray-500'>Last compaign Perfomence</p>
        </div>
        <div className='bg-gray-300 w-full h-[0.5px]'></div>
        <div className='my-4 flex gap-2'>
          <BsClockHistory className='text-gray-500 ' />
          <p className='text-gray-500 text-xs'>campaign sent 2 days ago</p>
        </div>
      </div>
      {/* Chart2 */}
      <div className='bg-white rounded-xl w-full h-[360px] p-5 shadow-lg'>
        <img
          className='justify-center mx-auto rounded-xl -mt-8 shadow-lg shadow-pink-400/50'
          src={ChartII}
          alt='chart'
        />
        <div className='my-5 leading-7  '>
          <h2 className='font-semibold text-gray-800'>Daily Sales</h2>
          <p className='text-sm text-gray-500'>15% increase in today sales</p>
        </div>
        <div className='bg-gray-300 w-full h-[0.5px]'></div>
        <div className='my-4 flex gap-2'>
          <BsClockHistory className='text-gray-500 ' />
          <p className='text-gray-500 text-xs'>campaign sent 4 min ago</p>
        </div>
      </div>
      {/* Chart3 */}
      <div className='bg-white rounded-xl w-full h-[360px] p-5 shadow-lg'>
        <img
          className='justify-center mx-auto rounded-xl -mt-8 shadow-lg shadow-green-400/50'
          src={ChartIII}
          alt='chart'
        />
        <div className='my-5 leading-7 '>
          <h2 className='font-semibold text-gray-800'>Completed Tasks</h2>
          <p className='text-sm text-gray-500'>Last Campaign Performance</p>
        </div>
        <div className='bg-gray-300 w-full h-[0.5px]'></div>
        <div className='my-4 flex gap-2'>
          <BsClockHistory className='text-gray-500 ' />
          <p className='text-gray-500 text-xs'>Just Updated</p>
        </div>
      </div>
    </div>
  );
}

export default Charts;
