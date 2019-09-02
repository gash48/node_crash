const Product = require("../models/product");
const {
  admin: adminRoutes,
  shop: shopRoutes
} = require("../constants/app-routes");

const addProductPage = (req, res, next) => {
  res.render(adminRoutes.addProduct.view, {
    pageTitle: adminRoutes.addProduct.name,
    path: adminRoutes.addProduct.route
  });
};

const saveProductRequest = (req, res, next) => {
  new Product(req.body).save();
  res.redirect(shopRoutes.index.route);
};

const editProductPage = (req, res, next) => {
  res.render(adminRoutes.editProduct.view, {
    pageTitle: adminRoutes.editProduct.name,
    path: adminRoutes.editProduct.route
  });
};

const allProductsPage = (req, res, next) => {
  Product.fetchAll(products => {
    res.render(adminRoutes.products.view, {
      pageTitle: adminRoutes.products.name,
      path: adminRoutes.products.route,
      prods: products
    });
  });
};

module.exports = {
  addProductPage,
  saveProductRequest,
  editProductPage,
  allProductsPage
};
