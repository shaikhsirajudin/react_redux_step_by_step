import {render} from 'react-dom'
import React, {Component} from 'react';
import Routers from './components/Routers'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

/*const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,
compose( middleware,
window.devToolsExtension ? window.devToolsExtension() : f => f)
);*/
render(
    <Provider store={store}>
    <Routers/></Provider>, document.getElementById('app'))