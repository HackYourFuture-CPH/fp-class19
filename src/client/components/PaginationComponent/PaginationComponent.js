import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PaginationComponent.styles.css';
import ProductsView from '../ProductsView/ProductsView';

const PaginationComponent = ({ products, productsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumberLimit = 6;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i += 1) {
    pages.push(i);
  }
  const getCurrentProducts = (page) => {
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProductsOnPage = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct,
    );
    return currentProductsOnPage;
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    return getCurrentProducts(pageNumber);
  };
  const displayPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          type="button"
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? 'active' : null}
        >
          {number}
        </button>
      );
    }
    return null;
  });
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    return getCurrentProducts(currentPage + 1);
  };
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    return getCurrentProducts(currentPage - 1);
  };
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <button type="button" onClick={() => handleNextBtn()}>
        {' '}
        &hellip;
      </button>
    );
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <button type="button" onClick={() => handlePrevBtn()}>
        {' '}
        &hellip;
      </button>
    );
  }

  return (
    <>
      <ProductsView products={getCurrentProducts(currentPage)} />
      <section className="pagination">
        <button
          type="button"
          onClick={() => handlePrevBtn()}
          disabled={currentPage === 1}
          className="arrows"
        >
          &#9664;
        </button>
        {pageDecrementBtn}
        {displayPageNumbers}
        {pageIncrementBtn}
        <button
          type="button"
          onClick={() => handleNextBtn()}
          disabled={currentPage === pages.length}
          className="arrows"
        >
          &#9654;
        </button>
      </section>
    </>
  );
};

PaginationComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  productsPerPage: PropTypes.number,
};

PaginationComponent.defaultProps = {
  productsPerPage: 6,
};

export default PaginationComponent;
