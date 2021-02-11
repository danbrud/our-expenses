const express = require('express')
const router = express.Router()
const { getDocsByDate, getMinMaxDate } = require('../utils/utilFunctions')
const auth = require('../middleware/auth')

const Expense = require('../models/Expense')

router.use(auth)


router.get('/:accountId', async function (req, res) {
  const { date } = req.query
  const { accountId } = req.params

  const { minDate, maxDate } = getMinMaxDate(date)

  const expenses = date
      ? await getDocsByDate(minDate, maxDate, accountId, Expense)
      : await Expense.find({ accountId })

  res.send(expenses)
})

router.post('/', async function (req, res) {
  const expense = new Expense(req.body)
  await expense.save()
  await Account.findOneAndUpdate({ _id: expense.accountId }, { $push: { expenses: expense._id } })

  res.send(expense)
})

router.delete('/:expenseId', async function (req, res) {
  const expense = await Expense.findOneAndDelete({ _id: req.params.expenseId })
  await Account.findOneAndUpdate({ _id: expense.accountId }, { $pull: { expenses: expense._id } })

  res.send(expense)
})

module.exports = router