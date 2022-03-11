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

  return (
    <nav>
      {/* LOGO */}
      <Link to="/" className="logo-icon">
        <img src={faLogo} alt="logout" />
      </Link>
      {/* ICONS */}
      <div className="icons-right">

        
        <Link to='favorites'><button style={{display: user? 'inline-block' : 'none'}}className='fav-button' type='button'><img className="icons" src={faHeart} alt="favorite" /></button></Link>

        <Link to="/shopping-cart"><button type='button' className='cart'><img className="icons" src={faShoppingCart} alt="shopping-cart" /></button></Link>
        

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



Header.defaultProps = {
  username: 'username',
  link: '/log-in',
};
