import { call, put } from 'redux-saga/effects';

import { LOGIN, LOGOUT, SIGN_UP } from 'constant/types';
import {
  authError,
  isAuthenticating,
  logInSuccess,
  logOutSuccess,
  signUpSuccess,
} from 'store/actions/authActions';
import { logInUser, signUpUser } from 'services/authService';
import Api from 'services/Api';

function* handleError(e) {
  yield put(isAuthenticating(false));
  yield put(authError(e));
}

function* initRequest() {
  yield put(isAuthenticating());
}

function* authSaga({ type, payload }) {
  switch (type) {
    case LOGIN:
      try {
        yield initRequest();
        const res = yield call(logInUser, payload);
        if (res.status === 'fail') {
          yield handleError(res.error);
        } else {
          yield put(logInSuccess(res));
          yield put(isAuthenticating(false));
        }
      } catch (error) {
        yield handleError(error.response);
      }
      break;
    case SIGN_UP:
      try {
        yield initRequest();
        const res = yield call(signUpUser, payload);
        if (res.status === 'error') {
          yield handleError('Invalid Singnin up');
        } else {
          yield put(signUpSuccess(res));
          yield put(isAuthenticating(false));
        }
      } catch (error) {
        yield handleError(error.response);
      }
      break;
    case LOGOUT:
      try {
        yield initRequest();
        yield put(logOutSuccess());
        yield put(Api(null));
        yield put(isAuthenticating(false));
        yield put(authError(null));
      } catch (error) {
        yield handleError(error);
      }
      break;
    default:
      return;
  }
}

export default authSaga;
