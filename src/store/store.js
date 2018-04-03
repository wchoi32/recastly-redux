import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const middleware = [thunk];

const Store = createStore(
  rootReducer, 
  applyMiddleware(...middleware)
);

export default Store;