const express = require('express')
const router = express.Router()
const { getDocsByDate, getMinMaxDate } = require('../utils/utilFunctions')

const Income = require('../models/Income')
const Account = require('../models/Account')

router.post('/', async function (req, res) {
  const income = new Income(req.body)
  await income.save()
  await Account.findOneAndUpdate({ _id: income.accountId }, { $push: { incomes: income._id } })

  res.send(income)
})

router.get('/:accountId', async function (req, res) {
  const { date } = req.query
  const { accountId } = req.params

  const { minDate, maxDate } = getMinMaxDate(date)

  const expenses = date
      ? await getDocsByDate(minDate, maxDate, accountId, Income)
      : await Income.find({ accountId })

  res.send(expenses)
})

router.delete('/:incomeId', async function (req, res) {
  const income = await Income.findOneAndDelete({ _id: req.params.incomeId })
  await Account.findOneAndUpdate({ _id: income.accountId }, { $pull: { incomes: income._id } })

  res.send(income)
})

module.exports = router