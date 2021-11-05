require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
