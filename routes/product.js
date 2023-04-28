const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const pagination = require("../utilities/pagination");
const productsModel = require("../models/products");

router.post(
  "/createProduct",
  [],
  asyncHandler(async (req, res) => {
    try {
      let product = {
        name: req.body.name,
        seller: req.body.seller,
        description: req.body.description,
        price: req.body.price,
      };
      const respons = await productsModel.create(product);
      res.json(respons);
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
