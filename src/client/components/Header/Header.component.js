/* eslint-disable react/no-unused-prop-types */
import './Header.styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import faHeart from '../../assets/images/favorite-icon.png';
import faLogo from '../../assets/images/logo.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';
import faUser from '../../assets/images/user-login.png';
import { useFirebase } from '../../firebase/FirebaseContext';

export default function Header({
  numberOfItemsInCart,
  numberOfItemsInFavorite,
  user,
  isAuthenticated,
}) {
  const { signOut } = useFirebase();

  return (
    <nav>
      {/* LOGO */}
      <Link to="/" className="logo-icon">
        <img src={faLogo} alt="logout" />
      </Link>
      {/* ICONS */}
      <div className="icons-right">
        <Link to="/shopping-cart" style={{ margin: '1rem' }}>
          <button className="icons cart" type="button">
            <div style={{ position: 'relative' }}>
              <img src={faShoppingCart} alt="shopping-cart" />
              {numberOfItemsInCart >= 1 ? (
                <span className="cart-item-number">{numberOfItemsInCart}</span>
              ) : null}
            </div>
          </button>
        </Link>
        <Link to="/favorites" style={{ margin: '1rem' }}>
          <button className="icons cart" type="button">
        <div
          className="icons"
          style={{
            position: 'relative',
            display: user ? 'inline-block' : 'none',
            margin: '1rem',
          }}
        >
          <img src={faHeart} alt="favorite" />
          {numberOfItemsInFavorite >= 1 ? (
            <span className="favorite-item-number">
              {numberOfItemsInFavorite}
            </span>
          ) : null}
        </div>
        </button>
        </Link>

        <img
          className="icons"
          style={{ margin: '2rem' }}
          src={faUser}
          alt="login"
        />

        {isAuthenticated ? (
          <>
            <Link to="/log-in">
              <button onClick={() => signOut()} type="button">
                Logout
              </button>
            </Link>
            <div className="login icons"> Hello {user.email}</div>
          </>
        ) : (
          <Link className="login icons" to="/log-in">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.shape({}),
  numberOfItemsInCart: PropTypes.number.isRequired,
  numberOfItemsInFavorite: PropTypes.number.isRequired,
};

Header.defaultProps = {
  isAuthenticated: false,
  user: null,
};
