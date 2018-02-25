import * as types from '../actions/actionTypes';

const defaultState = {
  username: '',
  email: '',
  password: '',
}

export default function credentialsReducer(state = defaultState, action) {
  switch (action.type) {
    case (types.PUT_CREDENTIALS):
      return putCredentials(state, action);

    default:
      return state;
  }
}

function putCredentials(state, payload) {

  return {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }
}
