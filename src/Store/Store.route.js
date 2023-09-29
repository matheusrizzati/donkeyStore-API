const express = require('express')
const router = express.Router()

const checkToken = require('../middlewares/checkToken.middleware')

const createStore = require('./createStore.controller')
const listMyStores = require('./listMyStores.controller')
const getOneStore = require('./getOneStore.controller')
const getStoreByUrl = require('./getStoreByUrl.controller')


router.post('/', checkToken, createStore)
router.get('/', checkToken, listMyStores)
router.get('/:id', checkToken, getOneStore)
router.get('/url/:url', getStoreByUrl)

module.exports = router