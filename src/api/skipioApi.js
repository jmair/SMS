import config from '../config';
import fetch from './fetchRequest';

class SkipioApi {

  static fetchContacts(page) {
    const per = 10;
    return fetch(`${config.skipioApiUrl}/api/v2/contacts?token=${config.skipioApiToken}&page=${page}&per=${per}`, {
      method: 'GET'
    }).then(res => res.json());
  }

  static sendMessage(message) {
    return fetch('/api/users/create', {
      method: 'POST',
      body: message
    }).then(res => res.json());
  }
}

export default SkipioApi;
