const Restaurant = require('./restaurant.model')

const get = (req, res, next) => {
    Restaurant.find()
        .populate('menu')
        .then(data => {
            //console.log(data)
            res.status(200).send(data)
        })
}

const getById = (req, res, next) => {
    Restaurant.findById({ _id: req.params.id })
        .populate('menu')
        .then(data => {
            res.status(200).send(data)
        })
}

const post = (req, res, next) => {
    let restaurant = new Restaurant(req.body)
    restaurant.save().then(() => res.status(200).send())
}

module.exports = { get, getById, post }