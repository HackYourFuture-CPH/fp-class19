import React, { useState } from 'react';

import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';
import ShoppingCartImage from './ShoppingCartImage';
import ModifyProductQuantity from './ModifyProductQuantity';
import RemoveFromShoppingCart from './RemoveFromShoppingCart';
import Paypal from '../Paypal/Paypal.component';

export default function ShoppingCart(props) {
  const { shoppingCart, setShoppingCart, userDetail } = props;
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());
  const [totalDiscount, setTotalDiscount] = useState(getTotalDiscount());
  const [totalPayment, setTotalPayment] = useState(getTotalPayment());
  const [checkout, setCheckout] = useState(false);

  function getTotalPrice() {
    const totalPriceOfProducts = shoppingCart.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    );
    return totalPriceOfProducts;
  }
  function getTotalDiscount() {
    const totalDiscountOfProducts = shoppingCart.reduce(
      (sum, item) =>
        sum + Math.round((item.discount * (item.quantity * item.price)) / 100),
      0,
    );
    return totalDiscountOfProducts;
  }
  function getTotalPayment() {
    const totalAmountToBePayed = totalPrice - totalDiscount;
    return totalAmountToBePayed;
  }

  return (
    <div className="parent-div">
      <div className="detail-container">
        <div>
          <ul className="cart-container">
            {shoppingCart.map((product) => (
              <div key={product.id}>
                <li className="cart-list">
                  <div className="cart-product-container">
                    <ShoppingCartImage product={product} />
                    <ModifyProductQuantity
                      product={product}
                      shoppingCart={shoppingCart}
                      setShoppingCart={setShoppingCart}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                      totalDiscount={totalDiscount}
                      setTotalDiscount={setTotalDiscount}
                      totalPayment={totalPayment}
                      setTotalPayment={setTotalPayment}
                    />
                    <RemoveFromShoppingCart
                      product={product}
                      shoppingCart={shoppingCart}
                      setShoppingCart={setShoppingCart}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                      totalDiscount={totalDiscount}
                      setTotalDiscount={setTotalDiscount}
                      totalPayment={totalPayment}
                      setTotalPayment={setTotalPayment}
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
              Total:<span className="total-price">{totalPrice}</span> DKK
            </div>

            <div>
              Discount:<span className="total-discount">{totalDiscount} </span>
              DKK
            </div>
            <div className="line" />
            <div>
              You Pay:<span className="total-payment">{totalPayment}</span> DKK
            </div>

            <div>
              {checkout ? (
                <Paypal />
              ) : (
                <button
                  type="button"
                  className="proceed-payment"
                  onClick={() => setCheckout(true)}
                >
                  Proceed to payment
                </button>
              )}
            </div>
          </div>
          <div>
            <button type="button" className="continue-shop">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      {userDetail.map((user) => (
        <React.Fragment key={user.uid}>
          <div className="user-detail">
            <div>
              <h3>My Details</h3>
            </div>
            <div>Name:{user.full_name}</div>
            <div>Email:{user.email}</div>
          </div>

          <div className="delivery-info">
            <div className="edit-details">
              <div>
                <h3>DELIVERY INFORMATION:</h3>
              </div>
            </div>
            <div>
              Address:<span className="user-field">{user.address}</span>
            </div>
            <div>
              City:<span className="user-field">{user.city}</span>
            </div>
            <div>
              Country:<span className="user-field">{user.country}</span>
            </div>
            <div>
              Zipcode:<span className="user-field">{user.zipcode}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setShoppingCart: PropTypes.func.isRequired,
  userDetail: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      email: PropTypes.string,
      full_name: PropTypes.string,
      mobile: PropTypes.string,
      uid: PropTypes.string,
      zipcode: PropTypes.string,
    }),
  ).isRequired,
};
