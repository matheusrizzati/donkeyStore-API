const express = require('express')
const router = express.Router()

const checkToken = require('../middlewares/checkToken.middleware')
const multer = require('multer')
const multerConfig = require('../config/multer')

const createProduct = require('./createProduct.controller')
const getProducts = require('./getProducts.controller')
const getOneProduct = require('./getOneProduct.controller')
const updateProduct = require('./updateProduct.controller')
const deleteProduct = require('./deleteProduct.controller')

router.post('/', checkToken
, multer(multerConfig).single('file')
, createProduct)
router.get('/', getProducts)
router.get('/:id', getOneProduct)
router.put('/:id', checkToken, updateProduct)
router.delete('/:id', checkToken, deleteProduct)


module.exports = router