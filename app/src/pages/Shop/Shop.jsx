import { useParams } from 'react-router-dom';

import { useProducts } from 'hooks/useProducts';

import Categories from 'components/Categories/Categories';
import ProductsContainer from 'components/Products';
import { ProductsSkeleton } from 'components/Skelton';

const AllProducts = () => {
  const { category } = useParams();
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <ProductsSkeleton />;

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='hidden md:block w-1/4 text-center'>
        <Categories />
      </div>
      <ProductsContainer products={products} limit={null} filter={category} />
    </div>
  );
};

export default AllProducts;
