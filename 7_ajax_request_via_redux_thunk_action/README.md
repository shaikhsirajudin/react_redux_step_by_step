
# Start with  lesson 6.
#06. User Sign Up: [Make ajax request via redux thunk] (https://www.youtube.com/watch?v=SX5HkOP-LWs&index=7&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&spfreload=1)
1) First you need to some navigation bar for that we can use [Bootstrap CDN](http://getbootstrap.com/getting-started/) for time being just add CDN link to index.html and install [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs)
Latest [tutotial on routing](https://github.com/turingschool-examples/react-router4)
```
C:\ReactJs\Tutorial\5_react_router_and_navigation>npm install --save react-router-dom
// for mapping json object.
C:\ReactJs\Tutorial\6_react_state_for_signup_form>npm install --save lodash
// for ajax call install axios
C:\ReactJs\Tutorial\7_ajax_request_via_redux_thunk_action>npm install --save axios

// to get provider component and implement redux store functionality
C:\ReactJs\Tutorial\7_ajax_request_via_redux_thunk_action>npm install --save react-redux
// for creating global redux store and integrate with different middleware by using applymiddleware method
C:\ReactJs\Tutorial\7_ajax_request_via_redux_thunk_action>npm install --save redux

// thunk middle ware allow us to dispatch asynchronus action
C:\ReactJs\Tutorial\7_ajax_request_via_redux_thunk_action>npm install --save redux-thunk

// ProperType declaration library
C:\ReactJs\Tutorial\7_ajax_request_via_redux_thunk_action>npm install --save prop-types

```
2) For using action we have to create store and wrap our router with the provider second we need to setup global redux store which will be empty for this lesson.
```
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

```
3) In place of making actual 

```
// Inplace of making actual ajax call we will define propsType function and call it.
 onSubmit(e)
    {
        e.preventDefault();
        axios.post('/api/users',{users:this.state});
        console.log(this.state)
    }

// like below
   onSubmit(e)
    {
        e.preventDefault();
            /*Inplace of making actual ajax call we will define props function and call it. */
        //axios.post('/api/users',{users:this.state});
       /* call the props function and pass the state to it */
       this.props.userSignupRequest(this.state);
        console.log(this.state)
    }

// define the prop like this
// To define props function we need to declare propTypes
SignupForm.propTypes={
    userSignupRequest:propTypes.PropTypes.func.isRequired
}

export default SignupForm;

```
4) In SignupPage bubbleup this event to action
```
//SignupPage.js
//create action 'userSignupRequest' and import it
import {userSignupRequest} from '../../../actions/userSignupRequest';


// As we expect this components to have this function to be passed lets define
// the prop type and take the function from redux and we will used connect high
// order component to provide this thunk function component
SignupPage.propTypes = {
  userSignupRequest: propTypes.PropTypes.func.isRequired
}

// So lets add connect here, this take two parameters 1) Map state to props
// which provides some peice of data from redux store and it take state and
// return object so lets pass empty state and it will return empty object. 2)
// Map dispatch prop where we specify action creators, wrapped in dispatch here
// we will use short cut simply by providing object  with action name and
// action going to be userSignupRequest or we can simply pass null state in
// place of "(state)=>{return{}}"
export default connect((state) => {
  return {}
}, {userSignupRequest})(SignupPage);


```

6) create the action method
```
import axios from 'axios';
// This function takes the user data and then to use thunk middleware instead of
// object we return function so we can write any functionality we want. This
// function take dispatch which we can use inside of this function to this page
// and other action but in this function we will return promise of axios making
// post request
export function userSignupRequest(userData) {
    return dispatch => {
        axios.post('/api/users', userData);
    }
}

```