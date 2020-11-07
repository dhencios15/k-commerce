import { memo, useMemo } from 'react';
import Product from './Product';
const ProductsContainer = ({ products, limit = 12, filter = null }) => {
  const filteredProducts = useMemo(() => {
    if (filter) {
      return products.filter((prod) => prod.category.name === filter);
    } else {
      return products;
    }
  }, [products, filter]);

  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {filteredProducts &&
            filteredProducts
              .slice(0, limit)
              .map((product) => (
                <Product key={product._id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProductsContainer);
