import { useParams } from 'react-router-dom';
import { useProduct } from 'hooks/useProducts';
import { memo } from 'react';
import { ProductSkeleton, ProductsSkeleton } from 'components/Skelton';
import { ProductDetails } from 'components/Product';
import ProductsContainer from 'components/Products';

import { useProducts } from 'hooks/useProducts';
const Product = () => {
  const { slug } = useParams();
  const { data: product, isLoading, isFetching } = useProduct(slug);
  const { data: products, isLoading: isRelatedProductsLoading } = useProducts();

  return (
    <section className='text-gray-700 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto space-y-10'>
        {isLoading || isFetching ? (
          <ProductSkeleton />
        ) : (
          <ProductDetails product={product} />
        )}
        <div className='mt-5'>
          <h1 className='font-bold text-2xl'>YOU MIGHT ALSO LIKE</h1>
          {isRelatedProductsLoading || isLoading || isFetching ? (
            <ProductsSkeleton />
          ) : (
            <ProductsContainer
              products={products}
              filter={product.category.name}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Product);
