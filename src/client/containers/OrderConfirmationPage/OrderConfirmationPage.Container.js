import React from 'react';
import './OrderConfirmationPage.Style.css';
import ButtonComponent from '../../components/Button/Button';

function OrderConfirmationPage() {
  return <div className="confirmation-page">
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
      <div className="btn">
        <ButtonComponent
          label="CONTINUE SHOPPING"
          primary={true}
          backgroundColor="#687808"
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </div>
<div className="btn">
        <ButtonComponent
          label="REVIEW ORDER"
          backgroundColor="#fff"
          onClick={() => {
            window.location.href = '/order';
          }}
        />
      </div>
    </div>;
}

export default OrderConfirmationPage;
