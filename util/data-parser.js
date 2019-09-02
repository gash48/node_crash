const isJsonString = str => {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = {
  isJsonString
};
