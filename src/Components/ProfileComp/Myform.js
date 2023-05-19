import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

function MyForm({ label }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <form>
      <FormControlLabel
        className=' my-[5px]'
        control={<Switch checked={checked} onChange={handleChange} />}
        label=<p className='text-sm text-gray-600 mr-2'>{label}</p>
      />
    </form>
  );
}

export default MyForm;
