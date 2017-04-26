
# Start with  lesson 7.
#07. User Sign Up: Server-side Validation (https://www.youtube.com/watch?v=gZ_fR6o98dE&index=8&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY)
1) To parse the request data we need to install another middle ware body-parser, validator
```
// This will provid json message parser functionality
C:\ReactJs\Tutorial\8_server-side-validation>npm install --save body-parser

// It provide the default validation functions which we can use in application
C:\ReactJs\Tutorial\8_server-side-validation>npm install --save validator

//This provide the features like conditional class functionality
// <div className="form-group"> inplace of this
// <div className={classnames("form-group",{"has-error":errors.username})}>
C:\ReactJs\Tutorial\8_server-side-validation>npm install --save classnames
```
2) First create serverside route in server/index.js file,, we need to use json middleware body-parser
```
// import routes/users this file
import users from './routes/users';

// request body parser
import bodyParser from 'body-parser';

// as we are using json object for that we need to use json parser.
app.use(bodyParser.json())

// define here API for users, it takes the parameter users
app.use('api/users',users)


```

3) Create server/routes/users.js, whenever we need to create route we need to import express
```
import express from 'express';
// to parse the request data we need to install another middle ware body-parser
// use validator package/middleware to validate the inputs
import Validator from 'validator';
import {isEmpty} from 'lodash';

let router = express.Router();

function validateInputs(data) {
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

router.post('/', (req, res) => {
    console.log(req.body);
    const {errors, isValid} = validateInputs(req.body)
    console.log(errors);
    if (!isValid) {
        res .status(400)
            .json(errors);

    } else 
        res.status(200) .json(errors);
    }
);

export default router;


```
4) Modify the components/container/contents/Signupform.js to ad these validation and calling functionality
```
// Making ajax call from control

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


// Validation block

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


```