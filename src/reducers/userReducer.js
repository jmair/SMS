import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case types.FETCH_CONTACTS_SUCCESS:
      return {...state, contacts: action.contacts};
    default:
      return state;
  }
};
