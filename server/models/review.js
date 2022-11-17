const mongoose = require("mongoose");

const Joi = require('@hapi/joi');
const { date } = require("@hapi/joi");
Joi.objectId = require('joi-objectid')(Joi)
 

const reviewSchema = new mongoose.Schema({
    review:String,
    rating:Number,
    author:{type:mongoose.Types.ObjectId,ref:"User"},
    createdAt: {type: Date, default: new Date()}
});
const validateReview = (data) => {
  const schema = Joi.object({
    review:Joi.string().required().label("review"),
    rating:Joi.number().required().label("rating"),
    author:Joi.objectId().label("ObjectId")
  });
  return schema.validate(data);
};

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review,validateReview};
