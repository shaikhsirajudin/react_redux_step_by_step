import React, {Component} from 'react';
import timezones from '../../../data/timezone';
import {map} from 'lodash';
import axios from 'axios';
import propTypes from 'prop-types';
// Import the classnames to added conditional css class feature <div
// className="form-group"> inplace of this <div
// className={classnames("form-group",{"has-error":errors.username})}>
import classnames from 'classnames';
// import the validation function
import {validateInputs} from '../../../../server/shared/validations/signup';
import TextFieldGroup from '../../common/customcontrols/TextFieldGroup';

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
            isLoading: false
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
    isValid()
    {
        const {errors, isValid} = validateInputs(this.state);
        if (!isValid) 
            this.setState({errors});
        return isValid;
    }
    onSubmit(e)
    {
        e.preventDefault();
        if (this.isValid()) { // clear the error every time when we submit the form.
            this.setState({errors: {}, isLoading: true});
            /*Inplace of making actual ajax call we will define props function and call it. */
            //axios.post('/api/users',{users:this.state});
            /* call the props function and pass the state to it */
            this
                .props
                .userSignupRequest(this.state)
                .then((response) => {
                    this
                        .props
                        .addFlashMessage({type: 'success', text: 'You signed up successfully. Welcome!'});

                    //this.context.router.history.push('/')
                    console.log('success')
                    console.log(response);
                }, (err) => {
                    console.log("error");
                    console.log(err.response);
                    this.setState({errors: err.response.data, isLoading: false});

                });
        }
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
                <TextFieldGroup
                    value={this.state.username}
                    field="username"
                    type='text'
                    label="User Name"
                    error={errors.username}
                    onChange={this
                    .onChange
                    .bind(this)}/>
                <TextFieldGroup
                    value={this.state.email}
                    field="email"
                    type='text'
                    label="Email"
                    error={errors.email}
                    onChange={this
                    .onChange
                    .bind(this)}/>

                <TextFieldGroup
                    value={this.state.password}
                    field="password"
                    type="password"
                    label="Password"
                    error={errors.password}
                    onChange={this
                    .onChange
                    .bind(this)}/>

                <TextFieldGroup
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                    label="Password Confirmation"
                    error={errors.passwordConfirmation}
                    onChange={this
                    .onChange
                    .bind(this)}/>

                <div className={classnames("form-group", {"has-error": errors.timezone})}>
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
                    <button
                        disabled={this.state.isLoading}
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
    userSignupRequest: propTypes.PropTypes.func.isRequired,
    //Add the property to ask parent component to pass the function
    addFlashMessage: propTypes.PropTypes.func.isRequired
}

// Define the contexttype for redirect

SignupForm.contextTypes = {
    router: propTypes.PropTypes.object.isRequired
}

export default SignupForm;