import useCart from 'hooks/useCart';
import { LeftArrowIcon, RightArrowIcon } from 'icons';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const CartItems = ({ cartItems }) => {
  const { incQty, decQty, removeItemFromCart } = useCart();

  return (
    <table className='w-full text-sm lg:text-base' cellSpacing='0'>
      <thead>
        <tr className='h-12 uppercase'>
          <th className='hidden md:table-cell'></th>
          <th className='text-center'>Product</th>
          <th className='text-center'>Qty</th>
          <th className='text-center'>Unit price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td className='hidden pb-4 md:table-cell'>
              <Link to={`/product/${item.slug}`}>
                <img
                  src={item.imageCover}
                  className='w-20 rounded'
                  alt='Thumbnail'
                />
              </Link>
            </td>
            <td className='text-center'>
              <p className='mb-1 md:ml-4 select-none'>{item.name}</p>
              <button
                onClick={() => removeItemFromCart(item)}
                className='text-hot-pink md:ml-4'
              >
                <small>(Remove item)</small>
              </button>
            </td>
            <td className='text-center justify-center mt-6'>
              <div className='flex items-center justify-center space-x-4'>
                <LeftArrowIcon
                  onClick={() => decQty(item)}
                  className='hover:text-gray-500 cursor-pointer'
                />
                <span className='select-none'>{item.quantity}</span>
                <RightArrowIcon
                  onClick={() => incQty(item)}
                  className='hover:text-gray-500 cursor-pointer'
                />
              </div>
            </td>
            <td className='text-center'>
              <span className='text-sm lg:text-base font-medium select-none'>
                {item.price}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(CartItems);
