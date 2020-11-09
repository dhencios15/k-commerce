import {
  IS_AUTHENTICATING,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  AUTH_ERROR,
} from 'constant/types';

export const logIn = (emailAndpassword) => ({
  type: LOGIN,
  payload: emailAndpassword,
});

export const logInSuccess = (auth) => ({
  type: LOGIN_SUCCESS,
  payload: auth,
});

export const signUp = (credentials) => ({
  type: SIGN_UP,
  payload: credentials,
});

export const signUpSuccess = (auth) => ({
  type: SIGN_UP_SUCCESS,
  payload: auth,
});

export const isAuthenticating = (bool = true) => ({
  type: IS_AUTHENTICATING,
  payload: bool,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const logOutSuccess = () => {
  window.location.reload();
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const authError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});
