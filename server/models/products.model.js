const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
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
    name: Joi.string().min(3).max(60).required(),
    description: Joi.string().min(3).max(1000).required(),
    price: Joi.number().min(0),
  });
  return schema.validate(product);
};

const Product = mongoose.model("Product", productSchema);

exports.validateProduct = validateProduct;
exports.Product = Product;
