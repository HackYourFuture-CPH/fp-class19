import React, { useState, useCallback, useEffect } from 'react';
import {Link} from 'react-router-dom';
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
  const [userDetail, setUserDetail] = useState([]);

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

  //  to fetch user details
  const GetUserDetails = useCallback(() => {
    const apiUrl = '/api/users/10';
    // TODO : integrate with userId when user logs in

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setUserDetail(result);
        
      });
  }, []);

  useEffect(() => {
    GetUserDetails();
  }, [GetUserDetails]);

  return (
    <div className="parent-div">
      
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

      {userDetail.map((user) => (
        <>
          <div className="user-detail">
            <div><h3>My Details</h3></div>
            <div>Name:{user.full_name}</div>
            <div>Email:{user.email}</div>
          </div>

          <div className="delivery-info">
            <div className='edit-details'>
              <div><h3>DELIVERY INFORMATION:</h3></div>
              <div><span className='edit-field'></span><Link>Edit</Link></div>
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
        </>
      ))}
    </div>
  );
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setShoppingCart: PropTypes.func.isRequired,
  
};
