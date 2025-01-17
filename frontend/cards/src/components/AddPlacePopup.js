import React, { useState } from 'react';
import PopupWithForm from 'main/PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title="New place"
      name="add-place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Create"
    >
      <input
        type="text"
        name="name"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="popup__input"
        required
      />
      <input
        type="url"
        name="link"
        placeholder="Image URL"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="popup__input"
        required
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup; 