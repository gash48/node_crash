const { error: errorRoutes } = require("../constants/app-routes");

const notFoundPage = (req, res, next) => {
  res.render(errorRoutes.notFound.view, {
    pageTitle: errorRoutes.notFound.name,
    path: errorRoutes.notFound.route
  });
};

module.exports = {
  notFoundPage
};
