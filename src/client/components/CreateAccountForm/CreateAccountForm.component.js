import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './CreateAccountForm.styles.css';

export default function CreateAccount() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    
    fetch('/api/users', {
      method: 'POST',
      body: {
        full_name: formData.get('full_name'),
        email: formData.get('email'),
        mobile: Number(formData.get('mobile')),
        address: formData.get('address'),
        zipcode: Number(formData.get('zipcode')),
        city: formData.get('city'),
        country: formData.get('country')
      },
    });
    console.log({
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      mobile: Number(formData.get('mobile')),
      address: formData.get('address'),
      zipcode: Number(formData.get('zipcode')),
      city: formData.get('city'),
      country: formData.get('country')
    });
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-account-container">
        <h1>Create Account</h1>
        <h2>Log in details</h2>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            // value={email}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <div className="show-hide-password-container">
            <input
              type={passwordShown ? 'text' : 'password'}
              // name="password"
              // value={password}
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
              // name="passwordConfirm"
              // value={passwordConfirm}
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
            name="full_name"
            // value={full_name}
            required
          />
        </label>
        <label htmlFor="mobile">
          Mobile
          <input
            type="tel"
            name="mobile"
            // value={phoneNumber}
            required
          />
        </label>
        <h2>Delivery info</h2>
        <label htmlFor="address">
          Address
          <input
            type="text"
            name="address"
            // value={address}
            required
          />
        </label>
        <label htmlFor="city">
          City
          <input
            type="text"
            name="city"
            // value={city}
            required
          />
        </label>
        <label htmlFor="country">
          Country
          <input
            type="text"
            name="country"
            // value={country}
            required
          />
        </label>
        <label htmlFor="zipcode">
          Zip-code
          <input
            type="text"
            // pattern="\d*/"
            title="Only numbers allowed"
            name="zipcode"
            // value={zipCode}
            required
          />
        </label>
        <button className="create-account-button" type="submit">
          Create account
        </button>
      </div>
    </form>
  );
}

// CreateAccount.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
