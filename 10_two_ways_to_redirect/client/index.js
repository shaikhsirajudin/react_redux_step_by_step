import {render} from 'react-dom'
import React, {Component} from 'react';
import Routers from './components/Routers'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore((state = {}) => state, middleware);
render(
    <Provider store={store}>
    <Routers/></Provider>, document.getElementById('app'))