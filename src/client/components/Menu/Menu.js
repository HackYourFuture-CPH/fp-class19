import React from 'react';
import './menu.css';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu-list">
        <MenuItem name="Plants" link="/plants" />
        <MenuItem name="Special Offers" link="special-offers" />
        <MenuItem name="About" link="/about-us" />
        <MenuItem name="Contact" link="/contact" />
      </ul>
    </div>
  );
}
