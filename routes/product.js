const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const pagination = require("../utilities/pagination");
const productsModel = require("../models/products");

router.get(
  "/getProducts",
  [pagination(productsModel)],
  asyncHandler((req, res) => {
    try {
      res.json(res.paginatedResults);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

module.exports = router;
