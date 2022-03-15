import React, { useState } from 'react';
import LogoPic from '../../assets/images/logo.png';
import './Login.styles.css';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useFirebase } from '../../firebase/FirebaseContext';
import Loader from '../Loader/Loader.component';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Login() {
  const { isAuthenticated } = useAuthentication();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useFirebase();

  const [passwordVisible, makePasswordVisible] = React.useState(false);
  const changeShown = () => {
    makePasswordVisible(!passwordVisible);
  };

  const onLoginFormSubmit = async (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    const email = formData.get('email');
    const password = formData.get('password');

    setIsLoading(true);

    await signIn({ email, password });

    setIsLoading(false);
  };

  const handleLogin = async () => {
    /* history.push('/');
    await signInWithGoogle({auth,provider}); */
  };

  if (isAuthenticated) {
    return <Redirect />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="login-component">
      <div className="form-box">
        <div className="header-form">
          <img className="img" src={LogoPic} alt="logopic" />
        </div>
        <div className="body-form">
          <form onSubmit={onLoginFormSubmit}>
            <h3 className="heading">Log in</h3>
            <div>
              <label className="label">Email</label>
              <br />
              <input
                name="email"
                required
                type="email"
                className="form-control"
              />
            </div>
            <br />
            <div className="pass-div">
              <label className="label">Password</label>
              <br />
              <span className="eye-icon">
                {passwordVisible ? (
                  <FontAwesomeIcon icon={faEye} onClick={changeShown} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} onClick={changeShown} />
                )}
              </span>
              <input
                name="password"
                required
                type={passwordVisible ? 'text' : 'password'}
                className="form-control input-pass"
              />
            </div>
            <div>
              <Link to="/forgot-password" className="forgot-pw">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="btn">
              Log In
            </button>
            <br />

            {/* <div>
              <Link to="/google-signin">
                <button type="button" onClick={handleLogin} className="btn2">
                  <img
                    className="img2"
                    src="https://user-images.githubusercontent.com/81093589/153756548-dc0a4dea-edae-4836-8a4b-c0aece44111b.svg"
                    alt="googlepic"
                  />
                  Log In with Google
                </button>
              </Link>
            </div> */}

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
