const express = require('express')
const helpers = require('./model')
const { validatePost } = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    helpers.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', validatePost, async (req, res, next) => {
            helpers.postTask(req.body)
                .then(task => {
                    res.status(201).json(task)
                })
                .catch(next)
        }
)

module.exports = router
