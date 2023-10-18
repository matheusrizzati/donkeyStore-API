const express = require('express')
const router = express.Router()

const checkToken = require('../middlewares/checkToken.middleware')

const createCategory = require('./createCategory.controller')
const getCategorys = require('./getCategorys.controller')
const deleteCategory = require('./deleteCategory.controller')

router.post('/', checkToken, createCategory)
router.get('/', getCategorys)
router.delete('/:id', checkToken, deleteCategory)

module.exports = router