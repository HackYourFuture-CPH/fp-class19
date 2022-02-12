import React, { useState } from 'react';
import './LandingPage.Style.css';
import { useProducts } from '../../hooks/useProducts';
import Loader from '../../components/Loader/Loader.component';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import SpecialOfferBanner from '../../components/SpecialOfferBanner/Specialoffer';
import Footer from '../../components/Footer/Footer';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import SortComponent from '../../components/SortComponent/SortComponent';

function LandingPage() {
  const { products, isLoading, error } = useProducts();
  const [sortedProducts, setSortedProducts] = useState(products);

  return (
    <div className="landingPageContaier">
      <Header />
      <Menu />
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
      <Footer />
    </div>
  );
}

export default LandingPage;
