import useCategory from 'hooks/useCategory';
import HeroBg from 'assets/images/hero.jpg';

import { CategorySkeleton } from 'components/Skelton';
const Hero = () => {
  const { data: categories, isLoading } = useCategory();

  const categoryList = ({ _id, name }) => {
    return (
      <li
        className='tracking-wider font-bold cursor-pointer italic transform hover:scale-125 transition duration-700 ease-in-out'
        key={_id}
      >
        {name}
      </li>
    );
  };

  return (
    <div className='h-screen/2 flex justify-center'>
      <div className='hidden md:block w-1/4 text-center'>
        <ul className='flex flex-col space-y-10 mt-10'>
          {categoryList({ _id: 'All101', name: 'All' })}
          {isLoading ? (
            <CategorySkeleton />
          ) : (
            categories?.map((category) => categoryList(category))
          )}
        </ul>
      </div>
      <div
        className='w-full bg-cover bg-top shadow-lg md:rounded-lg'
        style={{ backgroundImage: `url(${HeroBg})` }}
      />
    </div>
  );
};

export default Hero;
