import React, {Component} from 'react';
import timezones from '../../../data/timezone';
import {map} from 'lodash';
import axios from 'axios';
import propTypes from 'prop-types';
// Import the classnames to added conditional css class feature
// <div className="form-group"> inplace of this
// <div className={classnames("form-group",{"has-error":errors.username})}>
import classnames from 'classnames';

class SignupForm extends Component {
    // In es6 we define state in the class constructor like below

    constructor(props) {
        //first thing we must do in react construct is call the supper
        super(props);
        //define the state
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading:false
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
        // clear the error every time when we submit the form.
        this.setState({errors: {},isLoading:true});
        /*Inplace of making actual ajax call we will define props function and call it. */
        //axios.post('/api/users',{users:this.state});
        /* call the props function and pass the state to it */
        this
            .props
            .userSignupRequest(this.state)
            .then((response) => {
                console.log('success')
                console.log(response);
            }, (err) => {
                console.log("error");
                console.log(err.response);
                this.setState({errors: err.response.data, isLoading: false});

            })
        /* .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code that falls
                    // out of the range of 2xx
                    console.log('error.response',error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received `error.request` is an
                    // instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log('error.request',error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                     console.log(error.response.status);
                    console.log(error.response.headers);
                }
                console.log(error.config);

            });*/

    }
    render()
    {
        // grab the error in the constant
        const {errors} = this.state;
        const options = map(timezones, (val) => <option key={val.value} value={val.text}>{val.text}</option>
        );
        return (
            <from onSubmit={this
                .onSubmit
                .bind(this)}>
                <h1>
                    Join our community
                </h1>
                <div className={classnames("form-group",{"has-error":errors.username})}>
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
                {(errors.username) && <span className="help-block">{errors.email}</span>}
                <div className={classnames("form-group",{"has-error":errors.username})}>
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
                        className="form-control"/> {(errors.email) && <span className="help-block">{errors.email}</span>}
                </div>
               <div className={classnames("form-group",{"has-error":errors.password})}>
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
                        className="form-control"/> {(errors.password) && <span className="help-block">{errors.password}</span>}
                </div>
                <div className={classnames("form-group",{"has-error":errors.passwordConfirmation})}>
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
                        className="form-control"/> {(errors.passwordConfirmation) && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>
                <div className={classnames("form-group",{"has-error":errors.timezone})}>
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
                        <option value="" disabled>Choose your timezone</option>
                        {options}
                    </select>
                    {(errors.timezone) && <span className="help-block">{errors.timezone}</span>}
                </div>
                <div className="from-group">
                    <button disabled={this.state.isLoading}
                        type="submit"
                        onClick={this
                        .onSubmit
                        .bind(this)}
                        className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </from>

        )
    }
}
// To define props function we need to declare propTypes
SignupForm.propTypes = {
    userSignupRequest: propTypes.PropTypes.func.isRequired
}

export default SignupForm;