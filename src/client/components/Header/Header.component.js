import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.styles.css';
import faLogo from '../../assets/images/logo.png';
import faUser from '../../assets/images/user-login.png';
import faHeart from '../../assets/images/favorite-icon.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';

export default function Header({ isAuthenticated, username, link }) {
  return (
    <nav>
      {/* LOGO */}
      <Link to="/" className="logo-icon">
        <img src={faLogo} alt="logout" />
      </Link>
      {/* ICONS */}
      <div className="icons-right">
        <Link to="/shoppingcart"><button type='button' className='cart'><img className="icons" src={faShoppingCart} alt="shopping-cart" /></button></Link>
        <img className="icons" src={faHeart} alt="favorite" />
        <img className="icons" src={faUser} alt="login" />

        {isAuthenticated ? (
          <div className="login icons"> Hello {username}</div>
        ) : (
          <Link className="login icons" to={link}>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string,
  link: PropTypes.string,
};

Header.defaultProps = {
  username: 'username',
  link: '/log-in',
};
