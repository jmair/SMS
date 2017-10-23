import * as types from './actionTypes';
import skipioApi from '../api/skipioApi';

export function fetchContactsSuccess(contacts) {
  return {type: types.FETCH_CONTACTS_SUCCESS, contacts};
}

export function sendMessageSuccess() {
  return {type: types.SEND_MESSAGE_SUCCESS};
}

export function fetchContacts(page) {
  return dispatch => {
    return skipioApi.fetchContacts(page)
      .then((contacts) => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function sendMessage(id, message) {
  return dispatch => {
    return skipioApi.sendMessage(id, message)
      .then(() => {
        dispatch(sendMessageSuccess());
      })
      .catch(error => {
        throw(error);
      });
  };
}
