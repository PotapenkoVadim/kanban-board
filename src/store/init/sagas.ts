import { takeEvery, put, call } from 'redux-saga/effects';
import { initSagaActions } from './actions';
import { SagaIterator, Task } from 'redux-saga';
import { UserService } from '@/services/api/user';
import { initUsers } from '../user';
import { initUsersToStage } from '../stage';
import { configuration } from '@/configuration';

const defaultStage = configuration.defaultStages[0];

export let initAppTask: Task & { end: () => void };

export function* initAppSaga(): SagaIterator {
  try {
    const response = yield call(UserService.search);

    yield put(initUsers(response));
    yield put(
      initUsersToStage({
        stageID: defaultStage.id,
        userIDs: response.map((item) => item.id)
      })
    );
  } catch (error) {
    throw new Error(error);
  }
}

export default function* initSaga(): SagaIterator {
  yield takeEvery(initSagaActions.INIT, initAppSaga);
}
