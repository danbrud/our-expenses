const Validator = require("validator");
const isEmpty = require("is-empty");

const Expense = require('../models/Expense')

const getExpensesByDate = async function (minDate, maxDate, accountId) {
  const expenses = await Expense.find({ accountId: accountId })
  return expenses
    .filter(e => e.date >= minDate && e.date < maxDate)
    .sort((a, b) => a.date - b.date)
}

const validateLoginInput = function(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Email field is required";
  } else if (!Validator.isEmail(data.username)) {
    errors.username = "Email is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateRegisterInput = function(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  
  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Email field is required";
  } else if (!Validator.isEmail(data.username)) {
    errors.username = "Email is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = { getExpensesByDate, validateLoginInput, validateRegisterInput }