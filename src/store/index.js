import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { storeReducer } from './reducers/storeReducer'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
  storeReducer,
  userReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))