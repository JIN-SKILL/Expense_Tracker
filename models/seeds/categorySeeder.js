const Category = require('../categorySchema')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create(
    {
      name: 'fas fa-home',
      tag: '家居物業'
    },
    {
      name: '交通出行',
      tag: 'fas fa-shuttle-van'
    },
    {
      name: '休閒娛樂',
      tag: 'fas fa-grin-beam'
    },
    {
      name: '餐飲食品',
      tag: 'fas fa-utensils'
    },
    {
      name: '其他',
      tag: 'fas fa-pen'
    }
  )
  console.log('Completed seed loading.')
})
