import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import menuItems from './menuItems';

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        {menuItems?.map((menuItem) => {
          const { name, to, className, style, activeStyle } = menuItem;
          return (
            <li className="menu-item">
              <NavLink
                to={to}
                className={' '}
                style={style}
                activeStyle={activeStyle}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
