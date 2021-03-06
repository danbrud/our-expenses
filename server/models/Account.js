const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
    username: String,
    password: String,
    expenses: [{type: Schema.Types.ObjectId, ref: 'Expense'}],
    users: [String],
    categories: [String],
    incomes: [{type: Schema.Types.ObjectId, ref: 'Income'}]
})

const Account = mongoose.model('Account', accountSchema)

module.exports = Account