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