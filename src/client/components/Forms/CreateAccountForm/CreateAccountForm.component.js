import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './CreateAccountForm.styles.css';

export default function CreateAccount({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email,
      password,
      passwordConfirm,
      fullName,
      phoneNumber,
      address,
      city,
      country,
      zipCode,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="create-account-container">
          <h1>Create Account</h1>
          <h2>Log in details</h2>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <div className="show-hide-password-container">
              <input
                type={passwordShown ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                onClick={() => setPasswordShown(!passwordShown)}
                icon={passwordShown ? faEye : faEyeSlash}
              />
            </div>
          </label>
          <label htmlFor="password">
            Confirm Password
            <div className="show-hide-password-container">
              <input
                type={confirmPasswordShown ? 'text' : 'password'}
                name="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
              <FontAwesomeIcon
                onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                icon={confirmPasswordShown ? faEye : faEyeSlash}
              />
            </div>
          </label>
        </div>
        <div className="create-account-container">
          <h2>Contact details</h2>
          <label htmlFor="fullName">
            Full name
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone">
            Mobile
            <input
              type="tel"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <h2>Delivery info</h2>
          <label htmlFor="address">
            Address
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label htmlFor="city">
            City
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label htmlFor="country">
            Country
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>
          <label htmlFor="zipcode">
            Zip-code
            <input
              type="text"
              pattern="\d*/"
              title="Only numbers allowed"
              name="zipcode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </label>
          <button className="create-account-button" type="submit">
            Create account
          </button>
        </div>
      </form>
    </>
  );
}

CreateAccount.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
