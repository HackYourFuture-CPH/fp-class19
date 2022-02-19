import React from 'react';
import LogoPic from '../../assets/images/logo.png';
import './RecoverPassword.styles.css';

export default function RecoverPasswordComponent() {
  return (
    <div className="recover-password-component">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={LogoPic} alt="logopic" />
        </div>
        <div className="body-form">
          <form>
            <h3 className="heading">Recover Password</h3>
            <div>
              <label className="label">Email</label>
              <br />
              <input type="email" className="form-control" />
            </div>
            <button type="button" className="btn">
              Send Password
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
