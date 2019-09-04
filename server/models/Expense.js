const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    date: Date,
    description: String,
    paymentMethod: String,
    amount: Number
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense