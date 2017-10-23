import config from '../config';
import fetch from './fetchRequest';

class SkipioApi {

  static fetchContacts(page) {
    const per = 10;
    return fetch(`${config.skipioApiUrl}/api/v2/contacts?token=${config.skipioApiToken}&page=${page}&per=${per}`, {
      method: 'GET'
    }).then(res => res.json());
  }

  static sendMessage(id, message) {
    const body = {
      recipients: [id],
      message: {message}
    };

    return fetch(`${config.skipioApiUrl}/api/v2/messages?token=${config.skipioApiToken}`, {
      method: 'POST',
      body
    }).then(res => res.json());
  }
}

export default SkipioApi;
