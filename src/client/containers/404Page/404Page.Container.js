import React from 'react';
import './404Page.styles.css';
import page404 from './../../assets/images/404.png';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="page404">
      <br />
      <img src={page404} alt="404" />
      <br />
      <br />
      <div>Oops! The page you are looking for does not exist</div>
      <br />
      <Link to="/" className="link">
        <button type="button" className="btn">
          RETURN TO STORE
        </button>
      </Link>
      <br />
    </div>
  );
}

export default Page404;
