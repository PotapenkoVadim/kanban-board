import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import stageReducer from './stage';
import initReducer from './init';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    init: initReducer,
    stage: stageReducer
  },
  middleware: (gDM) => gDM({ serializableCheck: false })
    .concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
