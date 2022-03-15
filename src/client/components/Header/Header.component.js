/* eslint-disable react/no-unused-prop-types */
import './Header.styles.css';
import React, { useState, useEffect } from 'react';
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
  const [userName, setUserName] = useState('');
  const [logOut, setLogOut] = useState();

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    fetch(`/api/users/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data[0]) {
          throw new Error('Could not check if user present in Database:', 404);
        }
        setUserName(data[0].full_name);
      })
      .catch((error) => {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error('Unexpected error', 500);
      });
  }, [user]);

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
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="/user-profile" style={{ textDecoration: 'none' }}>
              <img
                className="icons"
                style={{ margin: '2rem' }}
                src={faUser}
                alt="login"
              />
            </Link>
            <Link to="/login">
              <button
                onClick={() => signOut()}
                onMouseEnter={() => setLogOut(true)}
                onMouseLeave={() => setLogOut(false)}
                type="button"
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {userName ? (
                  <>
                    <div className={!logOut ? 'displayActive' : 'displayHidden'}> Hello {userName}</div>
                    <div
                      className={
                        logOut ? 'displayActive' : 'displayHidden'
                      }
                    >
                      Log out ? {userName}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="login icons"> Hello {user.email}</div>
                    <div
                      className={
                        logOut ? 'displayActive' : 'displayHidden'
                      }
                    >
                      Log out {user.email}
                    </div>
                  </>
                )}
              </button>
            </Link>
          </>
        ) : (
          <>
            <img
              className="icons"
              style={{ margin: '2rem' }}
              src={faUser}
              alt="login"
            />
            <Link className="login icons" to="/login">
              Log In
            </Link>
          </>
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
