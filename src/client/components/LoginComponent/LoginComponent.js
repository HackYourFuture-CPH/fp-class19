import React from 'react';
import './LoginComponent.styles.css';
import hyf from './../../assets/images/hyf.png';

export default function LoginComponent() {
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <img src={hyf} />
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
              <label className="label">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <label className="label">Paasword</label>
              <input type="text" className="form-control" />
            </div>
            <button type="button" className="btn btn-secondary btn-block">
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
