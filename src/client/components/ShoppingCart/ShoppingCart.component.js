import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';
import ShoppingCartImage from './ShoppingCartImage';
import ModifyProductQuantity from './ModifyProductQuantity';
import RemoveFromShoppingCart from './RemoveFromShoppingCart';

const ShoppingCart = (props) => {
  const { shoppingCart, setShoppingCart } = props;

  return (
    <>
      <ul className="container">
        {shoppingCart.map((product) => {
          return (
            <div>
              <li key={product.id}>
                <div className="product_container">
                  <ShoppingCartImage product={product} />
                  <ModifyProductQuantity
                    product={product}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                  />
                  <RemoveFromShoppingCart
                    product={product}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                  />
                </div>
              </li>

              <div className="line" />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
