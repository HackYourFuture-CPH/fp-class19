import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

export default function MenuItem({ name, link }) {
  return (
    <li className="menu-list-item">
      <NavLink to={link} className="menu-list-item-link">
        {name}
      </NavLink>
    </li>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
