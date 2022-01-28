import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import menuItems from './menuItems';

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu-list">
        {menuItems?.map((menuItem) => {
          const { name, to, className, activeStyle } = menuItem;
          return (
            <li className="menu-list-item">
              <NavLink to={to} className={className} activeStyle={activeStyle}>
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
