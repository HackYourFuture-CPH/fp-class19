import './Header.styles.css';

import PropTypes from 'prop-types';
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

  return (
    <nav>
      {/* LOGO */}
      <Link to="/" className="logo-icon">
        <img src={faLogo} alt="logout" />
      </Link>
      {/* ICONS */}
      <div className="icons-right">
        <img className="icons" src={faShoppingCart} alt="shopping-cart" />
        <img className="icons" src={faHeart} alt="favorite" />
        <img className="icons" src={faUser} alt="login" />

        {isAuthenticated ? (
          <>
            <button onClick={() => signOut()} type="button">
              Logout
            </button>
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
};

Header.defaultProps = {
  username: 'username',
  link: '/log-in',
};
