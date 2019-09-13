const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const api = require('./server/routes/api')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/our-expenses", {
    useNewUrlParser: true
})

//CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.static(path.join(__dirname, '/dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', api)



const port = 4000
app.listen(port, function () {
    console.log('Server is up and running on port ' + port)
})