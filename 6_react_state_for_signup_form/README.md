
# Start with  lesson 5.
#05. User Sign Up: [Sign Up Form and its State](https://www.youtube.com/watch?v=97fT5ZOcpp4&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=6)
1) First you need to some navigation bar for that we can use [Bootstrap CDN](http://getbootstrap.com/getting-started/) for time being just add CDN link to index.html and install [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs)
Latest [tutotial on routing](https://github.com/turingschool-examples/react-router4)
```
C:\ReactJs\Tutorial\5_react_router_and_navigation>npm install --save react-router-dom
// for mapping json object.
C:\ReactJs\Tutorial\6_react_state_for_signup_form>npm install --save lodash


```
2) Rearrange the code move the container contents into contents folder create index file and export all components
```
//contents/index.js
export {default as About} from './About';
export {default as Home} from './Home';
export {default as SignupPage} from './SignupPage';

```

3) Short cut to create the div tag, write the contents with each div tag separated with ">" and hit the tab. 
```
 .row>.col-md-4.col-md-offset-4 

 // this will generate below code

  <div className="row">
        <div className="col-md-4 col-md-offset-4"></div>
   </div>
===========================
div.form-group>label.control-label>input.form-control>

// To generate below code

   <div className="form-group">
         <label htmlFor="" className="control-label">
                <input type="text" className="form-control"/>
         </label>
   </div>
============================
div.from-group>button.btn.btn-primary.btn-lg>
============================
    <div className="from-group">
            <button className="btn btn-primary btn-lg"></button>
    </div>
```
4) Create SignupForm and import into signuppage component
```
import React, {Component} from 'react';
import timezones from '../../../data/timezone';
import {map} from 'lodash';
class SignupForm extends Component {
    // In es6 we define state in the class constructor like below
 
    constructor(props) {
        //first thing we must do in react construct is call the supper
        super(props);
        //define the state
        this.state = {
            username: '',
            email:'',
            password:'',
            passwordConfirmation:'',
            timezone:''

        };
        // There are two ways we can bind in the constructor or in the control like this
        // <input type="text" name="username" value={this.state.username}
        // onChange={this.onChange.bind(this)} className="form-control"/> now just you
        // need to call in control "onChange={this.onChange}
       // this.onChange=this.onChange.bind(this);
       // this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e)
    {
        // There are two way we can set the state
        // 1)this.setState({username:e.target.value}) in this case we need to define for
        // each control 2)this.setState({username:e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        console.log(this.state)
    }
    render()
    {
         const options =map(timezones,(val)=> <option key={val.value} value={val.text}>{val.text}</option>);
        return (
            <from onSubmit={this.onSubmit.bind(this)} >
                <h1>
                    Join our community
                </h1>
                <div className="form-group">
                    <label className="control-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this
                        .onChange
                        .bind(this)}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this
                        .onChange
                        .bind(this)}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this
                        .onChange
                        .bind(this)}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">
                        Password Confirmation
                    </label>
                    <input
                        type="password"

                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this
                        .onChange
                        .bind(this)}
                        className="form-control"/>
                </div>
                 <div className="form-group">
                    <label className="control-label">
                        Timezone
                    </label>
                    <select                       
                        name="timezone"
                        value={this.state.timezone}
                        onChange={this
                        .onChange
                        .bind(this)}
                        className="form-control">
                        <option value="" disabled >Choose your timezone</option>
                        {options}
                        </select>
                </div>
                <div className="from-group">
                    <button className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </from>

        )
    }
}
export default SignupForm;
```

