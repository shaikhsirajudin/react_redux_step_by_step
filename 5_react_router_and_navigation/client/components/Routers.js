import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Greetings from './Greetings';
import About from './About';
import SignupPage from './signup/SignupPage';

//Using a BrowserRouter and Match Having a Link to access the path

export default class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <App>
                        <Switch>
                            <Route exact path="/" component={Greetings}/>
                            <Route path="/about" component={About}/>
                            <Route path="/signup" component={SignupPage}/>
                        </Switch>
                    </App>
                </div>
            </Router>
        );
    }
}
