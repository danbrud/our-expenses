const express = require('express')
const router = express.Router()

const Expense = require('../models/Expense')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/expenses', async function(req, res) {
    const expenses = await Expense.find({})
    res.send(expenses)
})

router.post('/expense', async function(req, res) {
    const expense = new Expense(req.body)
    const savedExpense = await expense.save()

    res.send(savedExpense)
})

module.exports = router