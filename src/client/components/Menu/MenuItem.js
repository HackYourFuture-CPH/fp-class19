import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';

export default function MenuItem(name, link) {
  return (
    <li className="menu-list-item">
      <NavLink to={link} className="menu-list-item-link">
        {name}
      </NavLink>
    </li>
  );
}
