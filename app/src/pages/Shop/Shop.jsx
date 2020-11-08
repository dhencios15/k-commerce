import ProductsContainer from 'components/Products';
import { ProductsSkeleton } from 'components/Skelton';
import { useProducts } from 'hooks/useProducts';
import { useParams } from 'react-router-dom';
const AllProducts = () => {
  const { category } = useParams();
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <ProductsSkeleton />;

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='hidden md:block w-1/4 text-center'>
        <ul className='flex flex-col space-y-10 mt-10'>FILTER AREA</ul>
      </div>
      <ProductsContainer products={products} limit={null} filter={category} />
    </div>
  );
};

export default AllProducts;
