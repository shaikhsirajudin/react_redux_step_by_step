import {render} from 'react-dom'
import React, { Component } from 'react';
import Routers  from './components/Routers'

//Using a BrowserRouter and Match 
//Having a Link to access the path
render(<Routers/>, document.getElementById('app'))