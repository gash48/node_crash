const express = require("express");
const router = express.Router();
const {
  allProductsPage,
  addProductPage,
  editProductPage,
  deleteProductRequest,
  saveProductRequest
} = require("../controllers/admin");
const { admin: adminRoutes } = require("../constants/app-routes");

router.get(adminRoutes.products.route, allProductsPage);

router.get(adminRoutes.addProduct.route, addProductPage);

router.get(adminRoutes.editProduct.route, editProductPage);

router.get(adminRoutes.deleteProduct.route, deleteProductRequest)

router.post(adminRoutes.addProduct.route, saveProductRequest);

exports.router = router;
