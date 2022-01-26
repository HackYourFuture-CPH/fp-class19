import React from 'react';
import './LoginComponent.styles.css';
import hyf from './../../assets/images/logo.png';

export default function LoginComponent() {
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={hyf} />
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <h3 className="heading">Log in</h3>
              <label className="label">Email</label>
              <br />
              <input type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <label className="label">Paasword</label>
              <br />
              <input type="text" className="form-control" />
            </div>
            <div>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="button" className="btn">
              Log In
            </button>
            <div className="message"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
