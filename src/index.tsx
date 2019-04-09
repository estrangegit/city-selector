import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { default as createSagaMiddleware } from 'redux-saga'

import { watcherSaga } from 'saga/saga'
import { App } from 'components/App'
import { rootReducer } from 'reducers/index'

import 'sass/main.scss'
import { AppDetails } from 'components/AppDetails';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

(window as any).store = store

sagaMiddleware.run(watcherSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact={true} path="/" component={ App } />
      <Route path="/details" component={ AppDetails } />
    </Router>
  </Provider>,
  document.getElementById('root')
)
