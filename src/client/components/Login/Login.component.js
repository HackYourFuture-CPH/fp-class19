import React from 'react';
import Goog from '../../assets/images/goog.png';
import LogoPic from '../../assets/images/logo.png';
import './Login.styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [isShown, setIsShown] = React.useState(false);
  const changeShown = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="login-component">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={LogoPic} alt="logopic" />
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
            <div className="pass-div">
              <label className="label">Password</label>
              <br />
              <span className="eye-icon">
                {isShown ? (
                  <FontAwesomeIcon icon={faEye} onClick={changeShown} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} onClick={changeShown} />
                )}
              </span>
              <input
                type={isShown ? 'text' : 'password'}
                className="form-control input-pass"
              />
            </div>
            <div>
              <Link to="/forgot-password" className="forgot-pw">
                Forgot Password?
              </Link>
            </div>
            <button type="button" className="btn">
              Log In
            </button>
            <br />
            <div>
              <Link to="/google-signin">
                <img src={Goog} alt="google-signin" className="google-login" />
              </Link>
            </div>

            <div>
              <p>
                <span>Don&apos;t have an account? </span>
                <Link className="create-act" to="/sign-up">
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
