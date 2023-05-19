import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { CgMenuRound } from 'react-icons/cg';
import xdlogo from '../img/logo-xd.svg';
import APT from '../img/logo-atlassian.svg';
import FPE from '../img/logo-slack.svg';
import LOMA from '../img/logo-spotify.svg';
import ATNPP from '../img/logo-jira.svg';
import RNOS from '../img/logo-invision.svg';
function Tablelist() {
  return (
    <div className='w-[77.5%] bg-white h-[580px] rounded-xl shadow-lg z-index overflow-hidden '>
      {/* Header */}
      <div className='sticky top-0 '>
        <div className='grid grid-cols-2   rounded-xl index-z bg-white p-5 '>
          <div className='w-full'>
            <h1 className='font-semibold'>Projects</h1>
            <div className='flex gap-1'>
              <BsCheckAll size={25} color='#55AEF7' />
              <p className='text-gray-700'>
                {' '}
                <span className='font-semibold text-gray-700'>
                  30 done
                </span>{' '}
                this month
              </p>
            </div>
          </div>
          <div className='w-full m-auto flex justify-end '>
            <CgMenuRound size={25} />
          </div>
        </div>
        {/* Navbar */}

        <div className='flex uppercase my-5 text-xs text-gray-500  px-5'>
          <p className='w-[44%]'>Companies</p>

          <p className='w-[18%]'>members</p>

          <p className='w-[18%]'>budget</p>

          <p className='w-[18%]'>Completion</p>
        </div>

        <div className='h-[435px] overflow-scroll'>
          {/* data */}

          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={xdlogo} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>
                Material XD version
              </h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$16,000</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>60%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[60%] bg-green-500'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={APT} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>
                Add Progress Track
              </h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$3,000</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>10%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[10%] bg-yellow-500'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={FPE} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>
                Fix Platform Error
              </h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>Not Set</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>100%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[100%] bg-blue-500'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={LOMA} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>
                Launch Our Mobile App
              </h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$25,000</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>5%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[5%] bg-red-500'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={ATNPP} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>
                Add The New Pricing Page
              </h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$500</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>25%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[25%] bg-yellow-600'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={RNOS} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>
                ReDesign New Online Store
              </h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$2,000</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>50%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[50%] bg-green-500'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={FPE} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>
                Material XD version
              </h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$16,000</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>60%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[60%] bg-green-500'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={ATNPP} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>Material s</h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$16,000</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>60%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[60%] bg-green-500'></div>
              </div>
            </div>
          </div>
          {/* data */}
          <div className='border p-3 flex'>
            {' '}
            {/* name */}
            <div className='flex w-[45%] '>
              <img className='h-8' src={LOMA} alt='' />{' '}
              <h1 className='py-[10px] text-sm font-semibold'>XD version</h1>
            </div>
            {/* member */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-sm font-semibold  '>Member</h1>
            </div>
            {/* Budget */}
            <div className='w-[18%]'>
              {' '}
              <h1 className='py-[10px] text-xs my-[1px]'>$16,000</h1>
            </div>
            {/* completion */}
            <div className='w-[18%] my-[5px]'>
              <p className='text-[10px]'>60%</p>
              <div className='h-1 w-[80%] bg-gray-200'>
                <div className='h-full w-[60%] bg-green-500'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablelist;
