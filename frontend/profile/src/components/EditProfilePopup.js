import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from 'main/PopupWithForm';
import { CurrentUserContext } from 'main/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="popup__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        minLength="2"
        maxLength="40"
      />
      <input
        type="text"
        name="about"
        placeholder="About me"
        className="popup__input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        minLength="2"
        maxLength="200"
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup; 