import React from 'react';

const cross = ({ className, ...otherProps }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...otherProps}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

export default cross;
