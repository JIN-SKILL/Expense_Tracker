const Record = require('../recordSchema')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(
    {
      name: '牛肉麵',
      category: '餐飲食品',
      date: '2021/01/14',
      amount: 150
    },
    {
      name: 'Cyberpunk 2077',
      category: '休閒娛樂',
      date: '2021/01/16',
      amount: 1599
    }
  )
  console.log('Completed seed loading.')
})
