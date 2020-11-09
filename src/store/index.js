import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware];

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const store = createStore(
  persistCombineReducers(authPersistConfig, rootReducer),
  composeEnhancer(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
