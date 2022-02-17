import React from 'react';
import './LandingPage.styles.css';
import { useProducts } from '../../hooks/useProducts';
import Products from '../../components/Products/Products.component';

export default function LandingPage() {
  const { products, isLoading, error } = useProducts();

  return (
    <div>
      {isLoading && <p>Products getting loaded...</p>}
      {!isLoading && !error && <Products products={products} />}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
