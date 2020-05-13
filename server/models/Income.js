const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = new Schema({
  user: String,
  name: String,
  amount: Number,
  date: Date,
  accountId: { type: Schema.Types.ObjectId, ref: 'Account' }
})

const Income = mongoose.model('Income', incomeSchema)

module.exports = Income