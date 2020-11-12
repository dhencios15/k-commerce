import ReactStars from 'react-rating-stars-component';
import BaseButton from 'components/Shared/BaseButton';
import useCart from 'hooks/useCart';

const ProductDetails = ({ product }) => {
  const { incQty } = useCart();

  return (
    <div className='lg:w-4/5 mx-auto flex flex-wrap'>
      <img
        alt='ecommerce'
        className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
        src={product.imageCover}
      />
      <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
        <h2 className='text-sm title-font text-gray-500 tracking-widest'>
          {product.category.name}
        </h2>
        <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
          {product.name}
        </h1>
        <div className='flex mb-4'>
          <span className='flex items-center'>
            <ReactStars
              size={25}
              value={product.averageRating}
              edit={false}
              activeColor='#87b9e8'
            />
            <span className='text-gray-600 ml-3'>
              {product.ratingsQuantity} Reviews
            </span>
          </span>
          <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
            <div className='text-gray-500'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </div>
            <div className='ml-2 text-gray-500'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </div>
            <div className='ml-2 text-gray-500'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
              </svg>
            </div>
          </span>
        </div>
        <p className='leading-relaxed'>{product.description}</p>
        <div className='flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
          <div className='flex'>
            <span className='mr-3'>Color</span>
            <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
            <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
            <button className='border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none'></button>
          </div>
          <div className='flex ml-6 items-center'>
            <span className='mr-3'>Stock Left: </span>
            <div className='relative'>
              {product.quantity > 0 ? (
                <div className='flex space-x-1'>
                  <span>{product.quantity}</span>
                </div>
              ) : (
                <span className='text-red-600'>Out of Stock</span>
              )}
            </div>
          </div>
        </div>
        <div className='flex'>
          <span className='title-font font-medium text-2xl text-hot-pink'>
            ₱{product.price}.00
          </span>
          <BaseButton
            onClick={() => incQty(product)}
            type='submit'
            margin='ml-auto'
            name='Add to Cart'
          />
          <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
            <svg
              fill='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
