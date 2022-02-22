import React, { useState } from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import Button from '../../../components/Button/Button.component';
import addedToCart from '../../../assets/images/shopping-cart.png';

export default function Modal({
  text,
  cornerClose,
  btnLabel,
  secondBtn,
  modalIcon,
  btnFunction,
  secondBtnFunction,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openAndCloseModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {!isOpen && (
        <button type="button" onClick={openAndCloseModal} label="open modal">
          open modal
        </button>
      )}
      {isOpen && (
        <div className="modal-bg">
          <div className="modal">
            {cornerClose && (
              <button
                onClick={openAndCloseModal}
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
      )}
    </div>
  );
}

Modal.propTypes = {
  // show: PropTypes.bool.isRequired,
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
