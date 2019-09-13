const express = require('express')
const request = require('request')
const router = express.Router()

const Expense = require('../models/Expense')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})


module.exports = router