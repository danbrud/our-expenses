const express = require('express')
const router = express.Router()

const Account = require('../models/Account')


router.get('/:accountId', async function (req, res) {
  const account = await Account.findOne({ _id: req.params.accountId })
  res.send(account)
})

router.put('/:accountId', async function (req, res) {
  const { accountId } = req.params
  const { fieldToUpdate, data, operation } = req.body

  const arrayOperation = operation === 'add' ? '$push' : '$pull'
  // const account = operation === 'add'
  //   ? await Account.findOneAndUpdate({ _id: accountId }, { $push: { [fieldToUpdate]: data } }, { new: true })
  //   : await Account.findOneAndUpdate({ _id: accountId }, { $pull: { [fieldToUpdate]: data } }, { new: true })
  const account = await Account.findOneAndUpdate(
    { _id: accountId }, { [arrayOperation]: { [fieldToUpdate]: data } }, { new: true }
  )

  res.send(account)
})

module.exports = router