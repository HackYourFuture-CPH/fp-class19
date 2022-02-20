import { useEffect, useState } from 'react';

const fetchProducts = (limit, offset) => {
  const url = `/api/products?limit=${limit}&offset=${offset}`;
  return fetch(url).then((response) => response.json());
};

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  const loadMoreProducts = () => {
    fetchProducts(8, products.length)
      .then((productsResponse) => setProducts([...products, ...productsResponse]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  // if (!products && !error) {
  // }

  useEffect(() => {
    loadMoreProducts();
  }, []);

  return {
    loadMoreProducts,
    products,
    isLoading,
    error,
  };
};
