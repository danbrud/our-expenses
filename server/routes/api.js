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

router.post('/expense', async function(req, res, body) {
    const expense = new Expense(body)
    await expense.save()

    res.send("Saved expense!")
})

module.exports = router