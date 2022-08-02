const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
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

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    parent: Joi.string().optional(),
  });
  return schema.validate(category);
};

const Category = mongoose.model("category", categorySchema);

exports.validateCategory = validateCategory;
exports.Category = Category;
