class ProfileApi {
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

  getUserInfo(token) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  updateProfile(data, token) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  updateAvatar(avatar, token) {
    return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ avatar }),
    }).then(this._checkResponse);
  }
}

export const profileApi = new ProfileApi({
  address: 'https://nomoreparties.co',
  groupId: 'cohort0',
  token: '80a75492-21c5-4330-a02f-308029e94b63',
}); 