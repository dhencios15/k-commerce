import { takeLatest } from 'redux-saga/effects';
import authSaga from './sagas/authSaga';
import * as ACTION from 'constant/types';

function* rootSaga() {
  yield takeLatest([ACTION.LOGIN, ACTION.SIGN_UP, ACTION.LOGOUT], authSaga);
}

export default rootSaga;
