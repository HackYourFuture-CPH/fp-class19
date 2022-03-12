import './Header.styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

import faHeart from '../../assets/images/favorite-icon.png';
import faLogo from '../../assets/images/logo.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';
import faUser from '../../assets/images/user-login.png';
import { useFirebase } from '../../firebase/FirebaseContext';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Header() {
  const { isAuthenticated, user } = useAuthentication();
  const { signOut } = useFirebase();

export default function Header({
  isAuthenticated,
  username,
  link,
  numberOfItemsInCart,
  numberOfItemsInFavorite,
}) {
  return (
    <nav>
      {/* LOGO */}
      <Link to="/" className="logo-icon">
        <img src={faLogo} alt="logout" />
      </Link>
      {/* ICONS */}
      <div className="icons-right">
        <Link to="/shopping-cart">
          <button className="icons cart" type="button">
            <div style={{ position: 'relative' }}>
              <img src={faShoppingCart} alt="shopping-cart" />
              {numberOfItemsInCart >= 1 ? (
                <span className="cart-item-number">{numberOfItemsInCart}</span>
              ) : null}
            </div>
          </button>
        </Link>
        <div className="icons" style={{ position: 'relative' }}>
          <img src={faHeart} alt="favorite" />
          {numberOfItemsInFavorite >= 1 ? (
            <span className="favorite-item-number">{numberOfItemsInFavorite}</span>
          ) : null}
        </div>

        <img className="icons" src={faUser} alt="login" />

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
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string,
  link: PropTypes.string,
  numberOfItemsInCart: PropTypes.number.isRequired,
  numberOfItemsInFavorite: PropTypes.number.isRequired,
};

Header.defaultProps = {
  username: 'username',
  link: '/log-in',
}