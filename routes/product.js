const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const pagination = require("../utilities/pagination");
const productsModel = require("../models/products");
const testfunction = require("../test/getRequest");

router.get(
  "/testProduct",
  [],
  asyncHandler(async (req, res) => {
    try {
      console.log("hello");
      res.json(testfunction());
    } catch (error) {}
  })
);

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
