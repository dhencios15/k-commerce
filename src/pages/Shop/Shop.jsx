import { useParams } from 'react-router-dom';

import { useProducts } from 'hooks/useProducts';

import Categories from 'components/Categories/Categories';
import ProductsContainer from 'components/Products';
import { ProductsSkeleton } from 'components/Skelton';
import { useState } from 'react';
import { BurgerMenuIcon } from 'icons';

const AllProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { category } = useParams();
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <ProductsSkeleton />;

  return (
    <div className='min-h-screen'>
      <div className='md:hidden flex items-center justify-center pb-2'>
        <BurgerMenuIcon
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer shadow-lg text-center'
        />
      </div>
      <div className='flex justify-center'>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } mx-auto text-center md:block w-1/4 ml-4`}
        >
          <Categories />
        </div>
        <ProductsContainer products={products} limit={null} filter={category} />
      </div>
    </div>
  );
};

export default AllProducts;
