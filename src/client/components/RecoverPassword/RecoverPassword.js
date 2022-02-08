import React from 'react';
import LogoPic from '../../assets/images/logo.png';
import './RecoverPassword.styles.css';
import { Link } from 'react-router-dom';

export default function RecoverPasswordComponent() {
  const [isShown, setIsShown] = React.useState(false);
  const changeShown = () => {
    setIsShown(!isShown);
  };
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
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
}
