import axios from 'axios';

import * as actionTypes from './actionTypes';

import { profileSet } from './profile'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
  localStorage.setItem('token', token);

  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = (error) => {
  // delete axios.defaults.headers.common['Authorization'];
  // localStorage.removeItem('token');

  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = (error) => {
  delete axios.defaults.headers.common['Authorization'];
  localStorage.removeItem('token');

  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = '';
    axios.post(url, authData)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));

      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authCheckState = () => {
    return dispatch => {
      const token = localStorage.getItem('token');
      if (token) {
        axios.get('v1/user/1/', {
          headers: {Authorization: `JWT ${token}`},
          mode: 'no-cors',
        })
          .then(response => {
            dispatch(authSuccess(token, response.data.id));
            dispatch(profileSet(
              response.data.profile.photo,
              response.data.email,
              response.data.username,
              response.data.profile.first_name,
              response.data.profile.last_name,
            ));
          })
          .catch(error => {
            dispatch(authFail(error));
          });
      }
      else {

        dispatch(authFail('token is not in local storage'));
      }
    };
  }
;