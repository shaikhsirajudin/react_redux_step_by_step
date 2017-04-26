
# Start with  lesson 8.
#08. User Sign Up: [Client-side Validation](https://www.youtube.com/watch?v=MOEBvTkHLac&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=9&spfreload=1)
1)As we need to do same validation client, server side, lets first refactor and move the validation logic to separate file "server/shared/validations/signup.js
```
import Validator from 'validator';
import {isEmpty} from 'lodash';

export  function validateInputs(data) {
    let errors = {};
    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if (Validator.isEmail(data.email)) {
        errors.email = 'This field is required';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if (Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Password must match';
    }
    if (Validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }

    return {errors, isValid: isEmpty(errors)}
}
```
2) Call this functionality in SignupForm.js
```
  isValid()
    {
        const {errors, isValid} = validateInputs(this.state);
        if (!isValid) 
            this.setState({errors});
        return isValid;
    }

```
3) Call this method in the functionality of onSubmit
```
onSubmit(e)
    {

        e.preventDefault();
        if (this.isValid()) { // clear the error every time when we submit the form.
            this.setState({errors: {}, isLoading: true});
            ..
            ...
            ....
        }
    }

```
5) Techique to remove duplicate html elements are creating control
    a) In signupform we got following block which is repeating for earch control
    ```
            <div className={classnames("form-group", {"has-error": errors.username})}>
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
                        className="form-control"/> {(errors.username) && <span className="help-block">{errors.username}</span>}
            </div>
    ```
    b) Lets create a  components/common/customcontrols/TextFieldGroup.js functional components
    ```
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
// Lets pass those fields as a parameter it so that we can access it.
const TextFieldGroup = ({
    field,
    value,
    type,
    label,
    error,
    onChange
}) => {
    return (
        <div className={classnames("form-group", {"has-error": error})}>
            <label className="control-label">
                {label}
            </label>
            <input
                type={type}
                name={field}
                value={value}
                onChange={onchange}
                className="form-control"/> {(error) && <span className="help-block">{error}</span>}
        </div>
    );
}

/*
If you look into the control you will find common variable fields which is required by every block
 type="text"             name="username"      value={this.state.username}    onChange={this.onChange
So lets define the prop based on it.
*/
TextFieldGroup.propTypes = {
    field: propTypes.PropTypes.string.isRequired,
    value: propTypes.PropTypes.string.isRequired,
    type: propTypes.PropTypes.string.isRequired, // most of the time it will be text
    label: propTypes.PropTypes.string.isRequired,
    error: propTypes.PropTypes.string,
    onChange: propTypes.PropTypes.func.isRequired
}

// lets define the default values for props.

TextFieldGroup.defaultProps = {
    type: 'text' // most of the time it will be text

}

export default TextFieldGroup;

    ```
    c) call this functionality in SignupForm.js like below
    ```
<TextFieldGroup
                    value={this.state.username}
                    field="username"
                    label="User Name"
                    error={errors.username}
                    onChange={this
                    .onChange
                    .bind(this)}/>

    ```