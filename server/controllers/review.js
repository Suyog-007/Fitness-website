const {validateReview,Review}= require("../models/review");

const addReview=async(req,res,next)=>{
    try {
        const data={...req.body,author:req.user._id.toString()}
        const {error}= validateReview(data);
        if(error)
        return res.status(422).send({message:error.message});
        const review=await Review(data).save();
        return res.status(201).send({message:"Review created successfully"});
    } catch (error) {
        console.error(error)
        res.status(500).send({message:"Internal Server Error"})
    }
}
const deleteReview=async(req,res,next)=>{
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).send({message:"Internal Server Error"})
    }
}
const getReview=async(req,res,next)=>{
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).send({message:"Internal Server Error"})
    }
}
const getAllReviews=async(req,res,next)=>{
    try{
        const reviews=await Review.find({}).sort({createdAt: "1"}).populate("author","-password");
        return res.status(200).send({message:"Successfully Sent",data:reviews})
    }
    catch(error){
     console.error(error)
        res.status(500).send({message:"Internal Server Error"})
    }
}
module.exports={addReview,getAllReviews,getReview,deleteReview};