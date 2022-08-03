const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 60,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 1000,
  },
  price: {
    type: Number,
    min: 0,
  },
  images: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const validateProduct = (product) => {
  const schema = Joi.object({
    categoryId: Joi.string().required(),
    subCategoryId: Joi.string().optional(),
    name: Joi.string().min(3).max(60).required(),
    description: Joi.string().min(3).max(1000).required(),
    price: Joi.number().min(0),
  });
  return schema.validate(product);
};

const Product = mongoose.model("Product", productSchema);

exports.validateProduct = validateProduct;
exports.Product = Product;
