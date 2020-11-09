import React from 'react';
import { Link } from 'react-router-dom';

import useCategory from 'hooks/useCategory';
import { CategorySkeleton } from 'components/Skelton';

const Categories = () => {
  const { data: categories, isLoading } = useCategory();

  const categoryList = ({ _id, name }) => {
    return (
      <Link
        to={`/shop/${name}`}
        className='tracking-wider font-bold cursor-pointer italic transform hover:scale-125 transition duration-700 ease-in-out'
        key={_id}
      >
        {name}
      </Link>
    );
  };

  return (
    <ul className='flex flex-col space-y-10 mt-10'>
      {categoryList({ _id: 'All101', name: 'All' })}
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        categories?.map((category) => categoryList(category))
      )}
    </ul>
  );
};

export default Categories;
