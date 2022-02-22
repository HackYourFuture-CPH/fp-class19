import React, { useState } from 'react';
import './LandingPage.styles.css';
import { useProducts, PRODUCT_PER_PAGE } from '../../hooks/useProducts';
import Loader from '../../components/Loader/Loader.component';
import Sort from '../../components/Sort/Sort.component';
import Pagination from '../../components/Pagination/Pagination.component';
import SpecialOfferBanner from '../../components/SpecialOfferBanner/SpecialOfferBanner.component';
import ProductsView from '../../components/ProductsView/ProductsView.component';

export default function LandingPage() {
  const [sortingPreferences, setSortingPreferences] = useState({
    sortKey: 'name',
    sortOrder: 'asc',
  });
  const { isLoading, error, products, totalCount, loadMoreProducts } =
    useProducts(sortingPreferences);
  const [currentPage, setCurrentPage] = useState(1);

  const maxNumberOfPages = Math.ceil(totalCount / PRODUCT_PER_PAGE);

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / PRODUCT_PER_PAGE); i += 1) {
    pages.push(i);
  }

  const getCurrentProducts = (page) => {
    const indexOfLastProduct = page * PRODUCT_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCT_PER_PAGE;
    const currentProductsOnPage = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct,
    );
    return currentProductsOnPage;
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    return getCurrentProducts(pageNumber);
  };

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (products.length < totalCount) {
      loadMoreProducts();
    }
    return getCurrentProducts(currentPage + 1);
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    return getCurrentProducts(currentPage - 1);
  };

  return (
    <div>
      <SpecialOfferBanner />
      <Sort
        sortingPreferences={sortingPreferences}
        setSortingPreferences={setSortingPreferences}
        setCurrentPage={setCurrentPage}
      />
      {isLoading && <Loader />}
      {!!products && products.length > 0 && (
        <ProductsView products={getCurrentProducts(currentPage)} />
      )}
      {totalCount > 0 && (
        <Pagination
          currentPage={currentPage}
          pages={pages}
          maxNumberOfPages={maxNumberOfPages}
          productsPerPage={PRODUCT_PER_PAGE}
          onPrevButton={handlePrevBtn}
          onNextButton={handleNextButton}
          onHandlePagination={handlePagination}
        />
      )}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
