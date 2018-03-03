const express = require('express')
const bodyParser = require('body-parser')
const htmlRouter = require('./app/routing/htmlRoutes')
const apiRoutes = require('./app/routing/apiRoutes')

const app = express()

app.use(bodyParser.json())
app.use(express.static('app/public'))
app.use(htmlRouter)
app.use('/api', apiRoutes)
app.listen(3000, (req, res) => console.log('App running on port: 3000'))