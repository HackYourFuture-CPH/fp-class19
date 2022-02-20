import { useEffect, useState } from 'react';

const fetchProducts = (limit, offset, sortKey, sortOrder) => {
  const url = `/api/products?limit=${limit}&offset=${offset}&sortKey=${sortKey}&sortOrder=${sortOrder}`;
  return fetch(url).then((response) => response.json());
};

export const useProducts = (
  { sortKey, sortOrder } = { sortKey: 'name', sortOrder: 'asc' },
) => {
  const PRODUCT_PER_PAGE = 8;
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState();
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
    console.log(sortKey, sortOrder);
    setProducts([]);
    setLoading(false);
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
