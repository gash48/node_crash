const path = require("path");
const rootDir = path.dirname(process.mainModule.filename);

const pathFormatter = (filePath = "") => {
  return path.join(...[rootDir, ...filePath.split('/')]);
};

module.exports = pathFormatter;
