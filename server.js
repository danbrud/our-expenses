const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()
const api = require('./server/routes/api')
const script = require('./server/scripts/script')
const useStrategy = require('./server/config/passport')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/our-expenses", {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
})

//CORS
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

//     next()
// })

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(passport.initialize())
useStrategy(passport)

app.use('/api', api)
app.use('/script', script)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = 4000
app.listen(process.env.PORT || port, function () {
    console.log('Server is up and running on port ' + port)
})