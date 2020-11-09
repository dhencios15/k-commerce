import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({ product }) => {
  const history = useHistory();

  const onNavigate = useCallback(
    () => history.push(`/product/${product.slug}`),
    [history, product.slug]
  );

  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
      <div
        onClick={onNavigate}
        className='transform duration-500 hover:scale-105 shadow-md p-4'
      >
        <div className='block relative h-48 rounded overflow-hidden'>
          <img
            alt='ecommerce'
            className='object-cover object-center w-full h-full block'
            src={product.imageCover}
          />
        </div>
        <div className='mt-4'>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            {product.category.name}
          </h3>
          <h2 className='text-gray-900 title-font text-lg font-medium'>
            {product.name}
          </h2>
          <p className='mt-1 text-hot-pink'>₱{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
