const express = require('express')
const router = express.Router()

const Record = require('../../models/recordSchema')

router.get('/', (req, res) => {
  return Record.find()
    .lean()
    .then(records => {
      let total = 0
      records.forEach(item => total += item.amount)
      res.render('index', { records , total })
    })

    .catch(error => console.log(error))
})

module.exports = router
