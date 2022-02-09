import React from 'react';
import './LandingPage.Style.css';
import { useProducts } from '../../hooks/useProducts';
import ProductsComponent from '../../components/ProductsComponent/ProductsComponent';
import Loader from '../../components/Loader/Loader.component';
import { Header } from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import SpecialOfferBanner from '../../components/SpecialOfferBanner/Specialoffer';
import Footer from '../../components/Footer/Footer';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';

function LandingPage() {
  const { products, isLoading, error } = useProducts();

  return (
    <div>
      <Header />
      <Menu />
      <SpecialOfferBanner />
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <div style={{ marginBottom: '22px' }}>
          <ProductsComponent products={products} />{' '}
          <PaginationComponent products={products} productsPerPage={6} />
        </div>
      )}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
      <Footer />
    </div>
  );
}

export default LandingPage;
