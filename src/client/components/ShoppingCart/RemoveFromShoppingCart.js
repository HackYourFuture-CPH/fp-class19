import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';

function RemoveFromShoppingCart(props) {
  const removeProductFromShoppingCart = () => {
    props.setShoppingCart((prev) =>
      prev.filter((item) => item.id !== props.product.id),
    );
    const result = props.shoppingCart.find(({ id }) => id === props.product.id);
    if (result !== undefined) {
      const index = props.shoppingCart.indexOf(result);
      if (index > -1) {
        props.shoppingCart.splice(index, 1);

        const totalPriceOfProducts = props.shoppingCart.reduce(
          (sum, item) => sum + item.quantity * item.price,
          0,
        );
        props.setTotalPrice(totalPriceOfProducts);

        const totalDiscountOfProducts = props.shoppingCart.reduce(
          (sum, item) =>
            sum +
            Math.round((item.discount * (item.quantity * item.price)) / 100),
          0,
        );
        props.setTotalDiscount(totalDiscountOfProducts);

        const totalAmountToBePayed =
          totalPriceOfProducts - totalDiscountOfProducts;
        props.setTotalPayment(totalAmountToBePayed);
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
            display: props.product.discount !== 0 ? 'inline-block' : 'none',
            textDecoration: 'line-through',
            color: 'black',
          }}
        >
          {props.product.currency} {props.product.price}
        </div>
        <div
          style={{
            display: props.product.discount === 0 ? 'inline-block' : 'none',
            color: 'black',
          }}
        >
          {props.product.currency} {props.product.price}
        </div>
        <div
          style={{
            display: props.product.discount !== 0 ? 'inline-block' : 'none',
            color: 'black',
          }}
        >
          <span className="currency-field">{props.product.currency}</span>

          {Math.round(props.product.price * (1 - props.product.discount / 100))}
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
  }).isRequired,
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,

  setTotalPrice: PropTypes.func.isRequired,

  setTotalDiscount: PropTypes.func.isRequired,

  setTotalPayment: PropTypes.func.isRequired,
};

export default RemoveFromShoppingCart;
