import React from 'react';
import { AiTwotonePieChart } from 'react-icons/ai';
import { MdOutlineLogin } from 'react-icons/md';
import { BsFillPersonFill, BsFillPersonPlusFill } from 'react-icons/bs';
function SignIn() {
  return (
    <div className='relative'>
      <div className='absolute bg-black/70 w-full h-full'>
        <div className='flex justify-center align-middle h-16 bg-[#CCCFD4] w-[95%] mx-auto my-5 rounded-lg text-white'>
          <div className='w-[20%]'>
            <h1 className=' flex font-bold text-sm my-6 align-middle mx-5 h-full text-gray-700  '>
              Material Tailwind React
            </h1>
          </div>
          <div className='w-[60%] flex'>
            <ul className='flex align-middle justify-center my-auto mx-auto gap-8 text-[#79848E]'>
              <li className='flex text-[14px] font-semibold'>
                <AiTwotonePieChart size={20} className='text-[#7c8185] mx-1' />
                Dashboard
              </li>
              <li className='flex text-[14px] font-semibold'>
                <BsFillPersonFill size={20} className='text-[#79848E] mx-2' />
                Profile
              </li>
              <li className='flex text-[14px] font-semibold'>
                <BsFillPersonPlusFill
                  size={20}
                  className='text-[#79848E] mx-1'
                />
                Sign In
              </li>
              <li className='flex text-[14px] font-semibold'>
                <MdOutlineLogin size={20} className='text-[#79848E] mx-1' />
                Sign Up
              </li>
            </ul>
          </div>
          <div className='w-[20%] flex'>
            <button className='bg-blue-500 px-5 py-2 rounded-lg my-auto ml-auto mr-3 text-sm font-medium'>
              Free Download
            </button>
          </div>
        </div>{' '}
        <div className='bg-white w-[31%] mx-auto my-20 pt-10 pb-2 px-5 rounded-xl'>
          {/* Header */}
          <div className='absolute w-[28%] flex bg-[#399EF1] rounded-2xl -mt-20'>
            {' '}
            <h1 className='font-bold text-4xl my-8 text-white mx-auto'>
              Sign In
            </h1>
          </div>
          <div className='my-10 '>
            <input
              className='my-2 border border-gray-300 font-medium px-2 text-sm text-gray-500 rounded-md w-[100%] py-3'
              placeholder='Email'
              type='text '
            />
            <input
              className='my-2 border border-gray-300 font-medium px-2 text-sm text-gray-500 rounded-md w-[100%] py-3'
              placeholder=' Password'
              type='text '
            />
            <div className='flex gap-3 mx-3 my-3 '>
              <input className='w-5' type='checkbox' />
              <p className='text-sm text-gray-400'>Remember Me</p>
            </div>
            <div className='w-full my-5'>
              <button className='bg-blue-500 w-full py-3 rounded-lg text-white font-semibold uppercase text-sm'>
                Sign In
              </button>
              <p className='mt-5 text-center text-sm text-gray-400'>
                Don't have an Account?{' '}
                <span className='font-bold text-blue-500'>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className='w-full h-screen'
          src='https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt=' #'
        />{' '}
      </div>
    </div>
  );
}

export default SignIn;
