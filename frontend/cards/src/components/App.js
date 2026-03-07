import React, { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from 'main/CurrentUserContext';
import Card from './Card';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { cardsApi } from '../utils/cardsApi';
import '../index.css';

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    cardsApi.getCards()
      .then(setCards)
      .catch(console.error);
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    cardsApi.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(console.error);
  };

  const handleCardDelete = (card) => {
    cardsApi.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(console.error);
  };

  return (
    <>
      <section className="places">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={() => setIsAddPlacePopupOpen(false)}
        onAddPlace={(cardData) => {
          cardsApi.addCard(cardData)
            .then((newCard) => {
              setCards([newCard, ...cards]);
              setIsAddPlacePopupOpen(false);
            })
            .catch(console.error);
        }}
      />
      <ImagePopup
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </>
  );
}

export default App; 