import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import AppRouter from './routers/AppRouter';
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

let store = createStore(reducer, applyMiddleware(thunk))
const layout = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(layout, document.getElementById('app'));
