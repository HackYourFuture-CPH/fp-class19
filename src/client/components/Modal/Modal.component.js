/* eslint-disable no-param-reassign */
import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';
import addedToCart from '../../assets/images/added_to_cart.png';
export default function Modal({
  modalIsOpen,
  text,
  cornerClose,
  btnLabel,
  secondBtn,
  modalIcon,
  btnFunction,
  secondBtnFunction,
}) {
  return (
    <div className="modal-bg">
      <div className="modal">
        {cornerClose && (
          <button
            // eslint-disable-next-line no-return-assign
            onClick={() => modalIsOpen(false)}
            type="button"
            className="closing-modal-button"
          >
            X
          </button>
        )}
        <p className="modal-text">{text}</p>
        {modalIcon && (
          <img
            className="add_to_cart_modal_icon"
            src={addedToCart}
            alt="add to cart approved"
            style={{ margin: '20px' }}
          />
        )}

        <Button
          primary={true}
          label={btnLabel}
          onClick={btnFunction}
          style={{ margin: '20px' }}
        />
        {secondBtn && (
          <Button
            label="CONTINUE SHOPPING"
            onClick={secondBtnFunction}
            style={{ margin: '20px' }}
          />
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalIsOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  cornerClose: PropTypes.bool.isRequired,
  btnLabel: PropTypes.string.isRequired,
  secondBtn: PropTypes.bool,
  modalIcon: PropTypes.bool,
  btnFunction: PropTypes.func.isRequired,
  secondBtnFunction: PropTypes.func,
};
Modal.defaultProps = {
  secondBtn: false,
  modalIcon: false,
  secondBtnFunction: () => console.log('pass second button function'),
};
