import React, { useState, useContext } from 'react';
import { CurrentUserContext } from 'main/CurrentUserContext';
import Profile from './Profile';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { profileApi } from '../utils/profileApi';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleUpdateUser = (userData) => {
    profileApi.updateProfile(userData)
      .then(setCurrentUser)
      .catch(console.error);
  };

  const handleUpdateAvatar = (avatar) => {
    profileApi.updateAvatar(avatar)
      .then(setCurrentUser)
      .catch(console.error);
  };

  return (
    <>
      <Profile 
        onEditProfile={() => setIsEditProfilePopupOpen(true)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={() => setIsEditProfilePopupOpen(false)}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={() => setIsEditAvatarPopupOpen(false)}
        onUpdateAvatar={handleUpdateAvatar}
      />
    </>
  );
}

export default App; 