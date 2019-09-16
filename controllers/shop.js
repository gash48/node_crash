const Product = require("../models/product");
const Cart = require("../models/cart");
const {
  shop: shopRoutes,
  error: errorRoutes
} = require("../constants/app-routes");

const defaultPage = (req, res, next) => {
  res.redirect(shopRoutes.index.route);
};

const shopIndexPage = (req, res, next) => {
  Product.fetchAll(products => {
    res.render(shopRoutes.index.view, {
      pageTitle: shopRoutes.index.name,
      prods: products,
      isAdmin: false,
      path: shopRoutes.index.route
    });
  });
};

const productListPage = (req, res, next) => {
  Product.fetchAll(products => {
    res.render(shopRoutes.products.view, {
      pageTitle: shopRoutes.products.name,
      prods: products,
      isAdmin: false,
      path: shopRoutes.products.route
    });
  });
};

const productDetailPage = (req, res, next) => {
  Product.fetchById(req.params.productId, product => {
    if (product) {
      res.render(shopRoutes.productDetail.view, {
        pageTitle: shopRoutes.productDetail.name,
        path: shopRoutes.productDetail.route,
        product
      });
    } else {
      res.redirect(errorRoutes.notFound.route);
    }
  });
};

const cartPage = (req, res, next) => {
  const { id, count } = req.query;
  if (id) {
    Cart.updateMyCart(id, count, success => {
      if (success) {
        Cart.fetchMyCart(data => {
          res.render(shopRoutes.cart.view, {
            pageTitle: shopRoutes.cart.name,
            path: shopRoutes.cart.route,
            myCart: data
          });
        });
      }
    });
  } else {
    Cart.fetchMyCart(data => {
      res.render(shopRoutes.cart.view, {
        pageTitle: shopRoutes.cart.name,
        path: shopRoutes.cart.route,
        myCart: data
      });
    });
  }
};

const checkoutPage = (req, res, next) => {
  res.render(shopRoutes.checkout.view, {
    pageTitle: shopRoutes.checkout.name,
    path: shopRoutes.checkout.route
  });
};

module.exports = {
  defaultPage,
  shopIndexPage,
  productListPage,
  productDetailPage,
  cartPage,
  checkoutPage
};
