const Expense = require('../models/Expense')

const getExpensesByDate = async function (minDate, maxDate, accountId) {
  const expenses = await Expense.find({ accountId: accountId })
  return expenses
    .filter(e => e.date >= minDate && e.date < maxDate)
    .sort((a, b) => a.date - b.date)
}

module.exports = { getExpensesByDate }