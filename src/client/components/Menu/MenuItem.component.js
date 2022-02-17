import React from 'react';
import PropTypes from 'prop-types';
import './Menu.styles.css';
import { NavLink } from 'react-router-dom';

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
