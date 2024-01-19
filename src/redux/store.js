// import { createStore } from 'redux';
// import { Reducer } from "./reducer";

// const myStore = createStore(Reducer);

// export default myStore;

import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducer';
import logger from 'redux-logger';

const myStore = createStore(Reducer, applyMiddleware(logger));

export default myStore; 