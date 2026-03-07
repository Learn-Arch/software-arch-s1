import React, { useContext } from 'react';
import { CurrentUserContext } from 'main/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="card">
      {isOwn && (
        <button
          type="button"
          className="card__delete-button"
          onClick={handleDeleteClick}
        />
      )}
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className={`card__like-button ${isLiked ? 'card__like-button_active' : ''}`}
            onClick={handleLikeClick}
          />
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card; 