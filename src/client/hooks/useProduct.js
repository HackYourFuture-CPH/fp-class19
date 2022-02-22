import { useState } from 'react';

const fetchProduct = (productId) => {
  const url = `/api/products/${productId}`;
  return fetch(url).then((response) => response.json());
};

export const useProduct = (productId) => {
  const [product, setProduct] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  if (!product && !error) {
    fetchProduct(`${productId}`)
      .then((productResponse) => setProduct(productResponse[0]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return {
    product,
    isLoading,
    error,
  };
};
