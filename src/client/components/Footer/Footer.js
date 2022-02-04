import React from 'react';
import logo from '*../../../src/client/assets/images/logo.png';
import send from '*../../../src/client/assets/images/emailsend.png';
import './Footer.css';
import { Link } from 'react-router-dom';

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

          <ul className="right-part-footer">
            <li className="footer-list">
              <div className="footer-text">
                <p>Company</p>
                <Link to="/about-us">About us</Link>
                <br />
                <Link to="/contact-us">Contact us</Link>
              </div>
            </li>
            <li className="footer-list">
              <div className="footer-text">
                <Link to="/sign-up" style={{ textAlign: 'left' }}>
                  <p>
                    Create
                    <br />
                    Account
                  </p>
                </Link>
                <div className="footer-input">
                  <input type="text" placeholder="Your email" />
                  <a href="mailto:example@yourdomain.com">
                    <img src={send} alt="email" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </footer>
    </div>
  );
}
export default Footer;
