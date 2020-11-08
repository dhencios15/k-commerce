import { useLocation, useParams } from 'react-router-dom';
import { useProduct } from 'hooks/useProducts';
import { memo, useEffect } from 'react';
import { ProductSkeleton, ProductsSkeleton } from 'components/Skelton';
import { ProductDetails } from 'components/Product';
import ProductsContainer from 'components/Products';

import { useProducts } from 'hooks/useProducts';
const Product = () => {
  const { pathname } = useLocation();

  const { slug } = useParams();
  const { data: product, isLoading, isError } = useProduct(slug);
  const { data: products, isLoading: isRelatedProductsLoading } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className='text-gray-700 body-font overflow-hidden'>
      <div className='container px-5 pb-12 mx-auto'>
        {isLoading || !product || isError ? (
          <ProductSkeleton />
        ) : (
          <ProductDetails product={product.data} />
        )}
        <div className='mt-12'>
          <h1 className='font-bold text-2xl mb-2'>YOU MIGHT ALSO LIKE</h1>
          {isRelatedProductsLoading || isLoading || !product ? (
            <ProductsSkeleton />
          ) : (
            <ProductsContainer
              products={products}
              filter={product.data.category.name}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Product);
