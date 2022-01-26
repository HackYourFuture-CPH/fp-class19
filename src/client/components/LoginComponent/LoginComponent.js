import React from 'react';
import './LoginComponent.styles.css';
import logo from '../../assets/images/logo.png';
import goog from '../../assets/images/goog.png';
import { Link } from 'react-router-dom';

export default function LoginComponent() {
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={logo} alt="logo" />
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
              <Link href="/reset-password">Forgot Password?</Link>
            </div>
            <button type="button" className="btn">
              Log In
            </button>
            <img src={goog} alt="google-signin" />
          </form>
        </div>
      </div>
    </div>
  );
}
