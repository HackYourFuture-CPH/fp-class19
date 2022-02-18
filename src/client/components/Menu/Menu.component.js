import React from 'react';
import './Menu.styles.css';
import MenuItem from './MenuItem.component';

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu-list">
        <MenuItem name="Plants" link="/" />
        <MenuItem name="Special Offers" link="/special-offers" />
        <MenuItem name="About" link="/about-us" />
        <MenuItem name="Contact" link="/contact-us" />
      </ul>
    </div>
  );
}
