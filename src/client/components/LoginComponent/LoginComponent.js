import React from 'react';
import './LoginComponent.styles.css';
import LogoPic from '../../assets/images/logo.png';
import Goog from '../../assets/images/goog.png';
import { Link } from 'react-router-dom';

export default function LoginComponent() {
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={LogoPic} alt="logo" />
        </div>
        <div className="body-form">
          <form>
            <h3 className="heading">Log in</h3>
            <label className="label">Email</label>
            <br />
            <input type="email" className="form-control" />

            <label className="label">Paasword</label>
            <br />
            <input type="password" className="form-control" />

            <div>
              <Link to="/reset-password">Forgot Password?</Link>
            </div>
            <button type="button" className="btn">
              Log In
            </button>
            <img src={Goog} alt="google-signin" className="googleLogin" />
            <div>
              <p>
                Don&apos;t have an account?
                <Link className="createAct" to="/sign-up">
                  Create one here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
