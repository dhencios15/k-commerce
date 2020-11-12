import HeroBg from 'assets/images/hero.jpg';
import Categories from 'components/Categories';
import { BurgerMenuIcon, KLogoIcon } from 'icons';
import { useState } from 'react';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:h-screen/2'>
      <div className='md:hidden flex items-center justify-center'>
        <BurgerMenuIcon
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer shadow-lg text-center'
        />
      </div>
      <div className='flex justify-center mx-2 h-full'>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block w-1/4 text-center`}
        >
          <Categories />
        </div>

        <div
          className='hidden md:flex w-full  justify-center items-center bg-cover bg-top shadow-xl md:rounded-lg'
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <KLogoIcon className='h-12 w-12 shadow-lg opacity-50' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
