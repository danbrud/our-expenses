const validator = require("validator");
const isEmpty = require("is-empty");

export const colors = [
    '#D4F2D2',
    '#BEB7DF',
    '#FDE8E9',
    '#70E4EF',
    '#DEF4C6',
    '#73E2A7',
    '#C3DFE0',
    '#4BA3C3',
    '#9C9990',
    '#CFD2B2',
    '#F78764',
    '#D7F9F1',
    '#FFD5FF'
]

export const API_URL = '' //'http://localhost:4000'

export const formatAmount = amount => new Intl.NumberFormat('en-US').format(amount)

export const validateLoginInput = function (data) {
    let errors = {}

    data.username = !isEmpty(data.username) ? data.username : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    if (validator.isEmpty(data.username)) {
        errors.username = 'Email field is required'
    } else if (!validator.isEmail(data.username)) {
        errors.username = 'Email is invalid'
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

export const validateRegisterInput = function (data) {
    let errors = {}

    data.username = !isEmpty(data.username) ? data.username : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.password2 = !isEmpty(data.password2) ? data.password2 : ''

    if (validator.isEmpty(data.username)) {
        errors.username = 'בבקשה להכניס מייל תקין'
    } else if (!validator.isEmail(data.username)) {
        errors.username = 'בבקשה להכניס מייל תקין'
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'סיסמא חייב להיות לפחות 6 ספרות'
    }
    if (validator.isEmpty(data.password2)) {
        errors.password2 = 'סיסמא 2 חייב להיות זהה לסיסמא 1'
    }
    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'סיסמא חייב להיות לפחות 6 ספרות'
    }
    if (!validator.equals(data.password, data.password2)) {
        errors.password2 = 'סיסמא 2 חייב להיות זהה לסיסמא 1'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}