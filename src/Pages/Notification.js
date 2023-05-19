import React from 'react';
import Notice from '../Components/NotificationComp/Notice';
import IconsNotice from '../Components/NotificationComp/IconsNotice';

function Notification() {
  return (
    <div className='p-12 '>
      <div className='bg-white w-full h-auto rounded-2xl p-5 my-10'>
        <h1 className='text-xl font-semibold text-gray-700 mb-10'>Alert</h1>
        <Notice />
      </div>
      <div className='bg-white w-full h-auto rounded-2xl p-5 my-10'>
        <h1 className='text-xl font-semibold text-gray-700 mb-10'>Alert</h1>
        <IconsNotice />
      </div>
    </div>
  );
}

export default Notification;
