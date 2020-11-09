import { useQuery } from 'react-query';
import Api from 'services/Api';

export function useProducts() {
  return useQuery('products', () =>
    Api()
      .get('/products')
      .then((res) => res.data.data)
      .catch((err) => err.res)
  );
}

export function useProduct(slug) {
  return useQuery(`product-${slug}`, () =>
    Api()
      .get(`/products/${slug}`)
      .then((res) => res.data)
      .catch((err) => err.res)
  );
}
