import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './CreateAccountForm.styles.css';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState();
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    if (password !== passwordConfirm || !password || !passwordConfirm) {
      setPasswordMatch(false);
    }
    if (password === passwordConfirm) {
      setPasswordMatch(true);
    }
  }, [password, passwordConfirm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      email,
      password,
      fullName,
      mobile,
      address,
      city,
      country,
      zipCode,
    };
    console.log(newUser);
  };

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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <div className="show-hide-password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <FontAwesomeIcon
              onClick={() => setPasswordVisible(!passwordVisible)}
              icon={passwordVisible ? faEye : faEyeSlash}
            />
          </div>
        </label>
        <label htmlFor="password">
          Confirm Password
          <div className="show-hide-password-container">
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              name="password"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
              required
            />
            <FontAwesomeIcon
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              icon={confirmPasswordVisible ? faEye : faEyeSlash}
            />
          </div>
          {(!passwordMatch && passwordConfirm) && <p style={{color:"red", fontSize: "12px"}}>Passowrd needs to match</p>}
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
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </label>
        <label htmlFor="phone">
          Mobile
          <input
            type="number"
            name="phone"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
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
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </label>
        <label htmlFor="city">
          City
          <input
            type="text"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
        </label>
        <label htmlFor="country">
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </label>
        <label htmlFor="zipcode">
          Zip-code
          <input
            type="text"
            name="zipcode"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            required
          />
        </label>
        <button
          className="create-account-button"
          type="submit"
          disabled={!passwordMatch}
        >
          Create account
        </button>
      </div>
    </form>
  );
}

