const express = require('express')
const router = express.Router()

const Record = require('../../models/recordSchema')

router.get('/', (req, res) => {
  return Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})

module.exports = router
