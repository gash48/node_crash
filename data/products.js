const productsData = {};

const updateCachedProducts = (prods = []) => {
  const data = {};
  prods.map(prod => {
    data[prod.id] = prod;
  })
  productsData["data"] = data; 
};

module.exports = {
  products: productsData,
  updateCachedProducts: updateCachedProducts
};
