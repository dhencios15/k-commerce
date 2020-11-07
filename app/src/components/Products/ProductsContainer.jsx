import Product from './Product';
import { useProducts } from 'hooks/useProducts';
import { ProductsSkeleton } from 'components/Skelton';
const ProductsContainer = () => {
  const { data: products, isFetching } = useProducts();

  if (isFetching || !products) {
    return <ProductsSkeleton />;
  }

  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {products &&
            products
              .slice(0, 12)
              .map((product) => (
                <Product key={product._id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsContainer;
