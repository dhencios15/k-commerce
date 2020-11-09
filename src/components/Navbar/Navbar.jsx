import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { SearchIcon, ShoppingBag } from 'icons/index';
import { selectCurrentUser } from 'store/selector/authSelector';
import { logOut } from 'store/actions/authActions';
import { appStatus } from 'store/selector/appSelector';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { isLoading } = useSelector((state) => appStatus(state));
  const [cartCount] = useState(2);

  const authLink = () => {
    return currentUser ? (
      <>
        <button
          onClick={() => setOpen(!isOpen)}
          className='flex justify-center items-center hover:text-gray-500 font-bold'
        >
          {currentUser.name.toUpperCase()}
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-0 mt-6 rounded-lg bg-gray-300 py-4 px-6 z-40`}
        >
          <ul className='flex flex-col cursor-pointer space-y-3'>
            <li className='tracking-wider font-bold cursor-pointer'>
              <button className='flex justify-center items-center hover:text-gray-500 font-bold'>
                ACCOUNT
              </button>
            </li>
            <li className='tracking-wider font-bold cursor-pointer'>
              <button
                onClick={() => dispatch(logOut())}
                className='flex justify-center items-center hover:text-gray-500 font-bold'
              >
                {isLoading ? 'LOGGING OUT' : 'LOGOUT'}
              </button>
            </li>
          </ul>
        </div>
      </>
    ) : (
      <Link
        to='/signin'
        className='hover:text-gray-500 tracking-wider font-bold cursor-pointer'
      >
        LOG IN
      </Link>
    );
  };

  return (
    <nav className='flex justify-between md:justify-around items-center py-4 px-6 text-black'>
      <div>
        <Link to='/' className='font-bold text-2xl italic tracking-widest'>
          Kamàhal<span className='ml-1 text-hot-pink'>!</span>
        </Link>
      </div>

      <div className='hidden md:block w-1/3 pt-2 relative mx-auto text-gray-600'>
        <input
          className='w-full border bg-gray-200 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
          type='search'
          name='search'
          placeholder='Search'
        />
        <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
          <SearchIcon />
        </button>
      </div>
      <div className='relative flex text-left'>
        <div
          className={`flex ${cartCount && 'animate-pulse cursor-pointer mr-2'}`}
        >
          <ShoppingBag className='w-6 h-6 hover:text-gray-500' />
          {cartCount > 0 && (
            <span className='flex items-center -ml-3 z-30 justify-center p-2 text-xs rounded-full w-3 h-3 text-white bg-hot-pink'>
              {cartCount}
            </span>
          )}
        </div>
        {authLink()}
      </div>
    </nav>
  );
};

export default Navbar;
