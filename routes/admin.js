const express = require("express");
const router = express.Router();
const {
  allProductsPage,
  addProductPage,
  editProductPage,
  saveProductRequest
} = require("../controllers/admin");
const { admin: adminRoutes } = require("../constants/app-routes");

router.get(adminRoutes.products.route, allProductsPage);

router.get(adminRoutes.addProduct.route, addProductPage);

router.get(adminRoutes.editProduct.route, editProductPage);

router.post(adminRoutes.addProduct.route, saveProductRequest);

exports.router = router;
