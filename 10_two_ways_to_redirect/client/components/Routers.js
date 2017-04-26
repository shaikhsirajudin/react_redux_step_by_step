import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './container/App';
import Home from './container/contents/Home';
import SignupPage from './container/contents/SignupPage';
import About from './container/contents/About';



//Using a BrowserRouter and Match Having a Link to access the path

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <div>
                    <App>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/signup" component={SignupPage}/>
                        </Switch>
                    </App>
                </div>
            </Router>
        );
    }
}
