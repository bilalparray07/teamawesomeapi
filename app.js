require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const product_route = require("./routes/product");
const connectDB = require("./db/connect");
const { default: mongoose } = require("mongoose");
const Product = require("./model/product");
const productFromJson = require("./product.json");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/api/products", product_route);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(productFromJson);
    app.listen(port, () => {
      console.log("App Data Created");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
// xb1ANl8yyAjecDeY
