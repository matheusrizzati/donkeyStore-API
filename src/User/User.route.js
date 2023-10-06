const express = require('express')
const router = express.Router()

const checkToken = require('../middlewares/checkToken.middleware')

const createUser = require('./createUser.controller')
const login = require('./login.controller')
const getUser = require('./getUser.controller')

router.post('/createUser', createUser)
router.post('/login', login)
router.get('/:id',checkToken, getUser)

module.exports = router