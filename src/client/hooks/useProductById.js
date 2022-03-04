import { useState, useEffect } from 'react';

const fetchProduct = (productId) => {
  const url = `/api/products/${productId}`;
  return fetch(url).then((response) => response.json());
};

export const useProductById = (productId) => {
  const [product, setProduct] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchProduct(productId)
      .then((productResponse) => setProduct(productResponse[0]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
}, [productId]);

  return {
    product,
    isLoading,
    error,
  };
};
