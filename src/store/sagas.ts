import { AllEffect } from '@redux-saga/core/effects';
import { SagaIterator, Task } from 'redux-saga';
import { Store } from 'redux';
import { all } from 'redux-saga/effects';
import init from './init/sagas';

export type SagaStore = Store & { sagaTask?: Task };

export default function* sagas(): Generator<AllEffect<SagaIterator>> {
  yield all([init()]);
}
