const fs = require("fs");
const dataParser = require("../util/data-parser");
const fp = require("../util/paths");
const filePath = fp("cart.json");

class Cart {
  // { products: { <id> : qty .... }, totalItems }
  static updateMyCart(id, count = 1, cb = null) {
    fs.readFile(filePath, function(err, data) {
      const saveData = dataParser.updatedCart(
        id,
        !err ? dataParser.isJsonString(data) : {},
        count
      );
      fs.writeFile(filePath, saveData, err => {
        cb(!err);
      });
    });
  }

  static fetchMyCart(cb) {
    fs.readFile(filePath, function(err, data) {
      if (err) {
        return cb(null, err);
      }
      const parsedData = dataParser.isJsonString(data);
      const cartData = dataParser.generateCartData(parsedData);
      cb(cartData);
    });
  }
}

module.exports = Cart;
