
# Start with  lesson 4.
#05. Project setup: [React router and basic navigation]  (https://www.youtube.com/watch?v=yA1Lw1U5278&index=5&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY)
1) First you need to some navigation bar for that we can use [Bootstrap CDN](http://getbootstrap.com/getting-started/) for time being just add CDN link to index.html and install [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs)
Latest [tutotial on routing](https://github.com/turingschool-examples/react-router4)
```
C:\ReactJs\Tutorial\5_react_router_and_navigation>npm install --save react-router-dom


```
2) create NavigatiorBar.js like below, in place of anchor tag use link which will map to original path
```
import React from 'react';

//NavigatiorBar.js
import React from 'react';
import {Link} from 'react-router-dom';
export default() => {
    return (<nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <Link to='/' className="navbar-brand" >Red Dice</Link>
             <Link to='/about' className="navbar-brand" >About</Link>             
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                     <Link to='/signup'  >Signup Page</Link>                     
                    </li>
                </ul>

            </div>
        </div>
    </nav>);
}
/// 


```

3) Create the Routers.js which will define the route with nested as switch between component
```
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

```

4) Define the main layout of page.
```
//App.js


import React, {Component} from 'react';
import NavigationBar from './NavigationBar';

class App extends Component {
    render() {
        return (
            <div className="container">
                <NavigationBar/> {this.props.children}
            </div>
        );
    }
}

export default App;

```

5) Call routes.js in the client/index.js  for more details and changes [visits](https://github.com/reactjs/react-router-tutorial)
```
client/index.js
import {render} from 'react-dom'
import React, { Component } from 'react';
import Routers  from './components/Routers'

//Using a BrowserRouter and Match 
//Having a Link to access the path
render(<Routers/>, document.getElementById('app'))

```
