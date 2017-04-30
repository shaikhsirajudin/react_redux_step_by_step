
# Start with  lesson 10.
#10. User Sign Up: [Flash Messages Reducer](https://www.youtube.com/watch?v=0goHDxI-5wQ&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=11)
[working with middleware](http://redux.js.org/docs/api/applyMiddleware.html)
0) Install shortid to generate short id,to connect 
```
C:\ReactJs\Tutorial\11_flash_messages_reducer>npm install --save shortid
//If the action is recognised as an RSAA (due to the presence of the [CALL_API] property), it will be processed by Redux API //middleware, otherwise it will be transparently passed to the next middleware.
C:\ReactJs\Tutorial\11_flash_messages_reducer>npm install --save redux-api-middleware
```
1) Lets implement Welcome flash message after successful signup. So let define a reducer in ./reducers/rootReducer.js
```
//Let define the reducer which take the state as message of array and action as a object and return new state.
export default(state = [], action = {}) => {
    return state;
}
```
2) Lets add devtoolextion to chrome in the code by using compose from the redux like below
```

import {createStore, applyMiddleware,compose} from 'redux';


const middleware = applyMiddleware(thunk);
const store = createStore((state = {}) => state, 
compose( middleware,
window.devToolsExtension?window.devToolsExtension():f=>f)
);

```
3) Lets create a rootReducer which will combine all the reducers ./rootReducer.js .
```
import {combineReducers} from 'redux';
import flashMessages from './reducers/flashMessages';

export default combineReducers({
    flashMessages
});


```
4) We will store flash messages in redux glob store and in the clients/index.js in place sending empty "(state = {}) => state" reducer we will send rootreducer
```
import rootReducer from './rootReducer';

const store = createStore(rootreducer, 
compose( middleware,
window.devToolsExtension?window.devToolsExtension():f=>f)
);

```
5) Lets create the action Creator and dispatch it from the component and then make reducer to react to this action. So for this First we are going to creat the new action client/actions/flashMessages.js
```
import {ADD_FLASH_MESSAGE} from '.types.js';
//create the add flash messages
export default addFlashMessages(message)
{
    return{type:ADD_FLASH_MESSAGE,
        message
    }

}

```
6) Add a property and call from signupfrom.js, and call it on successful like below
```
 .then((response) => {
                    this.props.addFlashMessages({type:'success',
                text:'You are successfuly loged in, Welcome!'})
                   this.context.router.history.push('/')
                    console.log('success')
                    console.log(response);
                }

 // the property as a required function to this component which parent component should pass               
  SignupForm.propTypes = {
    userSignupRequest: propTypes.PropTypes.func.isRequired,
    //Add the property to ask parent component to pass the function
    addFlashMessages: propTypes.PropTypes.func.isRequired
}


```

7) In the parent component SignupPage.js import the action and add the following code
```
// import it
import {addFlashMessages} from '../../../actions/flashMessages';

// deconstruct it
 const {userSignupRequest,addFlashMessages}=this.props;
// Call the functionality
  <SignupForm userSignupRequest={userSignupRequest} addFlashMessages={addFlashMessages}/>

// delcare it as a property
SignupPage.propTypes = {
  userSignupRequest: propTypes.PropTypes.func.isRequired,
   addFlashMessages: propTypes.PropTypes.func.isRequired
}

// Lets connect it to the redux store
export default connect((state)=>{return{}}, {userSignupRequest,addFlashMessages})(SignupPage);

```

8) Now we need to teach our reducer to react to this actions/flashMessage.js
```
import {ADD_FLASH_MESSAGE} from '../types';
import {shortid} from 'shortid';
export default(state = [], action = {}) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            // you have to return new state that is going to be array with the state that we had before and then we add another object to this collection
            [...state,{
                id:shortid.generate(),
                type:action.message.type,
            text:action.message.text}]
            break;
    
        default:
    return state;
        
            break;
    }
}

```