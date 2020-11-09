import ProductsContainer from 'components/Products';
import Hero from 'components/Hero';
import { useProducts } from 'hooks/useProducts';
import { ProductsSkeleton } from 'components/Skelton';

const Home = () => {
  const { data: products, isLoading } = useProducts();

  return (
    <>
      <Hero />
      {isLoading || !products ? (
        <ProductsSkeleton />
      ) : (
        <ProductsContainer products={products} />
      )}
    </>
  );
};

export default Home;
