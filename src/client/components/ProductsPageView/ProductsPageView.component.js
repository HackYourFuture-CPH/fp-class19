import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination.component';
import Product from '../Product/Product.component';
import Sort from '../SortComponent/Sorting.component';
import PropTypes from 'prop-types';
import './ProductsPageView.styles.css';

export default function ProductsPageView({ products, productsPerPage }) {
  const [sortedProducts, setSortedProducts] = useState(products);

  

  const [currentRange, setCurrentRange] = useState(
    sortedProducts.slice(0, productsPerPage),
  );

  React.useEffect(() => {
    setCurrentRange(sortedProducts.slice(0, productsPerPage));
  }, [sortedProducts, productsPerPage]);

  return (
    <div className="products-page-view">
      <Sort
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
