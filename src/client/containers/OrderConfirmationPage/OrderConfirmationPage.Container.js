import React from 'react';
import './OrderConfirmationPage.styles.css';

export default function OrderConfirmationPage() {
  return <div className="confirmation-page">
    <div className="inner-div">
      <div className="wrapper">
        <div className="wrapper-content">
          <h3>
            THANK YOU FOR YOUR ORDER
          </h3>
          <p>
            We have sent a receipt to the email
          </p>
        </div>
      </div>
      <div className="wrapper2">
      <div className="wrapper-content2">
      <button onClick={() => {
            window.location.href = '/';
          }} className="btn">CONTINUE SHOPPING</button>
      

<button onClick={() => {
            window.location.href = '/';
          }} className="btn2">REVIEW ORDER</button>
      </div>
      </div>
    </div>
    </div>
}
