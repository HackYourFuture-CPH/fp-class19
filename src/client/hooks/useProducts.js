import { useEffect, useState, useCallback } from 'react';

const fetchProducts = (limit, offset, sortKey, sortOrder) => {
  const url = `/api/products?limit=${limit}&offset=${offset}&sortKey=${sortKey}&sortOrder=${sortOrder}`;
  return fetch(url).then((response) => response.json());
};
export const PRODUCT_PER_PAGE = 8;

export const useProducts = ({ sortKey, sortOrder, currentPage }) => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  const loadPage = useCallback(() => {

    fetchProducts(PRODUCT_PER_PAGE, currentPage * PRODUCT_PER_PAGE, sortKey, sortOrder)
      .then(({ items, totalCount: _totalCount }) => {
        setTotalCount(_totalCount);
        setProducts([...items]);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [currentPage, sortKey, sortOrder]);

  useEffect(() => {
    setLoading(false);
    loadPage();
  }, [sortKey, sortOrder, currentPage, isLoading, loadPage]);

  return {
    loadPage,
    totalCount,
    products,
    isLoading,
    error,
  };
};
