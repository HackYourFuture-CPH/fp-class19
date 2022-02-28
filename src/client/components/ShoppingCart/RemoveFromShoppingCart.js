import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';

function RemoveFromShoppingCart(props) {
  const { product, shoppingCart, setShoppingCart } = props;

  const removeProductFromShoppingCart = () => {
    //  console.log('in remove cart');
    setShoppingCart((prev) => prev.filter((item) => item.id !== product.id));
    const result = shoppingCart.find(({ id }) => id === product.id);
    if (result === undefined) {
      // console.log('product does not exist in cart');
    } else {
      // console.log('remove product from the cart');
      const index = shoppingCart.indexOf(result);
      if (index > -1) {
        shoppingCart.splice(index, 1);
        // console.log(shoppingCart);
      }
    }
  };

  return (
    <div className="add_cart_button">
      <div>
        <button
          className="close-button"
          onClick={removeProductFromShoppingCart}
          type="button"
        >
          X
        </button>
      </div>
      <div className="discounted_price">
        <div
          style={{
            display: product.discount !== 0 ? 'inline-block' : 'none',
            'text-decoration': 'line-through',
            color: 'black',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount === 0 ? 'inline-block' : 'none',
            color: 'black',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount !== 0 ? 'inline-block' : 'none',
            color: 'black',
          }}
        >
          &nbsp;&nbsp;{product.currency}{' '}
          {Math.round(product.price * (1 - product.discount / 100))}
        </div>
      </div>
    </div>
  );
}

RemoveFromShoppingCart.propTypes = {
  product: PropTypes.shape({
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

RemoveFromShoppingCart.defaultProps = {
  product: null,
};

export default RemoveFromShoppingCart;
