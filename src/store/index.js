import {createStore, applyMiddleware, compose}  from 'redux';
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';
import reducer from './reducer';
import sagas from './sagas';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware();

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
// )

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
)
const store = createStore(
  reducer,
  enhancer 
);
sagaMiddleware.run(sagas)
export default store;

// 