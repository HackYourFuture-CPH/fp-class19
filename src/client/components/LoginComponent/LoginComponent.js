import React from 'react';
import './LoginComponent.styles.css';
import LogoPic from '*../../../src/client/assets/images/logo1.png';
import Goog from '*../../../src/client/assets/images/goog.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function LoginComponent() {
  const [isShown, setIsShown] = React.useState(false);

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
            <div className="passDiv">
              <label className="label">Paasword</label>
              <br />
              <span className="eyeIcon" onClick={() => setIsShown(!isShown)}>
                {isShown ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
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
