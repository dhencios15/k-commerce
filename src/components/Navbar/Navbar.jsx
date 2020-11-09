import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SearchIcon, ShoppingBag } from 'icons/index';

const Navbar = () => {
  const [cartCount] = useState(2);

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

      <ul className='flex cursor-pointer space-x-4'>
        <li className={`flex ${cartCount && 'animate-pulse'}`}>
          <ShoppingBag className='w-6 h-6 hover:text-gray-500' />
          {cartCount > 0 && (
            <span className='flex items-center -ml-3 z-30 justify-center p-2 text-xs rounded-full w-3 h-3 text-white bg-hot-pink'>
              {cartCount}
            </span>
          )}
        </li>
        <li className='tracking-wider font-bold cursor-pointer'>
          <Link to='/signin' className='hover:text-gray-500'>
            LOG IN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
