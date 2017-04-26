
# Start with  lesson 3.
#04. Project setup: [React router and basic navigation]  (https://www.youtube.com/watch?v=yA1Lw1U5278&index=5&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY)
1) First you need to some navigation bar for that we can use [Bootstrap CDN](http://getbootstrap.com/getting-started/) for time being just add CDN link to index.html and install [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs)
Latest [tutotial on routing](https://github.com/IrfanBaqui/react-router-v4-tutorial)
```
C:\ReactJs\Tutorial\4_react_router_and_navigation>npm install --save react-router-dom
```
2) create NavigatiorBar.js like below
```
import React from 'react';

//NavigatiorBar.js
export default() => {
    return <nav className="navbar navbardefault">
        <div className="container-fluid">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">Red Dice</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">Sign Out</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
}

/// 


```

3) Create the Routes.js which will define the route
```
//Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Path of our components
import App from './App';
//In this we should define the path and the component in our case its App
export default(
  <Router><div>
    <Route path="/" component={App}/>
  </div></Router>
);

```

4) Call routes.js in the client/index.js  for more details and changes [visits](https://github.com/reactjs/react-router-tutorial)
```
client/index.js
import React from 'react';
import {render} from 'react-dom';

import Routes from './components/Routes';
render(Routes,  
  document.getElementById('app')
);

```
