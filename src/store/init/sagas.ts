import { takeEvery, put, PutEffect } from 'redux-saga/effects';
import { initApp } from '@/store/init';
import { initSagaActions } from './saga-actions';
import { SagaIterator } from 'redux-saga';

export function* initAppSaga(): SagaIterator {
  yield put(initApp(true));
}

export default function* initSaga(): SagaIterator {
  yield takeEvery(initSagaActions.INIT, initAppSaga);
}
