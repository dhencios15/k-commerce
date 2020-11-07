import { useQuery } from 'react-query';
import axios from 'axios';

export default function useProducts() {
  return useQuery('products', () =>
    axios
      .get('/products')
      .then((res) => res.data.data)
      .catch((err) => err.res)
  );
}
