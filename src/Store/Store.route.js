const express = require('express')
const router = express.Router()

const checkToken = require('../middlewares/checkToken.middleware')

const createStore = require('./createStore.controller')
const listMyStores = require('./listMyStores.controller')


router.post('/', checkToken, createStore)
router.get('/', checkToken, listMyStores)

module.exports = router