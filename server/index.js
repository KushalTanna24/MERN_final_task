const express = require("express");
const { default: mongoose } = require("mongoose");
const category = require("./routes/category.router");
const products = require("./routes/products.router");
const app = express();

// middlewares
app.use(express.json());
app.use("/category", category);
app.use("/products", products);
app.use(express.static("./public"));

// db connection
mongoose
  .connect("mongodb://localhost/MERN")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//endpoints
app.get("/", (req, res) => {
  res.send("Hello World");
});

// port and listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
