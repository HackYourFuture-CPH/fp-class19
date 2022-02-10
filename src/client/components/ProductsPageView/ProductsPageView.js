import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import Product from '../Product/Product';
import SortComponent from '../Sort/Sort';
import PropTypes from 'prop-types';
import './ProductsPageView.styles.css';
function ProductsPageView({ products, productsPerPage }) {
  const [sortedProducts, setSortedProducts] = useState(products);

  const addFavorites = () => {
    console.log('added to favorites');
  };
  const addToCart = () => {
    console.log('added to cart');
  };

  const [currentRange, setCurrentRange] = useState(
    sortedProducts.slice(0, productsPerPage),
  );

  React.useEffect(() => {
    setCurrentRange(sortedProducts.slice(0, productsPerPage));
  }, [sortedProducts, productsPerPage]);

  return (
    <div className="products-page-view">
      <SortComponent
        products={products}
        setSortedProducts={setSortedProducts}
        className="sorting-div"
      />

      <div>
        <ul className="product-list">
          {currentRange.map((product) => (
            <li key={product.id} className="product-item">
              <Product
                image={product.picture}
                name={product.name}
                price={product.price}
                onClick={addToCart}
                addToFavorites={addFavorites}
              />
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        onPageChange={(range) => setCurrentRange(range)}
        productsPerPage={productsPerPage}
        products={sortedProducts}
      />
    </div>
  );
}
ProductsPageView.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      created_at: PropTypes.string,
    }),
  ).isRequired,
  productsPerPage: PropTypes.number.isRequired,
};

export { ProductsPageView };
