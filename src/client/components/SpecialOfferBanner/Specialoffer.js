import React from 'react';
import image1 from '*../../../src/client/assets/images/specialoffertopbanner.png';
import image2 from '*../../../src/client/assets/images/specialofferbanner.png';
import './Specialoffer.css';

function SpecialOfferBanner() {
  return (
    <div className="container">
      <div className="top-image">
        <img src={image1} alt="image1" />
      </div>
      <div className="offer-banner">
        <h4>SPECIAL OFFERS</h4>
        <div className="offer-banner1">
          <img src={image2} alt="image2" />
          <a href="/SpecialOfferPage">Get Upto 50% OFF</a>
        </div>
      </div>
    </div>
  );
}
export default SpecialOfferBanner;
