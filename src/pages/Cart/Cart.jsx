import { CartItems, OrderDetails } from 'components/Cart';
import { EmptyCartIcon } from 'icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from 'store/selector/cartSelector';

const Cart = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const totalPrice = useSelector((state) => selectCartTotal(state));

  return (
    <div className='flex justify-center my-6'>
      <div className='flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
        <div className='flex-1'>
          {cartItems.length > 0 ? (
            <>
              <CartItems cartItems={cartItems} />
              <OrderDetails totalPrice={totalPrice} />
            </>
          ) : (
            <div className='flex-col justify-center items-center'>
              <h1 className='text-center font-bold text-2xl'>
                You have no items in your cart
              </h1>
              <EmptyCartIcon className='h-screen/5 my-6' />
              <p className='text-center font-semibold mb-4'>
                Hurry! Add your first item
              </p>
              <div className='font-bold text-center'>
                <Link to='/shop/All' className='text-sm  text-indigo-500'>
                  GO TO SHOP
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
