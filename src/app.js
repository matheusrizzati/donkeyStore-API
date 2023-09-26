//dependencies
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//port
const PORT = process.env.PORT
// app.use
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const AuthRoute = require('./Auth/Auth.route')
const StoreRoute = require('./Store/Store.route')

app.use('/auth', AuthRoute)
app.use('/store', StoreRoute)

app.get('/', (req, res) => {
    res.send("Hello Word! Testing deploy")
})

//conecting
dbUser = process.env.DBUSER
dbPass = process.env.DBPASS
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.rhec6zw.mongodb.net/`).then(
    () => {console.log("Banco de dados conectado")}
).then(
    () => {
        app.listen(PORT, () => { console.log('server runing in port ' +PORT)})
    }
)

module.exports = app