import Validator from "Validator";
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if(Validator.isEmail(data.email)) {
        errors.email = 'This field is required';
    }

    if(Validator.isStrongPassword(data.password)) {
        errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}