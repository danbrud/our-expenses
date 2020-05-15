const validator = require("validator")
const isEmpty = require("is-empty")

const getDocsByDate = async function (minDate, maxDate, accountId, Model) {
  const docs = await Model.find({ accountId })

  return docs
    .filter(d => d.date >= minDate && d.date < maxDate)
    .sort((a, b) => a.date - b.date)
}

const getMinMaxDate = function (currentDate) {
  const dates = { minDate: null, maxDate: null }

  if (currentDate) {
    currentDate = new Date(currentDate)
    dates.minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    dates.maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    dates.maxDate.setDate(dates.maxDate.getDate() + 1)
  }

  return dates
}

const validateLoginInput = function (data) {
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

const validateRegisterInput = function (data) {
  let errors = {}

  data.username = !isEmpty(data.username) ? data.username : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.password2 = !isEmpty(data.password2) ? data.password2 : ''

  if (validator.isEmpty(data.username)) {
    errors.username = 'Email field is required'
  } else if (!validator.isEmail(data.username)) {
    errors.username = 'Email is invalid'
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password field is required'
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters'
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = { getDocsByDate, getMinMaxDate, validateLoginInput, validateRegisterInput }