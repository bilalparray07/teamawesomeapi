require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/product");
const productFromJson = require("./product.json");
const express = require("express");
const app = express();
const port = 6000;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(productFromJson);
    app.listen(port, () => {
      console.log("Data Created");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
