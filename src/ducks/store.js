// if having multiple reducers
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    userReducer,
    productsReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));


// If only 1 reducer
// import { createStore } from 'redux';
// import userReducer from './userReducer';

// export default createStore(userReducer);