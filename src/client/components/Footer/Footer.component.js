import React from 'react';
import logo from '../../assets/images/logo.png';
import send from '../../assets/images/emailsend.png';
import './Footer.styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer>
        <ul>
          <li className="footer-list">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </li>

          <ul className="right-part-footer">
            <li className="footer-list">
              <div className="footer-text">
                <p style={{ color: 'white' }}>Company</p>
                <Link to="/about-us">About us</Link>
                <br />
                <Link to="/contact-us">Contact us</Link>
              </div>
            </li>
            <li className="footer-list">
              <div className="footer-text">
                <Link to="/log-in" style={{ textAlign: 'left' }}>
                  <p>
                    Create
                    <br />
                    Account
                  </p>
                </Link>
                <div className="footer-input">
                  <input name="email" type="email" placeholder="Your email" />
                  <img src={send} alt="email" />
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </footer>
    </div>
  );
}
