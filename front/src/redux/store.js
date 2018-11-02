import { createStore, combineReducers } from 'redux';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';

// const rootReducer = combineReducers({
//     cart: cartReducer
// })

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

