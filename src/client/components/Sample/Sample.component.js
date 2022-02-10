import React from 'react';
import PropTypes from 'prop-types';
import './Sample.styles.css';

function Sample({ title, onClick, children }) {
  return (
    <div className="sample-component">
      <h2>{title}</h2>
      <p>(this is a sample component)</p>
      {children}
      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

Sample.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Sample.defaultProps = {
  onClick: null,
  children: null,
};

export { Sample };
