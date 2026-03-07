import React from 'react';

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  children,
  buttonText = 'Save',
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        <form
          name={name}
          className="popup__form"
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm; 