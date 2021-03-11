const Category = require('../categorySchema')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create(
    {
      name: '家居物業',
      icon: 'fas fa-home'
    },
    {
      name: '交通出行',
      icon: 'fas fa-shuttle-van'
    },
    {
      name: '休閒娛樂',
      icon: 'fas fa-grin-beam'
    },
    {
      name: '餐飲食品',
      icon: 'fas fa-utensils'
    },
    {
      name: '其他',
      icon: 'fas fa-pen'
    }
  ).then(() => {
    console.log('Completed seed loading.')
    return db.close()
  }).then(() => {
    console.log('Datebase connection close.')
  })
})
