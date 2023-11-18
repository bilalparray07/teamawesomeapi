require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const product_route = require("./routes/product");
const mom_route = require("./routes/product");
const connectDB = require("./db/connect");
const { default: mongoose } = require("mongoose");
const Player = require("./model/product");
const Mom = require("./model/mom");
const productFromJson = require("./product.json");
const cors = require("cors");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.use(cors());
app.use("/api/products", product_route);
app.use("/api/products/mom", mom_route);
// Allow CORS for specified origins
const allowedOrigins = [
  "http://localhost:4200",
  "http://localhost:3000",
  "http://localhost:4201",
  "https://teamawesomesozeith.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests from the listed origins, deny others
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Player.create(productFromJson);
    await Mom.create({
      name: "Bilal",
      image: "assets/images/bilal.png",
      paragraph: "thisis a pragraphg",
      Role: "Dum",
    });
    app.listen(port, () => {
      console.log("App Data Created");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
// xb1ANl8yyAjecDeY
///???//
