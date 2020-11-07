import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className='p-4 h-screen/2 w-full animate-pulse'>
      <div className='flex h-full'>
        <div className='rounded bg-gray-400 w-full'></div>
        <div className='w-full space-y-4 ml-2 mt-4'>
          <div className='h-4 bg-gray-400 rounded w-3/6'></div>
          <div className='h-4 bg-gray-400 rounded w-5/6'></div>
          <div className='h-4 bg-gray-400 rounded w-3/12'></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
