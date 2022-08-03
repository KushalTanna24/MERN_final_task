const express = require("express");
const router = express.Router();
const { Product, validateProduct } = require("../models/products.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  Product.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "categoryId",
      },
    },
  ]).exec((err, products) => {
    if (err) return res.status(400).send(err);
    res.send(products);
  });
});

router.get("/:id", async (req, res) => {
  Product.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "categoryId",
      },
    },
  ]).exec((err, products) => {
    if (err) return res.status(400).send(err);
    res.send(products);
  });
});

router.post("/", upload.single("images"), async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const product = new Product({
    categoryId: req.body.categoryId,
    subCategoryId: req.body.subCategoryId,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    createdAt: Date.now(),
    updatedAt: null,
  });
  if (req.file) {
    product.images = req.file.filename;
  }
  const result = await product.save();
  if (!result) {
    return res.status(400).send("Product not saved");
  }
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await Product.findByIdAndDelete(req.params.id);
  if (!result) {
    return res.status(404).send("Product not found with the given id");
  }
  res.send("deleted successfully");
});

router.put("/:id", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const result = await Product.findByIdAndUpdate(
    req.params.id,
    {
      categoryId: req.body.categoryId,
      subCategoryId: req.body.subCategoryId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      images: req.body.images,
      updatedAt: Date.now(),
    },
    { new: true }
  );
  if (!result) {
    return res.status(404).send("product not found with the given id");
  }
  res.send(result);
});

module.exports = router;
