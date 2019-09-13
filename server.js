const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()
const api = require('./server/routes/api')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/our-expenses", {
    useNewUrlParser: true
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