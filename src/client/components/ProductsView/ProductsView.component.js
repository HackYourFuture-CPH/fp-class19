import React from 'react';
import './ProductsView.styles.css';
import Product from '../Product/Product.component';
import PropTypes from 'prop-types';

export default function ProductsView({ products }) {
  const addFavorites = () => {
    console.log('added to favorites');
  };
  const addToCart = () => {
    console.log('added to cart');
  };
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
                onClick={addToCart}
                addToFavorites={addFavorites}
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
  onClick: PropTypes.func,
  addToFavorites: PropTypes.func,
  discount:PropTypes.number.isRequired
};

