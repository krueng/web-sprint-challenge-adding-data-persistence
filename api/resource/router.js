const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/resources', (req, res, next) => {
    helpers.getRecources()
        .then(recources => {
            res.status(200).json(recources)
        })
        .catch(next)
});

router.post('/resources', (req, res, next) => {
    helpers.postRecource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

module.exports = router
