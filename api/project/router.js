const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/projects', (req, res, next) => {
    helpers.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/projects', (req, res, next) => {
    helpers.postProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router
