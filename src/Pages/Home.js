import React from 'react';

import Trackingbox from '../Components/Trackingbox';
import Tablelist from '../Components/Tablelist';
import OrderOverview from '../Components/OrderOverview';
// import Navbar from '../Components/Navbar';
import Charts from '../Components/Charts';

function Home() {
  return (
    <section className='bg-[#F5F7F8] flex font-Poppins ml-6'>
      {/*right Main div Dashboard */}
      <div className=' w-full '>
        {/* Navbar */}

        <Trackingbox />
        <Charts />
        <div className='flex gap-5'>
          <Tablelist />
          <OrderOverview />
        </div>

        {/* Last main div */}
      </div>
    </section>
  );
}

export default Home;
