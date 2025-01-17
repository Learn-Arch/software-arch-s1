import React, { useContext } from 'react';
import { CurrentUserContext } from 'main/CurrentUserContext';

function Profile() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <div className="profile__avatar-container">
        <img
          src={currentUser?.avatar}
          alt="Profile avatar"
          className="profile__avatar"
        />
        <button className="profile__avatar-edit" type="button" />
      </div>
      <div className="profile__info">
        <h1 className="profile__name">{currentUser?.name}</h1>
        <button className="profile__edit-button" type="button" />
        <p className="profile__about">{currentUser?.about}</p>
      </div>
    </section>
  );
}

export default Profile; 