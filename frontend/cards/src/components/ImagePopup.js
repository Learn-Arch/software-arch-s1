import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card ? 'popup_is-opened' : ''}`}>
      <div className="popup__container popup__container_type_image">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        />
        <img
          src={card?.link}
          alt={card?.name}
          className="popup__image"
        />
        <p className="popup__caption">{card?.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup; 