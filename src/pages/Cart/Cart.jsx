import BaseButton from 'components/Shared/BaseButton';
import useCart from 'hooks/useCart';
import { CrossIcon, LeftArrowIcon, RightArrowIcon } from 'icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from 'store/selector/cartSelector';

const Cart = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const totalPrice = useSelector((state) => selectCartTotal(state));
  const { incQty, decQty, removeItemFromCart } = useCart();
  console.log(cartItems);
  return (
    <div className='flex space-x-4'>
      <div className='flex items-center justify-center w-full'>
        {cartItems.length > 0 ? (
          <table className='w-full'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Product</th>
                <th className='px-4 py-2'>Name</th>
                <th className='px-4 py-2'>Quantity</th>
                <th className='px-4 py-2'>Price</th>
                <th className='px-4 py-2'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td className='border flex items-center justify-center'>
                    <img
                      src={item.imageCover}
                      alt={item.name}
                      className='object-cover rounded-lg h-screen/5 py-4'
                    />
                  </td>
                  <td className='border px-4 select-none'>
                    <div className='flex items-center justify-center select-none'>
                      {item.name}
                    </div>
                  </td>
                  <td className='border'>
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
                  <td className='border'>
                    <div className='flex items-center justify-center select-none'>
                      {item.price}
                    </div>
                  </td>
                  <td className='border'>
                    <div className='flex items-center justify-center'>
                      <CrossIcon
                        onClick={() => removeItemFromCart(item)}
                        className='hover:text-red-500 cursor-pointer'
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='flex items-center justify-center '>
            <div className='flex-col'>
              <h1 className='font-bold text-2xl'>CART EMPTY 😢</h1>
              <Link to='/' className='text-indigo-500 font-bold text-sm'>
                Go to shop
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className='bg-gray-300 py-2 px-4 rounded-lg shadow-lg w-1/3 space-y-4'>
        <h1 className='font-bold text-2xl text-center'>ORDER DETAILS</h1>
        <ul className='py-2 border-t-2 border-gray-600 space-y-4'>
          <li className='flex justify-between items-center space-x-4'>
            <h1 className='font-semibold text-lg'>SUB-TOTAL</h1>
            <h2 className='font-semibold'>₱{totalPrice}.00</h2>
          </li>
          <li className='flex justify-between items-center space-x-4'>
            <h1 className='font-semibold text-lg'>DISCOUNT</h1>
            <h2 className='font-semibold'>0</h2>
          </li>
          <li className='flex justify-between items-center space-x-4'>
            <h1 className='font-semibold text-lg'>TAX</h1>
            <h2 className='font-semibold'>0</h2>
          </li>
          <li className='flex justify-between items-center space-x-4'>
            <h1 className='font-semibold text-lg'>TOTAL</h1>
            <h2 className='font-semibold'>₱{totalPrice}.00</h2>
          </li>
          <li className='flex justify-between items-center space-x-4'>
            <BaseButton margin='ml-auto mt-2' name='Checkout' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
