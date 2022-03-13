import React from 'react';
import './ProductsView.styles.css';
import Product from '../Product/Product.component';
import PropTypes from 'prop-types';

export default function ProductsView({ products,user }) {
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
                currency={product.currency}
                user={user}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ProductsView.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string,
      discount: PropTypes.number,
    }),
  ).isRequired,
  }
