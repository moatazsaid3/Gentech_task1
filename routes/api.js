const router = require("express").Router();
const productRoute = require("./product");

router.use("/product", productRoute);

module.exports = router;
