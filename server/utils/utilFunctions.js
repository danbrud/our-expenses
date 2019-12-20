const Expense = require('../models/Expense')

const getExpensesByDate = async function (minDate, maxDate) {
  const expenses = await Expense.find({})
  return expenses
    .filter(e => e.date >= minDate && e.date < maxDate)
    .sort((a, b) => a.date - b.date)
}

module.exports = { getExpensesByDate }