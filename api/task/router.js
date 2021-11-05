const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/tasks', (req, res, next) => {
    helpers.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/tasks', (req, res, next) => {
    helpers.postTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

module.exports = router
