const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const userRouter = require('./routes/userRouter')

mongoose.connect(
    'mongodb://localhost:27017/actosoft-test',
    {useNewUrlParser: true, useFindAndModify: false}
)
    .then((connection) => {
        console.log(`Connected to Mongo database "${connection.connections[0].name}"`)
    })
    .catch((error) => {
            console.error('error connecting to mongo')
            console.error
    })

const app = express()
app.use('/users', userRouter)
const server = http.createServer(app)

server.listen(5000, () => {
    console.log('app running on port 5000')
})