import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.styles.css';
import ShoppingCartImage from './ShoppingCartImage';
import ModifyProductQuantity from './ModifyProductQuantity';
import RemoveFromShoppingCart from './RemoveFromShoppingCart';

export default function ShoppingCart(props) {
  const { shoppingCart, setShoppingCart } = props;
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());
  const [totalDiscount, setTotalDiscount] = useState(getTotalDiscount());
  const [totalPayment, setTotalPayment] = useState(getTotalPayment());

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
      {/* first div */}
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
              <button type="button" className="proceed-payment">
                Proceed to payment
              </button>
            </div>
          </div>
          <div>
            <button type="button" className="continue-shop">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="user-detail">
        <div>My Details</div>
        <div>Name:</div>
        <div>Email:</div>
      </div>
      {/* third div */}
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
  // product: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* totalPrice: PropTypes.func.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  totalDiscount: PropTypes.func.isRequired,
  setTotalDiscount: PropTypes.func.isRequired,
  totalPayment: PropTypes.func.isRequired,
  setTotalPayment: PropTypes.func.isRequired, */
};
