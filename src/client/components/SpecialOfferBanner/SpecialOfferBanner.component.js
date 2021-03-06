import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/specialoffertopbanner.png';
import './SpecialOfferBanner.styles.css';

function SpecialOfferBanner() {
  return (
    <div className="container">
      <div className="top-image">
        <img src={image1} alt="image1" />
      </div>
      <div className="offer-banner">
        <h4>SPECIAL OFFERS</h4>
        <div className="offer-banner1">
          <div className="special-offer-link-container">
            <Link to="/special-offers">Get Upto 50% OFF</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpecialOfferBanner;
