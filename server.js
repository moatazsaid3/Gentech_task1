const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const mongoose = require("mongoose");

const api = require("./routes/api");
const productsModel = require("./models/products");

require("dotenv").config();
const port = process.env.PORT;
const uri = process.env.ATLAS_URI;

const numberOfFakeProducts = process.env.numberOfFakeProducts;

//app.use(cors());
app.use(express.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", async () => {
  //populate the database with Fake products

  // if the database has 0 products
  if ((await productsModel.countDocuments().exec()) == 0) {
    console.log("populating database .... please wait");
    for (var i = 0; i < numberOfFakeProducts; i++) {
      switch (i) {
        case 0.2 * numberOfFakeProducts:
          console.log("20% completed .... please wait");
          break;
        case 0.4 * numberOfFakeProducts:
          console.log("40% completed .... please wait");
          break;
        case 0.6 * numberOfFakeProducts:
          console.log("60% completed .... please wait");
          break;
        case 0.8 * numberOfFakeProducts:
          console.log("80% completed .... please wait");
          break;
      }

      await productsModel.create({
        name: "product " + i,
        seller: "amazon",
        price: 123,
        description: "a product",
      });
    }
    console.log(
      "database populated with " + numberOfFakeProducts + " fake products"
    );
  }

  console.log("mongoDB database connection established succesfully");
});

app.use("/api", api);
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
