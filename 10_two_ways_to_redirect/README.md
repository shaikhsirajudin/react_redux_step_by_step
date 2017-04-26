
# Start with  lesson 9.
#09. User Sign Up: [Two ways to redirect](https://www.youtube.com/watch?v=NRQqKbioTTw&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=10)
1)There are two ways to implement redirect 
    a) Using [browser history directly](https://github.com/ReactTraining/react-router/issues/4950).
    b) React Router
a.1) Let implement using browser history first.
```
// this is moved form react-route to history module.
C:\ReactJs\Tutorial\10_two_ways_to_redirect>npm install --save history

```

a.2) Create the broswer history object by using
```
import {createBrowserHistory} from 'history'

//create the instance
 const history = createHistory();

// On success handler we will redirect to 
 this.props.userSignupRequest(this.state).then((response) => {
                   // history.push('/');// Old approach
                    this.context.history.push('/')/ with BrowserRouter creates its own history instance for that New apprach
                    console.log('success')
                    console.log(response);
                }

```
b.1) By using react router.
```
this.context.router.history.push('/')

```
b.2) Fot this to work we need to define the contexttypes how we do for proptypes
```
SignupForm.contextTypes={
    router: propTypes.PropTypes.object.isRequired
}
```