const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const item = require('./modules/item')

router.use('/', home)
router.use('/item', item)

module.exports = router
