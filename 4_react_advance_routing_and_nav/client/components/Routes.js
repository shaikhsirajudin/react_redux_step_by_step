import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
// Path of our components
import App from './App';
import Greetings from './Greetings';
//In this we should define the path and the component in our case its App
export default(
  <Router><div>
    <Route exact path="/" component={App}>
     <Route component={Greetings}></Route>
    </Route>
    <Route path="Greeting" component={Greetings}></Route>
  </div></Router>
);