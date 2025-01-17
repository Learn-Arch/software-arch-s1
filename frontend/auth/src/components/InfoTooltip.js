import React from 'react';

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        />
        <div className={`popup__status ${isSuccess ? 'popup__status_success' : 'popup__status_error'}`} />
        <h3 className="popup__title">
          {isSuccess
            ? 'Success! You have now been registered.'
            : 'Oops, something went wrong! Please try again.'}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip; 