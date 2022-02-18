import React from 'react';
import './LandingPage.styles.css';
import { useProducts } from '../../hooks/useProducts';
import Products from '../../components/Products/Products.component';
import Loader from '../../components/Loader/Loader.component';

export default function LandingPage() {
  const { products, isLoading, error } = useProducts();

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !error && <Products products={products} />}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
