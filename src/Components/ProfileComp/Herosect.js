import React from 'react';
import MyForm from './Myform';
import { MdModeEditOutline } from 'react-icons/md';
import Facebook from '../../img/Facebook.png';
import Twitter from '../../img/Twitter.png';
import Instagram from '../../img/Intagram.png';
import Sophia from '../../img/Sofia.jpeg';
import Alexander from '../../img/alexander.jpeg';
import ivanna from '../../img/Ivanna.jpeg';
import perterson from '../../img/Peterson.jpeg';
import bruce from '../../img/bruce mars.jpeg';
import projI from '../../img/Proj 1.jpeg';
import projII from '../../img/Proj 2.jpeg';
import projIII from '../../img/Proj 3.jpeg';
import projIV from '../../img/pro 4.jpeg';

import ProfileImg from '../../img/bruce-mars.jpeg';
import { FaHome } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';
import { GoSettings } from 'react-icons/go';
function Herosect() {
  return (
    <div className='bg-white rounded-2xl p-5 mx-5'>
      {/* Header */}
      <div className='flex w-full'>
        {/* Profile */}
        <div className='flex'>
          <img className='w-20 rounded-2xl ' src={ProfileImg} alt='#' />
          <div className='mx-5 py-3'>
            <h1 className='text-xl font-bold text-gray-700'>Richard Davis</h1>
            <p className='text-gray-500 text-sm'>CEO / Co-Founder</p>
          </div>
        </div>
        <div className='flex  bg-gray-100 ml-auto my-auto p-1 rounded-lg'>
          <div className='cursor-pointer w-32 px-auto justify-center py-2 rounded-lg flex bg-white'>
            <FaHome size={20} />
            <p className=' ml-2 text-sm'>App</p>
          </div>
          <div className='cursor-pointer w-32 px-auto justify-center py-2 rounded-lg flex'>
            <SiGooglemessages size={20} />
            <p className=' ml-2 text-sm '>Message</p>
          </div>
          <div className='cursor-pointer w-32 px-auto justify-center py-2 rounded-lg flex'>
            <GoSettings size={20} />
            <p className=' ml-2 text-sm'>Settings</p>
          </div>
        </div>
        {/* Header closing Div */}
      </div>
      {/* HeroSection */}
      <div className='grid grid-cols-3 my-5'>
        {/* Platform Settings */}
        <div className=' pt-5 p-1'>
          <h1 className='font-bold text-md'>Platform Settings</h1>
          <h2 className='text-sm text-gray-600 font-bold mt-3'>Account</h2>
          <div>
            <MyForm label='Email me When Someone Follows me' />
            <MyForm label='Email me When Someone answer on my post me' />
            <MyForm label='Email me When Someone Mention me' />
            <h1 className='font-bold text-gray-600 mt-8 text-sm'>
              Application
            </h1>
            <MyForm label='New Launches and project' />
            <MyForm label='Monthly Product Unpdates' />
            <MyForm label='Subscribe for newslatter' />
          </div>
        </div>
        {/* Profile info Settings */}
        <div className=' pt-5 p-1'>
          <div className='flex mb-5 mr-3'>
            <h1 className='font-bold text-md '>Profile Information</h1>
            <MdModeEditOutline
              size={20}
              className='flex ml-auto right-3 text-gray-500'
            />
          </div>
          <p className='pr-3 text-sm text-gray-600'>
            Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
          </p>
          <div className='bg-gray-200 w-full h-[0.1px] my-10'></div>
          <ul>
            <li className='text-sm flex my-2'>
              <h1 className='font-semibold mr-3'>First Name:</h1>{' '}
              <p className='text-gray-500'>Alec M. Thompson</p>
            </li>
            <li className='text-sm flex my-2'>
              <h1 className='font-semibold mr-3'>Mobile:</h1>{' '}
              <p className='text-gray-500'>(44) 123 456 789</p>
            </li>
            <li className='text-sm flex my-2'>
              <h1 className='font-semibold mr-3'>Email:</h1>{' '}
              <p className='text-gray-500'>Alecthompson@mail.com</p>
            </li>
            <li className='text-sm flex my-2'>
              <h1 className='font-semibold mr-3'>Location:</h1>{' '}
              <p className='text-gray-500'>USA</p>
            </li>
            <li className='text-sm flex my-2'>
              <h1 className='font-semibold mr-3'>Social Media:</h1>{' '}
              <img className='w-5 mx-2' src={Facebook} alt='#' />
              <img className='w-5 mx-2' src={Twitter} alt='#' />
              <img className='w-5 mx-2' src={Instagram} alt='#' />
            </li>
          </ul>
        </div>
        {/* Platform Settings */}
        <div className=' pt-5 p-1'>
          <h1 className='font-bold text-md'>Platform Settings</h1>
          {/* Profile1 */}
          <div className='flex my-5'>
            <div className='flex'>
              <img className='w-12 rounded-md' src={Sophia} alt='#' />
              <div className='mx-2'>
                <h1 className='font-semibold text-sm'>Sophia B.</h1>
                <p className='text-[10px] leading-snug mt-1 text-gray-500 mr-5 '>
                  Hi! I need more information...
                </p>
              </div>
            </div>
            <button className='text-blue-400 text-xs mx-5 font-semibold uppercase'>
              Reply
            </button>
          </div>
          {/* Profile1 */}
          <div className='flex my-5'>
            <div className='flex'>
              <img className='w-12 rounded-md' src={Alexander} alt='#' />
              <div className='mx-2'>
                <h1 className='font-semibold text-sm'>Alexander</h1>
                <p className='text-[10px] leading-snug mt-1 text-gray-500 mr-5'>
                  Awesome work, can you talk...
                </p>
              </div>
            </div>
            <button className='text-blue-400 text-xs mx-5 font-semibold uppercase'>
              Reply
            </button>
          </div>
          {/* Profile1 */}
          <div className='flex my-5'>
            <div className='flex'>
              <img className='w-12 rounded-md' src={ivanna} alt='#' />
              <div className='mx-2'>
                <h1 className='font-semibold text-sm'>Ivanna</h1>
                <p className='text-[10px] leading-snug mt-1 text-gray-500 mr-5'>
                  Awesome work, can you talk...
                </p>
              </div>
            </div>
            <button className='text-blue-400 text-xs mx-5 font-semibold uppercase'>
              Reply
            </button>
          </div>
          {/* Profile1 */}
          <div className='flex my-5'>
            <div className='flex'>
              <img className='w-12 rounded-md' src={bruce} alt='#' />
              <div className='mx-2'>
                <h1 className='font-semibold text-sm'>Buuce Mars.</h1>
                <p className='text-[10px] leading-snug mt-1 text-gray-500 mr-5'>
                  Hi! I need more information...
                </p>
              </div>
            </div>
            <button className='text-blue-400 text-xs mx-5 font-semibold uppercase'>
              Reply
            </button>
          </div>
          {/* Profile1 */}
          <div className='flex my-5'>
            <div className='flex'>
              <img className='w-12 rounded-md' src={perterson} alt='#' />
              <div className='mx-2'>
                <h1 className='font-semibold text-sm'>Peterson</h1>
                <p className='text-[10px] leading-snug mt-1 text-gray-500 mr-5'>
                  Hi! I need more information...
                </p>
              </div>
            </div>
            <button className='text-blue-400 text-xs mx-5 font-semibold uppercase'>
              Reply
            </button>
          </div>
        </div>
      </div>
      {/* Ptojects */}
      <div className='grid grid-cols-4'>
        <div className=' p-2 h-full'>
          <img className='rounded-xl h-44 ' src={projI} alt='#' />
          <p className='text-gray-500 text-sm my-2'>Project #1</p>
          <h1 className='font-bold text-xl my-3'>Modren</h1>
          <p className='text-xs text-gray-400 '>
            As Uber works through a huge amount of internal management turmoil.
          </p>
          <button className='text-blue-500 border border-blue-500 rounded-lg px-8 py-2 text-sm leading-tight my-5 flex mx-auto'>
            View Project
          </button>
        </div>
        <div className=' p-2 h-full'>
          <img className='rounded-xl h-44 ' src={projII} alt='#' />
          <p className='text-gray-500 text-sm my-2'>Project #2</p>
          <h1 className='font-bold text-xl my-3'>Scandinavian</h1>
          <p className='text-xs text-gray-400 '>
            Music is something that every person has his or her own specific
            opinion about.
          </p>
          <button className='text-blue-500 border border-blue-500 rounded-lg px-8 py-2 text-sm leading-tight my-5 flex mx-auto'>
            View Project
          </button>
        </div>
        <div className=' p-2 h-full'>
          <img className='rounded-xl h-44 ' src={projIII} alt='#' />
          <p className='text-gray-500 text-sm my-2'>Project #3</p>
          <h1 className='font-bold text-xl my-3'>Minimalist</h1>
          <p className='text-xs text-gray-400 '>
            Different people have different taste, and various types of music.
            Pink is obviously a better
          </p>
          <button className='text-blue-500 border border-blue-500 rounded-lg px-8 py-2 text-sm leading-tight my-5 flex mx-auto'>
            View Project
          </button>
        </div>
        <div className=' p-2 h-full'>
          <img className='rounded-xl h-44 ' src={projIV} alt='#' />
          <p className='text-gray-500 text-sm my-2'>Project #4</p>
          <h1 className='font-bold text-xl my-3'>Gothic</h1>
          <p className='text-xs text-gray-400 '>
            Why would anyone pick blue over pink? Pink is obviously a better
            color.
          </p>
          <button className='text-blue-500 border border-blue-500 rounded-lg px-8 py-2 text-sm leading-tight my-5 flex mx-auto'>
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosect;
