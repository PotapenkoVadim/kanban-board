import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import labelReducer from './label/label-slice';
import initReducer from './init/init-slice';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    init: initReducer,
    label: labelReducer
  },
  middleware: (gDM) => gDM({ serializableCheck: false })
    .concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
