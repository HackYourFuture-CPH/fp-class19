import React from 'react';
import './OrderConfirmationPage.styles.css';

export default function OrderConfirmationPage() {
  return <div className="confirmation-page">
    <div className="page-content">
      <div className="thank-you-box">
        <div className="box-content">
          <h3>
            THANK YOU FOR YOUR ORDER
          </h3>
          <p>
            We have sent a receipt to your email
          </p>
        </div>
      </div>
      <div className="follow-up-actions-box">
      <div>
      <button type='button' onClick={() => {
            window.location.href = '/';
          }} className="continue-shopping-button">CONTINUE SHOPPING</button>
      

<button type='button' onClick={() => {
            window.location.href = '/';
          }} className="review-order-button">REVIEW ORDER</button>
      </div>
      </div>
    </div>
    </div>
}
