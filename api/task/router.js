const express = require('express')
const helpers = require('./model')
const projects = require('../project/model')

const router = express.Router()

router.get('/tasks', (req, res, next) => {
    helpers.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/tasks', async (req, res, next) => {
    const { task_description, project_id } = req.body

    if (
        typeof project_id !== 'number' ||
        typeof task_description !== 'string' ||
        !task_description.trim().length) {
        next({
            message: 'project id and task description are required'
        })
    } else {
        const project = await projects.getProjectById(project_id)

        if (!project) {
            next({
                message: 'cannot find project'
            })
        } else {
            helpers.postTask(req.body)
                .then(task => {
                    res.status(201).json(task)
                })
                .catch(next)
        }

    }
})

module.exports = router
