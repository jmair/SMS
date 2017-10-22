import * as types from './actionTypes';
import userApi from '../api/userApi';

export function createUserSuccess(id) {
  return {type: types.CREATE_USER_SUCCESS, id};
}

export function createUser(user) {
  return dispatch => {
    return userApi.create(user)
      .then((id) => {
        dispatch(createUserSuccess(id));
      })
      .catch(error => {
        throw(error);
      });
  };
}
