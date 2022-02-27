/* eslint-disable no-param-reassign */
import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';
import addedToCart from '../../assets/images/added_to_cart.png';

export default function Modal({
  modalIsOpen,
  massage,
  cornerCloseBtn,
  primaryBtnLabel,
  showConfirmIcon,
  btnFunction,

  secondaryBtnFunction,
  secondaryBtnLabel,
}) {
  return (
    <div className="modal-bg">
      <div className="modal">
        {cornerCloseBtn && (
          <button
            onClick={() => modalIsOpen(false)}
            type="button"
            className="closing-modal-button"
          >
            X
          </button>
        )}
        <p className="modal-text">{massage}</p>
        {showConfirmIcon && (
          <img
            className="add_to_cart_modal_icon"
            src={addedToCart}
            alt="add to cart approved"
            style={{ margin: '20px' }}
          />
        )}

        <Button
          primary={true}
          label={primaryBtnLabel}
          onClick={btnFunction}
          style={{ margin: '20px' }}
        />
        {secondaryBtnFunction && secondaryBtnLabel && (
          <Button
            label={secondaryBtnLabel}
            onClick={secondaryBtnFunction}
            style={{ margin: '20px' }}
          />
        )}
      </div>
    </div>
  );
}

// Modal.propTypes = {
//   modalIsOpen: PropTypes.func.isRequired,
//   massage: PropTypes.string.isRequired,
//   cornerCloseBtn: PropTypes.bool.isRequired,
//   btnLabel: PropTypes.string.isRequired,
//   secondBtn: PropTypes.bool,
//   showConfirmIcon: PropTypes.bool,
//   btnFunction: PropTypes.func.isRequired,
//   secondBtnFunction: PropTypes.func,
//   secondBtnLabel: PropTypes.string,
// };
Modal.propTypes = {
  modalIsOpen: PropTypes.func.isRequired,
  massage: PropTypes.string.isRequired,
  cornerCloseBtn: PropTypes.bool.isRequired,
  primaryBtnLabel: PropTypes.string.isRequired,
  showConfirmIcon: PropTypes.bool,
  btnFunction: PropTypes.func.isRequired,
  secondaryBtnFunction: PropTypes.func,
  secondaryBtnLabel: PropTypes.string,
};
Modal.defaultProps = {
  secondaryBtnLabel: false,
  showConfirmIcon: false,
  secondaryBtnFunction: () => console.log('pass second button function'),
};
