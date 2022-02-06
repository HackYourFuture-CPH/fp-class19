import React from 'react';
import './LandingPage.Style.css';
import { useProducts } from '../../hooks/useProducts';
import ProductsComponent from '../../components/ProductsComponent/ProductsComponent';

function LandingPage() {
  const { products, isLoading, error } = useProducts();

  return (
    <div>
      {isLoading && <p>Products getting loaded...</p>}
      {!isLoading && !error && <ProductsComponent products={products} />}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}

export default LandingPage;
