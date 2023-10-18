const express = require('express')
const router = express.Router()

const checkToken = require('../middlewares/checkToken.middleware')

const createCupom = require('./createCupom.controller')
const getCupoms = require('./getCupoms.controller')
const getOneCupom = require('./getOneCupom.controller')
const updateCupom = require('./updateCupom.controller')
const deleteCupom = require('./deleteCupom.controller')

router.post('/', checkToken, createCupom)
router.get('/', getCupoms)
router.get('/:id', getOneCupom)
router.put('/:id', checkToken, updateCupom)
router.delete('/:id', checkToken, deleteCupom)

module.exports = router