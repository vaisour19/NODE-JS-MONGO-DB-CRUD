const express = require('express');
const Product = require('../models/products.model.js')
const router = express.Router();
const {getProducts,getProductbyId,updateProductById, deleteProductbyId ,craeteProduct} = require('../controller/product.controller.js');


router.get('/', getProducts );
router.get('/:id',getProductbyId);
router.post('/',craeteProduct);
router.put('/:id',updateProductById);
router.delete('/:id',deleteProductbyId);

module.exports = router;