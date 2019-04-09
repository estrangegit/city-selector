import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { default as createSagaMiddleware } from 'redux-saga'

import { watcherSaga } from "saga/saga";
import { App } from 'components/App';
import { rootReducer } from 'reducers/index';

import "sass/main.scss"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

(window as any).store= store;

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);