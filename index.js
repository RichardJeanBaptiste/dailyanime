const express = require('express')
const app = express()
const db = require('./db')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000
const quoteApi = require('./quotes')
const loginRoutes = require('./login')


require('dotenv').config()


app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, "main.html"))
})

app.use('/api', quoteApi)

app.use('/login', loginRoutes)


app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})
