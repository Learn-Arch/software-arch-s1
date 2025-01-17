class CardsApi {
  constructor({ address, groupId, token }) {
    this._address = address;
    this._groupId = groupId;
    this._token = token;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getCards(token) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  addCard(data, token) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteCard(cardId, token) {
    return fetch(`${this._address}/${this._groupId}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked, token) {
    return fetch(`${this._address}/${this._groupId}/cards/likes/${cardId}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

export const cardsApi = new CardsApi({
  address: 'https://nomoreparties.co',
  groupId: 'cohort0',
  token: '80a75492-21c5-4330-a02f-308029e94b63',
}); 