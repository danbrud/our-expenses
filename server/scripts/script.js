const express = require('express')
const router = express.Router()

const Account = require('../models/Account')
const Expense = require('../models/Expense')

router.get('/migrate/:accountId', async (req, res) => {
    const { accountId } = req.params
    const account = await Account.findOne({ _id: accountId })

    let expenses = require('./expenses-dump.json')
    expenses = expenses.map(e => new Expense({
        user: e.user,
        expense: e.expense,
        amount: e.amount,
        category: e.category,
        date: new Date(e.date),
        accountId: account

    }))

    const promises = []
    for (let expense of expenses) {
        promises.push(expense.save())
    }

    const { users, categories } = require('./data')
    Promise.all(promises).then(async () => {
        const user = await Account.findOneAndUpdate({ _id: accountId }, { $push: { expenses, users, categories }  }, { new: true })
        res.send(user)
    })
})

module.exports = router