const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const url = 'mongodb://localhost/restaurants'
module.exports = mongoose.connect(url, { useNewUrlParser: true })

