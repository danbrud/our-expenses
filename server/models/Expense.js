const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    user: String,
    expense: String,
    amount: Number,
    category: String,
    date: Date
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense