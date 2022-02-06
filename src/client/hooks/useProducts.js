import { useState } from 'react';

const fetchProducts = () => {
  const url = '/api/products';
  return fetch(url).then((response) => response.json());
};

export const useProducts = () => {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  if (!products && !error) {
    fetchProducts()
      .then((productsResponse) => setProducts(productsResponse))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return {
    products,
    isLoading,
    error,
  };
};
