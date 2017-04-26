import React, {Component} from 'react'
import SignupForm from './SignupForm'
import propTypes from 'prop-types';
// Import connect for react redux,
import {connect} from 'react-redux';
//create action 'userSignupRequest' and import it
import {userSignupRequest} from '../../../actions/userSignupRequest';
class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest}/>
        </div>
      </div>
    )
  }
}
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