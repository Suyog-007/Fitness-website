const mongoose = require("mongoose");

const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)
 

const reviewSchema = new mongoose.Schema({
    review:String,
    author:{type:mongoose.Types.ObjectId,ref:"User"},
});
const validateReview = (data) => {
  const schema = Joi.object({
    review:Joi.string().required().label("review"),
    author:Joi.objectId().label("ObjectId")
  });
  return schema.validate(data);
};

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review,validateReview};
