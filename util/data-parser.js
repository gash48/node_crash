const CachedProducts = require("../data/products");

const isJsonString = str => {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.log(err);
    return [];
  }
};

const updatedProducts = (product, data) => {
  return data.map(prod => {
    if (prod.id == product.id) {
      return product;
    }
    return prod;
  });
};

const updatedCart = (
  id,
  { products: currCartProducts = {}, totalItems: currCartItems = 0 },
  count
) => {
  count = parseInt(count, 10);
  const products = {
    ...currCartProducts,
    ...{ [id]: id in currCartProducts ? currCartProducts[id] + count : count }
  };
  !products[id] ? delete products[id] : null;
  return JSON.stringify({
    products: Object.keys(products).length ? products : null,
    totalItems: currCartItems + count
  });
};

const generateCartData = ({products: cartProducts = {}, totalItems}) => {
  debugger;
  const data = [];
  let totalPrice = 0;
  Object.keys(cartProducts).map(prodId => {
    const product = CachedProducts.products.data[prodId];
    const quantity = parseInt(cartProducts[prodId]);
    const grossPrice = parseFloat(product.price) * quantity;
    data.push({
      ...product,
      quantity: parseInt(cartProducts[prodId]),
      totalPrice: grossPrice
    });
    totalPrice += grossPrice;
  });
  return {
    data,
    totalPrice,
    totalItems
  };
};

const calculateCartItems = (cart = {}) => {
  let cartItems = 0;
  Object.keys(cart).map(id => {
    cartItems += parseInt(cart[id], 10);
  });
  return cartItems;
};

module.exports = {
  isJsonString,
  updatedProducts,
  updatedCart,
  generateCartData
};
