const express = require('express')
const helmet = require('helmet')
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api', resourceRouter)
server.use('/api', projectRouter)
server.use('/api', taskRouter)

server.get('/', (req, res) => {
    res.send(`<h2>This is Sprint Challenge!</h2>`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server
