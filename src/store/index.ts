import { createWrapper } from 'next-redux-wrapper';
import { configureStore, Store } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import stageReducer from './stage';
import stageModalReducer from './modals/stage';
import confirmationModalReducer from './modals/confirmation';
import bindUserModalReducer from './modals/bind-user';
import bindStageModalReducer from './modals/bind-stage';
import userModalReducer from './modals/user';
import userReducer from './user';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function makeStore() {
  return configureStore({
    reducer: {
      stage: stageReducer,
      user: userReducer,
      stageModal: stageModalReducer,
      confirmationModal: confirmationModalReducer,
      userModal: userModalReducer,
      bindUserModal: bindUserModalReducer,
      bindStageModal: bindStageModalReducer
    },
    middleware: [sagaMiddleware]
  });
}

export const store = makeStore();

sagaMiddleware.run(sagas);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state)
});
