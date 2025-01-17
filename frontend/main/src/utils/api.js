class Api {
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

  checkToken(token) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(this._checkResponse);
  }
}

export const api = new Api({
  address: 'https://nomoreparties.co',
  groupId: 'cohort0',
  token: '80a75492-21c5-4330-a02f-308029e94b63',
}); 