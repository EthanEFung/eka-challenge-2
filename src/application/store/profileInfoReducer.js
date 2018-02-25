import * as types from '../actions/actionTypes';

const defaultState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
}


export default function profileInfoReducer(state = defaultState, action) {
  switch (action.type) {
    case (types.PUT_PROFILE_INFO):
      return putProfileInfo();

    default:
      return state;
  }
}

function putProfileInfo() {
  return {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    phoneNumber: document.getElementById('phone-number').value,
  }
}