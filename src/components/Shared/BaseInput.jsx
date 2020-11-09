import React from 'react';

const BaseInput = ({ register, errors, ...otherProps }) => {
  return (
    <div className='md:flex md:items-center mb-2'>
      <div className='w-full'>
        <input
          className={`bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 ${
            errors ? 'border-hot-pink' : 'border-gray-600'
          }`}
          ref={register}
          {...otherProps}
        />
        <p className='text-hot-pink text-xs'>{errors}</p>
      </div>
    </div>
  );
};

export default BaseInput;
