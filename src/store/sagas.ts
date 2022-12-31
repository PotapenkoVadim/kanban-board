import { AllEffect } from '@redux-saga/core/effects';
import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';

export function* sagas(): Generator<AllEffect<SagaIterator>> {
  yield all([]);
}
