import React from 'react';
import Product from '../SpecialOffers/OfferProductModel.component';
import './OfferProductsList.styles.css';
import PropTypes from 'prop-types';

export default function OfferProducts({ products, addToCart }) {
  return (
    <div className="offer-products-container">
      <ul className="offer-products-list">
        {products.map((product) => (
          <li key={product.id} className="offer-product">
            <Product
              id={product.id}
              image={product.picture}
              name={product.name}
              price={product.price}
              discount={product.discount_percent}
              onClick={addToCart}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}



OfferProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      currency: PropTypes.string,
      onClick: PropTypes.func,
      discount:PropTypes.number
      
    }),
  ).isRequired,
  
};



