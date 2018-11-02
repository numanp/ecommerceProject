import { createStore, applyMiddleware, combineReducers , compose} from 'redux';
import cartReducer from './reducer'
import adminReducer from './reducers/admin-reducer'
import thunkMiddlewere from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    cart: cartReducer,
    admin: adminReducer
})

const store = createStore(
    rootReducer,composeEnhancers(applyMiddleware(thunkMiddlewere))
    
)

export default store