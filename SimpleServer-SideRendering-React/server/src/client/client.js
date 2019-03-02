// Startup point for  the client side application

import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from '../store';

ReactDOM.hydrate(
    <Provider store={store}>
            < Home />
    </Provider>
    , document.querySelector('#reactAppId'));