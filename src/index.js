import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { reducers } from './redux/reducer/index';
let store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store = {store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
