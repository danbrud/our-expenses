const express = require('express')
const router = express.Router()

const Expense = require('../models/Expense')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/expenses', async function(req, res) {
    let date, currentMonth = req.query.month, minDate, maxDate 
    
    if(currentMonth) {
        date = new Date()
        currentMonth = parseInt(currentMonth)
        minDate = new Date(date.getFullYear(), currentMonth, 2)
        maxDate = new Date(date.getFullYear(), currentMonth + 1, 0)
        maxDate.setDate(maxDate.getDate() + 1)
    }
    
    const expenses = currentMonth 
        ? await Expense.find({ date: { $gte: minDate, $lte: maxDate }}) 
        : await Expense.find({})

    res.send(expenses)
})

router.post('/expense', async function(req, res) {
    const expense = new Expense(req.body)
    const savedExpense = await expense.save()

    res.send(savedExpense)
})

module.exports = router