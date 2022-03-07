import React from 'react';
import './ProductsView.styles.css';
import Product from '../Product/Product.component';
import PropTypes from 'prop-types';

export default function ProductsView({ products }) {
  return (
    <div className="products-view">
      <div>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <Product
                id={product.id}
                image={product.picture}
                name={product.name}
                price={product.price}
                discount={product.discount_percent}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  discount: PropTypes.number.isRequired,
};
