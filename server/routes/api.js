const express = require('express')
const router = express.Router()
const getExpensesByDate = require('../utils/utilFunctions').getExpensesByDate

const Expense = require('../models/Expense')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/expenses', async function(req, res) {
    let minDate, maxDate, currentDate = req.query.date

    if(currentDate) {
        currentDate = new Date(currentDate)
        minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
        maxDate.setDate(maxDate.getDate() + 1)
    }

    const expenses = currentDate
        ? await getExpensesByDate(minDate, maxDate)
        : await Expense.find({})

    res.send(expenses)
})

router.post('/expense', async function(req, res) {
    const expense = new Expense(req.body)
    const savedExpense = await expense.save()

    res.send(savedExpense)
})

router.delete('/expenses/:id', async function(req, res) {
    const expense = await Expense.findOneAndDelete({_id: req.params.id})
    res.send(expense)
})

module.exports = router