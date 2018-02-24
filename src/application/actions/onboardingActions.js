import * as types from './actionTypes';

export function renderLoadingPage() {
  return { type: types.RENDER_LOADING_PAGE }
}

export function postUser() {
  return { type: types.POST_USER }
}

export function putCredentials() {
  return { type: types.PUT_CREDENTIALS }
}

export function putProfileInfo() {
  return { type: types.PUT_PROFILE_INFO }
}

export function putUserAddressInfo() {
  return { type: types.PUT_USER_ADDRESS_INFO }
}