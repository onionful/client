/* eslint-disable */
import { all, put, takeLatest } from 'redux-saga/effects';

function* handleAction({ payload }) {
  yield put({ type: 'ANOTHER_ACTION_TYPE', payload });
}

function* rootSaga(getState) {
  yield all([takeLatest('ACTION_TYPE', handleAction)]);
}

export default rootSaga;
