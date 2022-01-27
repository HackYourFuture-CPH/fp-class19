import React from 'react';
import LogoPic from '*../../../src/client/assets/images/logo1.png';
import Goog from '*../../../src/client/assets/images/goog.png';
import './LoginComponent.styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

export default function LoginComponent() {
  const [isShown, setIsShown] = React.useState(false);
  const changeShown = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={LogoPic} alt="logo" />
        </div>
        <div className="body-form">
          <form>
            <h3 className="heading">Log in</h3>
            <div>
              <label className="label">Email</label>
              <br />
              <input type="email" className="form-control" />
            </div>
            <br />
            <div className="passDiv">
              <label className="label">Password</label>
              <br />
              <span className="eyeIcon">
                {isShown ? (
                  <FontAwesomeIcon icon={faEyeSlash} onClick={changeShown} />
                ) : (
                  <FontAwesomeIcon icon={faEye} onClick={changeShown} />
                )}
              </span>
              <input
                type={isShown ? 'text' : 'password'}
                className="form-control inputPass"
              />
            </div>

            <div>
              <Link to="/reset-password">Forgot Password?</Link>
            </div>
            <button type="button" className="btn">
              Log In
            </button>
            <Link to="/google-signin">
              <img src={Goog} alt="google-signin" className="googleLogin" />
            </Link>
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
