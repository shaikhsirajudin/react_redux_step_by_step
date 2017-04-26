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
