import React from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from './menuItems';

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        {/*         {menuItems.map((menuItem) => {
          return (
            <li>
              <NavLink to={menuItem.to} className={menuItem.className} activeStyle={menuItem.activeStyle}>{menuItem.name}</NavLink>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}
