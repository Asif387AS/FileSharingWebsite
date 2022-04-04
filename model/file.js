const mongoose=require('mongoose')

// let fileSchema=mongoose.Schema

let fileSchema=new mongoose.Schema({
    filename:{type:String,required:true},
    path:{type:String,required:true},
    size:{type:Number,required:true},
    uuid:{type:String,required:true},
    sender:{type:String,required:false},
    receiver:{type:String,required:false},
    // createdAt:{type:Date,default:Date.now()}
},{timestamps:true})

module.exports=mongoose.model("FILESCHEMA",fileSchema)
