/* eslint-disable no-param-reassign */
import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';

export default function Modal({
  modalIsOpen,
  message,
  cornerCloseButton,
  primaryButtonLabel,
  showIcon,
  buttonFunction,
  secondaryButtonFunction,
  secondaryButtonLabel,
}) {
  return (
    <div className="modal-background">
      <div className="modal-box">
        {cornerCloseButton && (
          <button
            onClick={() => modalIsOpen(false)}
            type="button"
            className="closing-modal-button"
          >
            X
          </button>
        )}
        <p className="modal-text">{message}</p>
        {showIcon.length > 0 && (
          <div>
            <img
              src={showIcon}
              alt="add to cart approved"
              style={{
                marginBottom: '25px',
                marginTop: '25px',
                width: '2.5rem',
              }}
            />
          </div>
        )}
        <div className="button-container">
          <Button
            primary={true}
            label={primaryButtonLabel}
            onClick={buttonFunction}
            style={{
              marginBottom: '40px',
              marginTop: '30px',
              width: 'fit-content',
              borderRadius: '4px',
            }}
          />
          {secondaryButtonFunction && secondaryButtonLabel && (
            <Button
              label={secondaryButtonLabel}
              onClick={secondaryButtonFunction}
              style={{
                flexGrow: '2',
                paddingLeft: '70px',
                paddingRight: '70px',
                borderRadius: '4px',
                marginBottom: '40px',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalIsOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  cornerCloseButton: PropTypes.bool.isRequired,
  primaryButtonLabel: PropTypes.string.isRequired,
  showIcon: PropTypes.string,
  buttonFunction: PropTypes.func.isRequired,
  secondaryButtonFunction: PropTypes.func,
  secondaryButtonLabel: PropTypes.string,
};
Modal.defaultProps = {
  secondaryButtonLabel: false,
  showIcon: '',
  secondaryButtonFunction: () => console.log('pass second button function'),
};
