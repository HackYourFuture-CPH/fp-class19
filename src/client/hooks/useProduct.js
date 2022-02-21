import { useState } from 'react';

const fetchProduct = (id) => {
  const url = `/api/products/${id}`;
  return fetch(url).then((response) => response.json());
};

export const useProduct = (id) => {
  const [product, setProduct] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  if (!product && !error) {
    fetchProduct(`${id}`)
      .then((productResponse) => setProduct(productResponse))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return {
    product,
    isLoading,
    error,
  };
};
