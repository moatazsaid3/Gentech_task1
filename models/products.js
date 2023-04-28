const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Product",
  new Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      seller: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      description: { type: String, trim: true, minlenght: 3 },
      price: {
        type: Number,
        required: true,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  )
);
