import express from 'express';
// to parse the request data we need to install another middle ware body-parser
// use validator package/middleware to validate the inputs
import {validateInputs} from '../shared/validations/signup';
let router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const {errors, isValid} = validateInputs(req.body)
    console.log(errors);
    if (!isValid) {
        res
            .status(400)
            .json(errors);

    } else 
        res
            .status(200)
            .json(errors);
    }
);

export default router;
