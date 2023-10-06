const express = require('express')
const router = express.Router()

const checkToken = require('../middlewares/checkToken.middleware')

const createProduct = require('./createProduct.controller')
const getProducts = require('./getProducts.controller')
const getOneProduct = require('./getOneProduct.controller')
const updateProduct = require('./updateProduct.controller')
const deleteProduct = require('./deleteProduct.controller')

router.post('/', checkToken, createProduct)
router.get('/', checkToken, getProducts)
router.get('/:id', checkToken, getOneProduct)
router.put('/:id', checkToken, updateProduct)
router.delete('/:id', checkToken, deleteProduct)


module.exports = router