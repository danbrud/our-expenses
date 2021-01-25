const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { getDocsByDate, getMinMaxDate, validateLoginInput, validateRegisterInput } = require('../utils/utilFunctions')
const { secretOrKey } = require('../config/config')

const Account = require('../models/Account')
const Expense = require('../models/Expense')
const Income = require('../models/Income')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/expenses/:accountId', async function (req, res) {
    const { date } = req.query
    const { accountId } = req.params

    const { minDate, maxDate } = getMinMaxDate(date)

    const expenses = date
        ? await getDocsByDate(minDate, maxDate, accountId, Expense)
        : await Expense.find({ accountId })

    res.send(expenses)
})

router.post('/expenses', async function (req, res) {
    const expense = new Expense(req.body)
    await expense.save()
    await Account.findOneAndUpdate({ _id: expense.accountId }, { $push: { expenses: expense._id } })

    res.send(expense)
})

router.delete('/expenses/:id', async function (req, res) {
    const expense = await Expense.findOneAndDelete({ _id: req.params.id })
    await Account.findOneAndUpdate({ _id: expense.accountId }, { $pull: { expenses: expense._id } })

    res.send(expense)
})

router.post('/incomes', async function (req, res) {
    const income = new Income(req.body)
    await income.save()
    await Account.findOneAndUpdate({ _id: income.accountId }, { $push: { incomes: income._id } })

    res.send(income)
})

router.get('/incomes/:accountId', async function (req, res) {
    const { date } = req.query
    const { accountId } = req.params

    const { minDate, maxDate } = getMinMaxDate(date)

    const expenses = date
        ? await getDocsByDate(minDate, maxDate, accountId, Income)
        : await Income.find({ accountId })

    res.send(expenses)
})

router.delete('/incomes/:id', async function (req, res) {
    const income = await Income.findOneAndDelete({ _id: req.params.id })
    await Account.findOneAndUpdate({ _id: income.accountId }, { $pull: { incomes: income._id } })

    res.send(income)
})

router.post('/accounts', async function (req, res) {
    const account = new Account(req.body)
    await account.save()
    res.send(account)
})

router.get('/accounts/:id', async function (req, res) {
    // Account.findOne({ username: req.params.username }).populate('expenses').exec(function(err, account) {
    //     res.send(account)
    // })

    const account = await Account.findOne({ _id: req.params.id })
    res.send(account)
})

router.put('/accounts/:accountId', async function (req, res) {
    const { accountId } = req.params
    const { fieldToUpdate, data, operation } = req.body
    const account = operation === 'add'
        ? await Account.findOneAndUpdate({ _id: accountId }, { $push: { [fieldToUpdate]: data } }, { new: true })
        : await Account.findOneAndUpdate({ _id: accountId }, { $pull: { [fieldToUpdate]: data } }, { new: true })

    res.send(account)
})

router.post('/register', async function (req, res) {
    const body = req.body
    const { errors, isValid } = validateRegisterInput(body)

    if (!isValid) { return res.status(400).json(errors) }

    const account = await Account.findOne({ username: body.username })
    if (account) {
        return res.status(400).json({ error: 'Email already exists' })
    } else {
        const newAccount = new Account({
            username: body.username,
            password: body.password,
            expenses: [],
            users: body.users,
            categories: body.categories
        })

        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newAccount.password, salt, (err, hash) => {
                if (err) { throw err }

                newAccount.password = hash
                newAccount
                    .save()
                    .then(account => res.send(account))
                    .catch(err => console.log(err))
            })
        })
    }
})

router.post('/login', async function (req, res) {
    const { username, password } = req.body
    const { errors, isValid } = validateLoginInput({ username, password })

    if (!isValid) { return res.status(400).json(errors) }

    const account = await Account.findOne({ username })
    if (!account) { return res.status(404).json({ error: 'Email not found' }) }

    bcrypt.compare(password, account.password).then(isMatch => {
        if (isMatch) {
            const payload = {
                _id: account._id,
                users: account.users,
                expenses: account.expenses,
                categories: account.categories
            }

            jwt.sign(
                payload,
                secretOrKey,
                {
                    expiresIn: 31556926
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                }
            )
        } else {
            return res
                .status(400)
                .json({ error: 'Password incorrect' });
        }
    })
})

module.exports = router