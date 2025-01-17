import React, { useRef } from 'react';
import PopupWithForm from 'main/PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      title="Change profile picture"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatar"
        placeholder="Image URL"
        className="popup__input"
        ref={avatarRef}
        required
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup; 