import React from 'react';
import './LoginComponent.styles.css';
import logo from './../../assets/images/logo.png';
import goog from './../../assets/images/goog.png';

export default function LoginComponent() {
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={logo} />
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <h3 className="heading">Log in</h3>
            <label className="label">Email</label>
            <br />
            <input type="text" className="form-control" />

            <label className="label">Paasword</label>
            <br />
            <input type="text" className="form-control" />

            <div>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="button" className="btn">
              Log In
            </button>
            <div className="message"></div>

            <img src={goog} />
          </form>
        </div>
      </div>
    </div>
  );
}
