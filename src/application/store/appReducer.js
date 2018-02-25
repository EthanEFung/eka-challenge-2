import * as types from '../actions/actionTypes';

const defaultState = {
  id: null,
  renderSignup: true,
  renderCredentials: false,
  renderProfileInfo: false,
  renderUserAddressInfo: false
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case (types.RECEIVED_USER_ID):
      return updateId(state, action.payload)
    case (types.UPDATED_CREDENTIALS):
      return renderProfileInfo(state);
    default:
      return state;
  }
}

function updateId(state, { id }) {
  const newState = Object.assign(
    state,
    {
      id,
      renderProfileInfo: false,
      renderSignup: false,
      renderCredentials: true,
      renderUserAddressInfo: false
    }
  );
  return newState;
}

function renderProfileInfo(state) {
  const newState = Object.assign(
    state,
    {
      renderProfileInfo: true,
      renderSignup: false,
      renderCredentials: false,
      renderUserAddressInfo: false
    }
  );
  return newState;
}