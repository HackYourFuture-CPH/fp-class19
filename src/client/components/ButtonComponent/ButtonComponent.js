import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.styles.css';

export default function ButtonComponent({
  title,
  backgroundColor,
  onClick,
  size = 'md',
  color,
  border,
  width,
}) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border,
    color,
    width,
  };
  return (
    <button type="button" onClick={onClick} style={style} className="button">
      {title}
    </button>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  width: PropTypes.string,
};

ButtonComponent.defaultProps = {
  onClick: () => {
    return 'clicked';
  },
  backgroundColor: '#687808',
  size: 'md',
  color: 'white',
  border: 'none',
  width: '600px',
};