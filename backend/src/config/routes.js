const express = require('express')
const Restaurant = require('../api/restaurant/restaurant.model')
const { get, getById, post } = require('../api/restaurant/restaurant.service')

module.exports = server => {
    server.get('/', (req, res, next) => {
        res.send('Bem vindo a api')
    })
    server.use('/teste', (req, res, next) => {
        res.send('Funcionou')
    })

    // server.get('/restaurants', (req, res, next) => {
    //     Restaurant.find().then(data => res.status(200).send(data))
    // })
    server.get('/restaurants', get)
    server.get('/restaurants/:id', getById)

    // server.post('/restaurants', (req, res, next) => {
    //     //res.send(req.body)
    //     let restaurant = new Restaurant(req.body)
    //     restaurant.save().then(() => res.status(200).send())
    // })

    server.post('/restaurants', post)
}