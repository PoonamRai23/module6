const path = require('path');

const express = require('express');

const productController= require('../controllers/prouducts')

const router = express.Router();

router.get('/', productController.getproducts);


module.exports = router;
