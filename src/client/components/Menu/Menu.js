import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import menuItems from './menuItems';

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        {menuItems?.map((menuItem) => {
          return (
            <NavLink
              to={menuItem.to}
              className="menu-item"
              style={menuItem.style}
              activeStyle={menuItem.activeStyle}
            >
              {menuItem.name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
