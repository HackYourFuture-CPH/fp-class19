import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';
import ShoppingCartImage from './ShoppingCartImage';
import ModifyProductQuantity from './ModifyProductQuantity';
import RemoveFromShoppingCart from './RemoveFromShoppingCart';

export default function ShoppingCart(props) {
  const { shoppingCart, setShoppingCart } = props;
  const [totalPrice, setTotalPrice] = useState(totalPriceOfProducts);
  // TODO :add functionality of changing price with quantity
  // const [totalDiscount,setTotalDiscount]=useState();
  // const [totalPayment,setTotalPayment]=useState();

  const totalPriceOfProducts = shoppingCart.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0,
  );
  console.log(totalPriceOfProducts);
  const totalDiscount = shoppingCart.reduce(
    (sum, product) =>
      sum +
      Math.round((product.discount * (product.quantity * product.price)) / 100),
    0,
  );
  const amountToBePayed = totalPriceOfProducts - totalDiscount;

  return (
    <div className="parent-div">
      1.
      <div className="detail-container">
        <div>
          <ul className="cart-container">
            {shoppingCart.map((product) => (
              <div>
                <li key={product.id} className="cart-list">
                  <div className="cart-product-container">
                    <ShoppingCartImage product={product} />
                    <ModifyProductQuantity
                      product={product}
                      shoppingCart={shoppingCart}
                      setShoppingCart={setShoppingCart}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
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
        <div className="right-div">
          <div className="cart-detail-container">
            <div>Cart Details</div>

            <div>
              Total:<span className="total-price">{totalPriceOfProducts}</span>{' '}
              DKK
            </div>

            <div>
              Discount:<span className="total-discount">{totalDiscount} </span>
              DKK
            </div>
            <div className="line"></div>
            <div>
              You Pay:<span className="total-payment">{amountToBePayed}</span>{' '}
              DKK
            </div>

            <div>
              <button className="proceed-payment">Proceed to payment</button>
            </div>
          </div>
          <div>
            <button className="continue-shop">Continue Shopping</button>
          </div>
        </div>
      </div>
      2.
      <div className="user-detail">
        <div>My Details</div>
        <div>Name:</div>
        <div>Email:</div>
      </div>
      3.
      <div className="delivery-info">
        <div>DELIVERY INFORMATION:</div>
        <div>Address:</div>
        <div>City:</div>
        <div>Country:</div>
        <div>Zipcode:</div>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setShoppingCart: PropTypes.func.isRequired,
};
