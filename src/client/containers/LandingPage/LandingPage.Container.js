import React, { useState } from 'react';
import './LandingPage.Style.css';
import { useProducts } from '../../hooks/useProducts';
import Loader from '../../components/Loader/Loader.component';
import SpecialOfferBanner from '../../components/SpecialOfferBanner/Specialoffer';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import SortComponent from '../../components/SortComponent/SortComponent';

function LandingPage() {
  const { products, isLoading, error } = useProducts();
  const [sortedProducts, setSortedProducts] = useState(products);

  return (
    <div className="landingPageContaier">
      <SpecialOfferBanner />
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <div style={{ marginBottom: '25px' }}>
          <SortComponent
            products={products}
            setSortedProducts={setSortedProducts}
          />
          <PaginationComponent products={products} productsPerPage={6} />
        </div>
      )}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}

export default LandingPage;
