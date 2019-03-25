import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'

import App from './components/App';

import "./sass/main.scss"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
  });
module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}