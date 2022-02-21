import { useEffect, useState } from 'react';

const fetchProducts = (limit, offset, sortKey, sortOrder) => {
  const url = `/api/products?limit=${limit}&offset=${offset}&sortKey=${sortKey}&sortOrder=${sortOrder}`;
  return fetch(url).then((response) => response.json());
};

export const PRODUCT_PER_PAGE = 12;

export const useProducts = ({ sortKey, sortOrder }) => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const loadMoreProducts = () => {
    if (isLoading) {
      return;
    }
    setLoading(true);

    fetchProducts(PRODUCT_PER_PAGE, products.length, sortKey, sortOrder)
      .then(({ items, totalCount: _totalCount }) => {
        setTotalCount(_totalCount);
        setProducts([...products, ...items]);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setProducts([]);
    // reset products array along with updating state, state changes are async
    // TODO: find better solution
    products.length = 0;
    loadMoreProducts();
  }, [sortKey, sortOrder]);

  return {
    loadMoreProducts,
    totalCount,
    products,
    isLoading,
    error,
  };
};
