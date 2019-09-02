const express = require("express");
const router = express.Router();
const { notFoundPage } = require('../controllers/error');

router.use(notFoundPage);

module.exports = router;
