import { memo, useMemo } from 'react';
import Product from './Product';
const ProductsContainer = ({
  products,
  limit = 12,
  filter = 'All',
  name = null,
}) => {
  const filteredProducts = useMemo(() => {
    if (filter) {
      if (filter === 'All') {
        return products;
      } else {
        return products.filter((prod) => {
          let items = [];
          if (!name) {
            items = prod.category.name === filter;
          } else {
            items = prod.category.name === filter && prod.name !== name;
          }
          return items;
        });
      }
    }
  }, [products, filter, name]);

  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {filteredProducts &&
            filteredProducts
              .slice(0, limit ?? products.length)
              .map((product) => (
                <Product key={product._id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProductsContainer);
