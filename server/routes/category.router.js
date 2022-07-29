const express = require("express");
const router = express.Router();
const { Category, validateCategory } = require("../models/category.model");

router.get("/", async (req, res) => {
  const result = await Category.find();
  if (!result || result.length === 0) {
    return res.status(404).send("There are no categories yet");
  }
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await Category.findById(req.params.id);
  if (!result) {
    return res.status(404).send("Category not found with the given id");
  }
  res.send(result);
});

router.post("/", async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const category = new Category({
    name: req.body.name,
    parent: req.body.parent,
    createdAt: Date.now(),
    updatedAt: null,
  });
  const result = await category.save();
  if (!result) {
    return res.status(400).send("Category not saved");
  }
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await Category.findByIdAndDelete(req.params.id);
  if (!result) {
    return res.status(404).send("Category not found with the given id");
  }
  res.send("deleted successfully");
});

router.put("/:id", async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const result = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      parent: req.body.parent,
      updatedAt: Date.now(),
    },
    { new: true }
  );
  if (!result) {
    return res.status(404).send("Category not found with the given id");
  }
  res.send(result);
});

module.exports = router;
