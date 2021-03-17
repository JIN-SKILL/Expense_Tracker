const express = require('express')
const router = express.Router()

const Item = require('../../models/recordSchema')
const Category = require('../../models/categorySchema')

// create
router.get('/add', (req, res) => {
  Category.find()
    .lean()
    .then(category => {
      return res.render('add', { category })
    })
})

router.post('/', (req, res) => {
  let { name, date, category, amount } = req.body
  let categoryArr = []
  categoryArr = categoryArr.concat(category.split(','))
  date = date.replace(/-/g, '/')
  return Item.create({
    name: name,
    date: date,
    category: categoryArr[0],
    amount: amount,
    icon: categoryArr[1]
  })
  .then(() => res.redirect('/'))
  .catch(error => console.log(error))
})

// update
router.get('/edit/:id', (req, res) => {
  const id = req.params.id
  return Item.findById(id)
    .lean()
    .then(item => {
      Category.find()
        .lean()
        .then(categoryItem => {
          const newCategories = categoryItem.filter(ele => ele.name !== item.category)
          res.render('edit', { item, category: newCategories })
        })
    })
    .catch(error => console.log(error))
})

router.put('/:id',(req, res) => {
  const id = req.params.id
  let { name, category, date, amount} = req.body
  let categoryArr = []
  categoryArr = categoryArr.concat(category.split(','))
  date = date.replace(/-/g, '/')
  return Item.findById(id)
    .then(item => {
      item.name = name
      item.category = categoryArr[0]
      item.date = date
      item.amount = amount
      item.icon = categoryArr[1]
      return item.save()
    })
    .then(() => { return res.redirect('/') })
    .catch(error => console.log(error))
})

// delete
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  return Item.findById(id)
    .then(item => item.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// sort


module.exports = router
