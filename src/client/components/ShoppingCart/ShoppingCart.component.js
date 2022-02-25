import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';
import ShoppingCartImage from './ShoppingCartImage';
import ModifyProductQuantity from './ModifyProductQuantity';
import RemoveFromShoppingCart from './RemoveFromShoppingCart';

export default function ShoppingCart(props) {
  const { shoppingCart, setShoppingCart } = props;

  return (
    <div>
      <ul className="container">
        {shoppingCart.map((product) => (
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
        ))}
      </ul>
    </div>
  );
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setShoppingCart:PropTypes.arrayOf(PropTypes.object).isRequired,
};
