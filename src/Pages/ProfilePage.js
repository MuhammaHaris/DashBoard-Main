import React from 'react';

import Herosect from '../Components/ProfileComp/Herosect';

function ProfilePage() {
  return (
    <div className='ml-6 relative h-[1250px]'>
      <div className='absolute w-full h-[300px] bg-blue-400/50 rounded-2xl z-0'></div>
      <div className=' absolute mt-60 a-20 w-full'>
        <Herosect />
      </div>
      {/* imgSect */}
      <div className=' z-0'>
        <img
          className='h-[300px] z-0 w-full bg-cover bg-no-repeat bg-center rounded-2xl'
          src='https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
          alt='#'
        />
      </div>
    </div>
  );
}

export default ProfilePage;
