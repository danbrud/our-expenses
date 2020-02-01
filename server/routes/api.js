const express = require('express')
const router = express.Router()
const getExpensesByDate = require('../utils/utilFunctions').getExpensesByDate

const Account = require('../models/Account')
const Expense = require('../models/Expense')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/expenses/:accountId', async function(req, res) {
    let minDate, maxDate, currentDate = req.query.date

    if(currentDate) {
        currentDate = new Date(currentDate)
        minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
        maxDate.setDate(maxDate.getDate() + 1)
    }

    const accountId = req.params.accountId
    const expenses = currentDate
        ? await getExpensesByDate(minDate, maxDate, accountId)
        : await Expense.find({ accountId: accountId })

    res.send(expenses)
})

router.post('/expense', async function(req, res) {
    const expense = new Expense(req.body)
    await expense.save()
    await Account.findOneAndUpdate({ _id: expense.accountId }, { $push: { expenses: expense._id }})
    
    res.send(expense)
})

router.delete('/expenses/:id', async function(req, res) {
    const expense = await Expense.findOneAndDelete({_id: req.params.id})
    await Account.findOneAndUpdate({ _id: expense.accountId }, { $pull: { expenses: expense._id }})

    res.send(expense)
})

router.post('/accounts', async function(req, res) {
    const account = new Account(req.body)
    await account.save()
    res.send(account)
})

router.get('/accounts/:username', async function(req, res) {
    // Account.findOne({ username: req.params.username }).populate('expenses').exec(function(err, account) {
    //     res.send(account)
    // })

    const account = await Account.find({ username: req.params.username })
    res.send(account)
})

router.put('/accounts', async function(req, res) {
    const { fieldToUpdate, accountId, data } = req.body
    const account = await Account.findOneAndUpdate({ _id: accountId }, { $push: { [fieldToUpdate]: data } }, { new: true }) 

    res.send(account)
})

module.exports = router