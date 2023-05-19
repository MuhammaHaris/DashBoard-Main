import React from 'react';
import Tablelist from '../Components/TablesComp/Tablelist';
import AuthorTable from '../Components/TablesComp/AuthorTable';

function Tables() {
  return (
    <div className='m-10'>
      <Tablelist />
      <AuthorTable />
    </div>
  );
}

export default Tables;
