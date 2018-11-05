import { createStore, applyMiddleware, compose } from 'redux';
<<<<<<< HEAD
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store
=======
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
>>>>>>> da42474a0334014a57e8398dcc6069c1b2560b5f

export default store;
