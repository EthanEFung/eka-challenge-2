import * as types from './actionTypes';

export function postUser() {
  return function (dispatch, getState) {
    dispatch({ type: types.POST_USER });

    const init = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }
    return fetch('/postUser', init)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: types.RECEIVED_USER_ID,
          payload: data
        })
      })
      .catch(err => window.alert('could not store'));
  }
}

export function putCredentials() {
  return function (dispatch, getState) {
    dispatch({ type: types.PUT_CREDENTIALS });
    const { app, credentials } = getState();


    const init = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({ app, credentials })
    }
    return fetch('/putCredentials', init)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch({ type: types.UPDATED_CREDENTIALS });
      })
      .catch(err => {
        window.alert('could not store credential info')
      });
  }
}

export function putProfileInfo() {
  return function (dispatch, getState) {
    dispatch({ type: types.PUT_PROFILE_INFO })
    const { app, profileInfo } = getState();

    const profile = {
      first_name: profileInfo.firstName,
      last_name: profileInfo.lastName,
      phone_number: profileInfo.phoneNumber
    }

    const init = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({ app, profile })
    }
    return fetch('/putProfileInfo', init)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: types.UPDATED_PROFILE_INFO })
      })
      .catch(err => {
        window.alert('could not store profile info')
      });
  }
}

export function putUserAddressInfo() {
  return function (dispatch, getState) {
    dispatch({ type: types.PUT_USER_ADDRESS_INFO })

    const { app, userAddressInfo } = getState();
    const init = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({ app, userAddressInfo })
    }
    return fetch('/putUserAddressInfo', init)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: types.UPDATED_USER_ADDRESS_INFO });
      })
      .catch(err => {
        window.alert('could not store');
      });
  }
}


