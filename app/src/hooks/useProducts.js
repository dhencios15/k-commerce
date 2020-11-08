import { useQuery } from 'react-query';
import axios from 'axios';

export function useProducts() {
  return useQuery('products', () =>
    axios
      .get('/products')
      .then((res) => res.data.data)
      .catch((err) => err.res)
  );
}

export function useProduct(slug) {
  return useQuery(`product-${slug}`, () =>
    axios
      .get(`/products/${slug}`)
      .then((res) => res.data)
      .catch((err) => err.res)
  );
}
