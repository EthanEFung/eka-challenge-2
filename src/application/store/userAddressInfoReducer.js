import * as types from '../actions/actionTypes';


const defaultState = {
  address: '',
  city: '',
  country: '',
  state: '',
  zipCode: '',
}

export default function userAddressInfoReducer(state = defaultState, action) {
  switch (action.type) {
    case (types.PUT_USER_ADDRESS_INFO):
      return putUserAddressInfo();

    default:
      return state;
  }
}

function putUserAddressInfo() {
  return {
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    country: document.getElementById('country').value,
    state: document.getElementById('state').value,
    zipCode: document.getElementById('zip-code').value,
  }
}