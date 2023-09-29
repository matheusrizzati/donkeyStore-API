const express = require('express')
const router = express.Router()

const createUser = require('./createUser.controller')
const login = require('./login.controller')

router.post('/createUser', createUser)
router.post('/login', login)

module.exports = router