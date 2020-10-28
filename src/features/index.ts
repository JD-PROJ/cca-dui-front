import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import authenticationReducer from './authentication';
import { authenticationSaga } from './authentication/sagas';

const rootReducer = combineReducers({ authentication: authenticationReducer });

function* rootSaga() {
  yield all([authenticationSaga()]);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
