import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-list-item">
          <NavLink to="/plants" className="menu-list-item-link">
            Plants
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/special-offers" className="menu-list-item-link">
            Special Offers
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/about-us" className="menu-list-item-link">
            About
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/contact" className="menu-list-item-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
