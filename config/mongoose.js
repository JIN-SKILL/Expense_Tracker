const mongoose = require('mongoose')
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/expense-tracker'
const db = mongoose.connection

mongoose.connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
db.on('error', () => { console.log('mongoDB error!') })
db.once('open', () => { console.log('mongoDB connected.') })

module.exports = db
