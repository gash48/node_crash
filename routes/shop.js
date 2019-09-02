const express = require("express");
const router = express.Router();
const {
  defaultPage,
  shopIndexPage,
  productListPage,
  productDetailPage,
  cartPage,
  checkoutPage
} = require("../controllers/shop");
const { shop: shopRoutes } = require("../constants/app-routes");

router.get("/", defaultPage);

router.get(shopRoutes.index.route, shopIndexPage);

router.get(shopRoutes.products.route, productListPage);

router.get(shopRoutes.productDetail.route, productDetailPage);

router.get(shopRoutes.cart.route, cartPage);

router.get(shopRoutes.checkout.route, checkoutPage);

module.exports = router;
