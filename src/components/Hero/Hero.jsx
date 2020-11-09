import HeroBg from 'assets/images/hero.jpg';
import Categories from 'components/Categories';
import { KLogoIcon } from 'icons';

const Hero = () => {
  return (
    <div className='h-screen/2 flex justify-center'>
      <div className='hidden md:block w-1/4 text-center'>
        <Categories />
      </div>
      <div
        className='w-full flex justify-center items-center bg-cover bg-top shadow-xl md:rounded-lg'
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <KLogoIcon className='h-12 w-12 shadow-lg opacity-50' />
      </div>
    </div>
  );
};

export default Hero;
