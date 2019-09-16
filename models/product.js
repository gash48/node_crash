const fs = require("fs");
const dataParser = require("../util/data-parser");
const fp = require("../util/paths");
const cachedProducts = require("../data/products.js");
const filePath = fp("products.json");

class Product {
  constructor({ title, price, image, desc }) {
    this.id = Math.ceil(Math.random() * 10000);
    this.title = title;
    this.price = price;
    this.image = image;
    this.desc = desc;
  }

  save() {
    const product = this;
    fs.readFile(filePath, function(err, data) {
      const saveData = JSON.stringify(
        !err ? [...dataParser.isJsonString(data), product] : [product]
      );
      fs.writeFile(filePath, saveData, err => {
        cachedProducts.updateCachedProducts(saveData);
        err ? console.log(err) : null;
      });
    });
  }

  static edit(product, cb) {
    fs.readFile(filePath, function(err, data) {
      const parsedData = dataParser.isJsonString(data);
      const newData = JSON.stringify(dataParser.updatedProducts(product, parsedData));
      fs.writeFile(filePath, newData, err => {
        cachedProducts.updateCachedProducts(newData);
        cb(!err);        
      });
    });
  }

  static fetchAll(cb) {
    // SyncReading
    // try {
    //   const products = fs.readFileSync(filePath);
    //   return JSON.parse(products);
    // } catch (err) {
    //   return [];
    // }

    // A-Sync Reading
    fs.readFile(filePath, (err, data) => {
      if (err) {
        cb([], err);
      }
      const parsedData = dataParser.isJsonString(data);
      cachedProducts.updateCachedProducts(parsedData);
      cb(parsedData);
    });
  }

  static fetchById(id, cb) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        cb(null);
      }
      const products = dataParser.isJsonString(data);
      cb(products.find(prod => prod.id == id));
    });
  }

  static deleteById(id, cb) {
    fs.readFile(filePath, function(err, data) {
      if (err) {
        cb(err);
      }
      const products = dataParser
        .isJsonString(data)
        .filter(prod => prod.id != id);
      const saveData = JSON.stringify(products);
      fs.writeFile(filePath, saveData, err => {
        cb(err);
        cachedProducts.updateCachedProducts(saveData);
        err ? console.log(err) : null;
      });
    });
  }
}

module.exports = Product;
