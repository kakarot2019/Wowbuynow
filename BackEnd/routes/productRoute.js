const express = require('express');
const { getAllProducts, createproduct, updateproducts, deleteproduct, getproductdetails } = require('../controllers/productcontrollers');
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createproduct);
router.route("/product/:id").put(updateproducts).delete(deleteproduct).get(getproductdetails);

module.exports=router;