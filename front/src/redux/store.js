import { createStore, combineReducers } from 'redux';
<<<<<<< HEAD
//import cartReducer from './reducer'
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    // cart: cartReducer
})
=======
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';

// const rootReducer = combineReducers({
//     cart: cartReducer
// })
>>>>>>> 4ba507a0f0c28892435ea6d9f6dcb1bd3e1a43a1

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

