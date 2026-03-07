class Auth {
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

  register(email, password) {
    return fetch(`${this._address}/${this._groupId}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._address}/${this._groupId}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(this._checkResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    });
  }
}

export const auth = new Auth({
  address: 'https://nomoreparties.co',
  groupId: 'cohort0',
  token: '80a75492-21c5-4330-a02f-308029e94b63',
}); 