import fetch from './fetchRequest';

class UserApi {

  static create(user) {
    const obj = JSON.stringify(user);
    return fetch('/api/users/create', {
      method: 'POST',
      body: obj
    }).then(res => res.json());
  }

  static update(id, user) {
    const obj = JSON.stringify(user);
    return fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: obj
    }).then(res => res.json());
  }
}

export default UserApi;
