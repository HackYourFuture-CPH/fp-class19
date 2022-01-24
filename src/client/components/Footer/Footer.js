import React from 'react';
import logo from '*../../../src/client/assets/images/logo.png';
import send from '*../../../src/client/assets/images/emailsend.png';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <ul>
          <li className="footer-list">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </li>
          <li className="footer-list">
            <div className="footer-text">
              <h4>COMPANY</h4>
              <a href="/About">About us</a>
              <br />
              <a href="/Contact">Contact us</a>
            </div>
          </li>
          <li className="footer-list">
            <div className="footer-text">
              <a href="/sign-up">
                <h4>CREATE ACCOUNT</h4>
              </a>
              <div className="footer-input">
                <input type="text" placeholder="Your email" />
                <img src={send} alt="email" />
              </div>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
