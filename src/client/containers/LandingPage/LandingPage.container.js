import React, { useState } from 'react';
import './LandingPage.styles.css';
import { useProducts } from '../../hooks/useProducts';
import Loader from '../../components/Loader/Loader.component';
import Sort from '../../components/Sort/Sort.component';
import Pagination from '../../components/Pagination/Pagination.component';
import SpecialOfferBanner from '../../components/SpecialOfferBanner/SpecialOfferBanner.component';
import ProductsView from '../../components/ProductsView/ProductsView.component';

export default function LandingPage() {
  const [sortingPreferences, setSortingPreferences] = useState({
    sortKey: 'name',
    sortOrder: 'desc',
  });
  const { isLoading, error, products } = useProducts(sortingPreferences);

  return (
    <div>
      <SpecialOfferBanner />
      <Sort
        sortingPreferences={sortingPreferences}
        setSortingPreferences={setSortingPreferences}
      />
      {isLoading && <Loader />}
      {!!products && products.length > 0 && (
        <ProductsView products={products} />
      )}
      {/* totalCount > 0 && <Pagination /> */}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
