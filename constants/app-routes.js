module.exports = {
  shop: {
    index: { route: "/shop", name: "Shop", view: "shop/index" },
    products: {
      route: "/shop/product-list",
      name: "Products",
      view: "shop/product-list"
    },
    productDetail: {
      route: "/shop/product-detail/:productId",
      name: "Product Detail",
      view: "shop/product-detail"
    },
    cart: { route: "/shop/cart", name: "Cart", view: "shop/cart" },
    checkout: {
      route: "/shop/checkout",
      name: "Checkout",
      view: "shop/checkout"
    }
  },
  admin: {
    products: {
      route: "/admin/products",
      name: "Admin Products",
      view: "admin/products"
    },
    addProduct: {
      route: "/admin/add-product",
      name: "Add Product",
      view: "admin/add-product"
    },
    editProduct: {
      route: "/admin/edit-product/:productId",
      name: "Edit Product",
      view: "admin/edit-product"
    },
    deleteProduct: {
      route: "/admin/delete-product/:productId",
      name: "Delete Product"
    }
  },
  error: {
    notFound: { route: "404", name: "Not Found", view: "error/not-found" }
  }
};
