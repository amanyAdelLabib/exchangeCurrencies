// import {createStore, applyMiddleware, compose} from 'redux';
// // import {createLogger} from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import {persistStore} from 'redux-persist';
// import {combinedReducers} from '../Reducers';
// import rootSaga from '../Sagas';

// // const Middlewares = [];
// // const sagaMiddleware = createSagaMiddleware();
// // const logger = createLogger();


// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

// const store = createStore(combinedReducers, applyMiddleware(...middlewares));
// sagaMiddleware.run(rootSaga);
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {combinedReducers} from '../Reducers';
import rootSaga from '../Sagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combinedReducers,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
export {store};

