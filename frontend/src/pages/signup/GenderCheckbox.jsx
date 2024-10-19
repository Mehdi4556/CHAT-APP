import React from 'react';

const GenderCheckbox = () => {
  return (
    <div className='p-2'>
      <label className='flex items-center'>
        <input type='checkbox' className='checkbox' />
        <span className='ml-2'>Male</span>
      </label>
      <label className='flex items-center'>
        <input type='checkbox' className='checkbox' />
        <span className='ml-2'>Female</span>
      </label>
      <label className='flex items-center'>
        <input type='checkbox' className='checkbox' />
        <span className='ml-2'>Other</span>
      </label>
    </div>
  );
};

export default GenderCheckbox;
