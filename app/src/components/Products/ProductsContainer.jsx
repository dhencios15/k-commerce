import Products from './Product';
import useProducts from 'hooks/useProducts';

const ProductsContainer = () => {
  const { data: products } = useProducts();
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {products?.slice(0, 12).map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsContainer;
