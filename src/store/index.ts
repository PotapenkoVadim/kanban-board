import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import stageReducer from './stage';
import initReducer from './init';
import stageModalReducer from './modals/stage';
import confirmationModalReducer from './modals/confirmation';
import bindUserModalReducer from './modals/bind-user';
import bindStageModalReducer from './modals/bind-stage';
import userModalReducer from './modals/user';
import userReducer from './user';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    init: initReducer,
    stage: stageReducer,
    user: userReducer,
    stageModal: stageModalReducer,
    confirmationModal: confirmationModalReducer,
    userModal: userModalReducer,
    bindUserModal: bindUserModalReducer,
    bindStageModal: bindStageModalReducer
  },
  middleware: (gDM) => gDM({ serializableCheck: false })
    .concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
