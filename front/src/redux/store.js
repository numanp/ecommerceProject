import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)),
);

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

export default store;
