import React from 'react';
import PropTypes from 'prop-types';
import './FavouriteList.styles.css';
import ProductImage from './ProductImage.component';
import ProductQuantity from './ProductQuantity.component';
import ProductCart from './ProductCart.component';

function FavouriteList({ productList }) {
  return (
    <>
      <h2>Favourites</h2>
      <ul className="container">
        {productList.map((product) => {
          return (
            <div>
              <li>
                <div className="product_container">
                  <ProductImage product={product} />

                  <ProductQuantity product={product} />

                  <ProductCart product={product} />
                </div>
              </li>

              <div className="line" />
            </div>
          );
        })}
      </ul>
    </>
  );
}

FavouriteList.propTypes = {
  productList: PropTypes.objectOf(PropTypes.object).isRequired,
};

export { FavouriteList };
