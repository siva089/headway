const mongoose=require("mongoose");
const data=new mongoose.Schema({
    title:{
        required:true,
        type:String,
        unique:true
    },
    description:{
        type:String,
        required:true
    }
})
const Data=mongoose.model("Data",data)

module.exports=Data