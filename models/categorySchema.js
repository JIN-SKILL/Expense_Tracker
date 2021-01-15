const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tag: String
})

module.exports = mongoose.model('Category', categorySchema)
