import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store

