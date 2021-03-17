const express = require('express')
const router = express.Router()

const Record = require('../../models/recordSchema')
const Category = require('../../models/categorySchema')

router.get('/', (req, res) => {
  let currentCategory = "顯示全部分類"
  return Record.find()
    .lean()
    .then(items => {
      let total = 0
      items.forEach(item => total += item.amount)
      Category.find()
        .lean()
        .then(category => {
          res.render('index', { items, currentCategory, total, category })
        })
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const category = req.body.category
  let categoryArr = []
  categoryArr = categoryArr.concat(category.split(','))
  if (categoryArr.length === 2) {
    return Record.find()
    .lean()
    .then(data => {
      let items = data.filter(item => item.category === categoryArr[0])
      let total = 0
      items.forEach(item => total += item.amount)
      Category.find()
      .lean()
      .then(categoryItem => {
        currentCategory = categoryArr[0]
        const newCategories = categoryItem.filter(ele => ele.name !== categoryArr[0])
        res.render('index', { items, currentCategory, total, category: newCategories })
      })
    })
    .catch(error => console.log(error))
  } else {
    return Record.find()
    .lean()
    .then(items => {
      let total = 0
      items.forEach(item => total += item.amount)
      Category.find()
        .lean()
        .then(category => {
          currentCategory = "顯示全部分類"
          res.render('index', { items, currentCategory, total, category })
        })
    })
    .catch(error => console.log(error))
  }
})

module.exports = router
